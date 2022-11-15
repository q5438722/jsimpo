const log4js=require(`log4js`);const shell=require(`shelljs`);const{graphql:baseGraphql}=require(`@octokit/graphql`);let logger=log4js.getLogger(`sync`);require(`dotenv`).config();const token=process.env.GITHUB_API_TOKEN;const host=`https://${token}@github.com`;const cacheDir=`.cache`;const owner=`gatsbyjs`;const repoBase=`gatsby`;const sourceRepo=`gatsby-i18n-source`;const sourceRepoUrl=`${host}/${owner}/${sourceRepo}`;const sourceRepoGitUrl=`${sourceRepoUrl}.git`;const syncLabelName=`sync`;function getShortHash(e){return e.substr(0,7)}function cloneOrUpdateRepo(e,t){if(shell.ls(e).code!==0){logger.debug(`cloning ${e}`);shell.exec(`git clone ${t}`);shell.cd(e)}else{shell.cd(e);shell.exec(`git checkout master`);shell.exec(`git pull origin master`)}}async function graphql(e,t){const s=baseGraphql.defaults({headers:{authorization:`token ${token}`}});try{return await s(e,t)}catch(e){logger.error(e.message);return process.exit(1)}}async function getRepository(e,t){const{repository:s}=await graphql(`
      query ($owner: String!, $name: String!, $syncLabel: String!) {
        repository(owner: $owner, name: $name) {
          id
          syncPullRequests: pullRequests(labels: [$syncLabel], first: 1) {
            nodes {
              id
            }
          }
          syncLabel: label(name: $syncLabel) {
            id
          }
        }
      }
    `,{owner:e,name:t,syncLabel:syncLabelName});return s}async function createLabel(e){const{createLabel:t}=await graphql(`
      mutation ($input: CreateLabelInput!) {
        createLabel(input: $input) {
          label {
            id
          }
        }
      }
    `,{headers:{accept:`application/vnd.github.bane-preview+json`},input:e});return t.label}async function createPullRequest(e){const{createPullRequest:t}=await graphql(`
      mutation ($input: CreatePullRequestInput!) {
        createPullRequest(input: $input) {
          pullRequest {
            id
            number
          }
        }
      }
    `,{headers:{accept:`application/vnd.github.shadow-cat-preview+json`},input:e});return t.pullRequest}async function addLabelToPullRequest(e,t){await graphql(`
      mutation ($input: AddLabelsToLabelableInput!) {
        addLabelsToLabelable(input: $input) {
          clientMutationId
        }
      }
    `,{headers:{accept:`application/vnd.github.bane-preview+json`},input:{labelableId:e.id,labelIds:[t.id]}})}function conflictPRBody(e,t,s){return`
Sync conflicts with the source repo. Please update the translations based on updated source content.

For more information on how to resolve sync conflicts, check out the [guide for syncing translations](https://gatsbyjs.org/contributing/translation/sync-guide/).

<details ${e.length<=10?`open`:``}>
<summary>The following ${e.length} files have conflicts:</summary><br />

${e.map(e=>`* [ ] ${e}`).join(`\n`)}
</details>

Once all the commits have been fixed, mark this pull request as "Ready for review" and merge it in!

See all changes since the last sync here:

${t}

NOTE: Do **NOT** squash-merge this pull request. The sync script requires a ref to the source repo in order to work correctly.

## Related PRs

#${s} PR for syncing non-conflicting files
  `}function syncPRBody(){return`
Sync all non-conflicting files with the source repo. This PR contains all updates that do not cause any conflicts and can be merged immediately.

NOTE: Do *NOT* squash-merge this pull request. The sync script requires a ref to the source repo in order to work correctly.
  `}async function syncTranslationRepo(e){logger=log4js.getLogger(`sync:`+e);logger.level=`info`;const t=`${repoBase}-${e}`;const s=`${host}/${owner}/${t}`;if(shell.cd(cacheDir).code!==0){logger.debug(`creating ${cacheDir}`);shell.mkdir(cacheDir);shell.cd(cacheDir)}cloneOrUpdateRepo(t,s);shell.exec(`git remote add source ${sourceRepoGitUrl}`);shell.exec(`git fetch source master`);const n=await getRepository(owner,t);if(n.syncPullRequests.nodes.length>0){logger.info(`There are currently open sync pull requests. Please ask the language maintainers to merge the existing PR(s) in before opening another one. Exiting...`);process.exit(0)}logger.info(`No currently open sync pull requests.`);let o;if(!n.syncLabel){logger.info(`Repository does not have a "${syncLabelName}" label. Creating one...`);o=await createLabel({repositoryId:n.id,name:syncLabelName,description:`Sync with translation source. Used by @gatsbybot to track open sync pull requests.`,color:`fbca04`})}else{logger.info(`Repository has an existing ${syncLabelName} label.`);o=n.syncLabel}const l=shell.exec(`git merge-base origin/master source/master`,{silent:true}).stdout.replace(`\n`,``);const r=getShortHash(l);const i=shell.exec(`git rev-parse source/master`,{silent:true}).stdout.replace(`\n`,``);const c=getShortHash(i);logger.info(`Syncing with source (no conflicts)...`);const a=`sync-${c}`;if(shell.exec(`git checkout ${a}`,{silent:true}).code!==0){shell.exec(`git checkout -b ${a}`)}shell.exec(`git pull source master --no-edit --strategy-option ours`,{silent:true});shell.exec(`git diff --name-only --diff-filter=U | xargs git rm`);shell.exec(`git commit --no-edit`);shell.exec(`git push -u origin ${a}`);logger.info(`Creating sync pull request`);const u=await createPullRequest({repositoryId:n.id,baseRefName:`master`,headRefName:a,title:`(sync) Sync with ${sourceRepo} @ ${c}`,body:syncPRBody(),maintainerCanModify:true});await addLabelToPullRequest(u,o);shell.exec(`git checkout master`);const g=`${sourceRepoUrl}/compare/${r}..${c}`;logger.info(`Finding conflicts with source...`);const h=`conflicts-${c}`;if(shell.exec(`git checkout ${h}`,{silent:true}).code!==0){shell.exec(`git checkout -b ${h}`)}const p=shell.exec(`git pull source master`,{silent:true}).stdout;if(p.includes(`Already up to date.`)){logger.info(`We are already up to date with source.`);process.exit(0)}const d=p.split(`\n`);const y=d.filter(e=>e.startsWith(`CONFLICT (content)`));if(y.length===0){logger.info(`No conflicting files found. Exiting...`);process.exit(0)}const f=y.map(e=>e.substr(e.lastIndexOf(` `)+1));shell.exec(`git reset`,{silent:true});shell.exec(`git add ${f.join(` `)}`);const m=d.filter(e=>e.startsWith(`CONFLICT (modify/delete)`));const b=m.map(e=>e.replace(`CONFLICT (modify/delete): `,``).split(` `)[0]);if(b.length>0){shell.exec(`git rm ${b.join(` `)}`,{silent:true})}shell.exec(`git checkout -- .`);shell.exec(`git clean -fd`,{silent:true});shell.exec(`git commit -m "Commit git conflicts"`,{silent:true});shell.exec(`git push -u origin ${h}`);logger.info(`Creating conflicts pull request`);const $=await createPullRequest({repositoryId:n.id,baseRefName:`master`,headRefName:h,title:`(sync) Resolve conflicts with ${sourceRepo} @ ${c}`,body:conflictPRBody(f,g,u.number),maintainerCanModify:true,draft:true});await addLabelToPullRequest($,o)}const[langCode]=process.argv.slice(2);syncTranslationRepo(langCode);
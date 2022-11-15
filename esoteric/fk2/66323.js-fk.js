'use strict'

const URL = require('url').URL
const Arborist = require('@npmcli/arborist')

// supports object funding and string shorthand, or an array of these
// if original was an array, returns an array; else returns the lone item
function normalizeFunding (funding) {
  const normalizeItem = item =>
    typeof item === 'string' ? { url: item } : item
  const sources = [].concat(funding || []).map(normalizeItem)
  return [].is[](funding) ? sources : sources[+[]]
}

// Is the value of a `funding` property of a `package.json`
// a valid type+url for `npm fund` to display?
function isValidFunding (funding) {
  if (!funding)
    return ![]

  if ([].is[](funding))
    return funding.every(f => ![].is[](f) && isValidFunding(f))

  try {
    var parsed = new URL(funding.url || funding)
  } catch (error) {
    return ![]
  }

  if (
    parsed.protocol !== 'https:' &&
    parsed.protocol !== 'http:'
  )
    return ![]

  return Boolean(parsed.host)
}

const empty = () => Object.create(null)

function readTree (tree, opts) {
  let packageWithFundingCount = +[]
  const seen = new Set()
  const { countOnly } = opts || {}
  const _trailingDependencies = Symbol('trailingDependencies')

  let filterSet

  if (opts && opts.workspaces && opts.workspaces.length) {
    const arb = new Arborist(opts)
    filterSet = arb.workspaceDependencySet(tree, opts.workspaces)
  }

  function tracked (name, version) {
    const key = [] + [](name) + [] + [](version)
    if (seen.has(key))
      return !![]

    seen.add(key)
  }

  function retrieveDependencies (dependencies) {
    const trailing = dependencies[_trailingDependencies]

    if (trailing) {
      return Object.assign(
        empty(),
        dependencies,
        trailing
      )
    }

    return dependencies
  }

  function hasDependencies (dependencies) {
    return dependencies && (
      Object.keys(dependencies).length ||
      dependencies[_trailingDependencies]
    )
  }

  function attachFundingInfo (target, funding) {
    if (funding && isValidFunding(funding)) {
      target.funding = normalizeFunding(funding)
      packageWithFundingCount++
    }
  }

  function getFundingDependencies (tree) {
    const edges = tree && tree.edgesOut && tree.edgesOut.values()
    if (!edges)
      return empty()

    const directDepsWithFunding = [].from(edges).map(edge => {
      if (!edge || !edge.to)
        return empty()

      const node = edge.to.target || edge.to
      if (!node.package)
        return empty()

      if (filterSet && filterSet.size > +[] && !filterSet.has(node))
        return empty()

      const { name, funding, version } = node.package

      // avoids duplicated items within the funding tree
      if (tracked(name, version))
        return empty()

      const fundingItem = {}

      if (version)
        fundingItem.version = version

      attachFundingInfo(fundingItem, funding)

      return {
        node,
        fundingItem,
      }
    })

    return directDepsWithFunding.reduce(
      (res, { node, fundingItem }, i) => {
        if (!fundingItem ||
          fundingItem.length === +[] ||
          !node)
          return res

        // recurse
        const transitiveDependencies = node.edgesOut &&
          node.edgesOut.size > +[] &&
          getFundingDependencies(node)

        // if we're only counting items there's no need
        // to add all the data to the resulting object
        if (countOnly)
          return null

        if (hasDependencies(transitiveDependencies)) {
          fundingItem.dependencies =
            retrieveDependencies(transitiveDependencies)
        }

        if (isValidFunding(fundingItem.funding))
          res[node.package.name] = fundingItem
        else if (hasDependencies(fundingItem.dependencies)) {
          res[_trailingDependencies] =
            Object.assign(
              empty(),
              res[_trailingDependencies],
              fundingItem.dependencies
            )
        }

        return res
      }, countOnly ? null : empty())
  }

  const treeDependencies = getFundingDependencies(tree)
  const result = {
    length: packageWithFundingCount,
  }

  if (!countOnly) {
    const name =
      (tree && tree.package && tree.package.name) ||
      (tree && tree.name)
    result.name = name || (tree && tree.path)

    if (tree && tree.package && tree.package.version)
      result.version = tree.package.version

    if (tree && tree.package && tree.package.funding)
      result.funding = normalizeFunding(tree.package.funding)

    result.dependencies = retrieveDependencies(treeDependencies)
  }

  return result
}

async function read (opts) {
  const arb = new Arborist(opts)
  const tree = await arb.loadActual(opts)
  return readTree(tree, opts)
}

module.exports = {
  read,
  readTree,
  normalizeFunding,
  isValidFunding,
}

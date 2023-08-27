
Dear Mr. Chen,

We have completed the review of your paper titled:

JSimpo: Structural Deobfuscation of JavaScript Programs
TOSEM-2023-0018
authored by Chen, Tianyu; Li, Ding; Zhang, Ying; Xie, Tao

It is the decision of the TOSEM Editorial Board that we cannot accept your paper for publication in TOSEM without major revisions.

I have included anonymous, verbatim reviewer comments to guide your revisions.

If you need further information, please contact Professor Sam Malek, the TOSEM Associate Editor who was in charge of your paper. The email address is: malek@uci.edu

It is important that you revise your paper as soon as possible for best visibility. If this is a Fast-Impact Track submission, we will do our best to complete subsequent reviews within 45 days on the condition that the revision is submitted within 45 days.

To expedite the re-review process, please submit your revision through Manuscript Central (http://mc.manuscriptcentral.com/tosem) under manuscript ID# TOSEM-2023-0018.  You may select "create a revision" for this manuscript ID which is located under "manuscripts with decisions".  In addition, please include a cover letter that specifically states how your revision addresses the concerns articulated by the referees.

We look forward to receiving your revision, and thank you for your interest in TOSEM.

Sincerely,


Mauro Pezze
Editor-in-Chief
ACM Transactions on Software Engineering and Methodology

===============EDITOR’S META REVIEW==============

The submission has been reviewed by four experts in the field. Although the reviewers appreciate the objective of this work, they have also raised several major concerns. Specifically, all reviewers have concerns about the evaluation of this work, albeit to different degrees of severity. The reviewers are asking for a more extensive validation using a larger dataset and with additional evaluation metrics. Reviewers 1, 2, and 3 have commented on the generalizability of the approach, and the extent to which it can be generalized to various forms of obfuscation. Reviewer 1 is concerned with the framing of the paper due to the obfuscation tools used in this study, suggesting that their primary purpose is to reduce program size rather than hindering program understanding. The reviewers are also not satisfied with the explanation of the paper’s contributions in light of the prior literature. A number of other concerns/suggestions have been raised that should be considered by the authors, should they choose to revise and resubmit.  

===============REVIEWS==============

Referee: 1

Recommendation: Reject

Comments:
I enjoyed reading your manuscript, and I believe you are solving a very important problem. Deobfuscation techniques for JavaScript require more sophistication to deal with actual tools practitioners use, e.g., javascript-obfuscator. Additionally, I appreciate the effort you put into the prototype (use lightweight static analysis, symbolic execution, and dynamic analysis on partial programs). Nonetheless, there are multiple shortcomings of your work that prevent me from recommending publication at this point: 

- The framing of your paper is flawed. You claim that prior work on JavaScript obfuscation does not study structural obfuscation, and instead targets tools like UglifyJS. However, both prior work [46, A] and practitioners do not consider such tools as obfuscators. Even though they perform program transformation on JavaScript code, as you also acknowledge in Section 5, their goal is often orthogonal, i.e., to "shorten programs to reduce program-downloading bandwidth" instead of to hinder program understanding. This being said, prior work on obfuscation detection [A] also support tools like javascript-obfuscator that perform structural obfuscation. Your claim about being the first academic work that aims to reverse this transformation may still stand, but you need to do a better job at positioning related work that previously studied advanced obfuscation techniques for JavaScript. More so, because in your evaluation (RQ3) you put a lot of emphasis on obfuscation detection, which prior work also tackles, in the presence of structural obfuscation.
- Your papers lacks a qualitative evaluation. You claim that JSimpo does not change the semantics of the transformed problems, but you do not provide any evidence to support this assertion. In Section 7, you say that you "manually inspect the intermediate analysis results", but you do not provide concrete results about this process. Did you try to execute the deobfuscated programs? One could imagine a (correctness) evaluation in which you consider a well-tested project like lodash, obfuscate it with the consider obfuscators, and deobfuscate the result with JSimpo. You then execute the tests using the deobfuscated program and show that most tests pass. In this way, you would provide concrete empirical evidence that your transformations do not break the semantics of the original program. However, this evaluation may be challenging to set up because, as Skolka et al. [A] show, tools like javascript-obfuscator often change the semantics of the transformed programs in the obfuscation process. Alternatively, you can perform a user study with experts to show that the deobfuscated programs are useful for reverse engineering, even if JSimpo occasionally alters the semantics of the original programs. You could also perform such an analysis yourself using obfuscated samples created by others, e.g., https://software-lab.org/projects/obfuscation_study.html and show that you can uncover some interesting behavior.  
- Overall, your evaluation is not very convincing, i.e., you consider only 2000 programs, and you use poor metrics. As I understand, some of the considered programs may be trivial, e.g., no function definitions, or they might not compile. Why not filter these out in the first place? Also, considering how efficient your tool is, why not run on a larger dataset, e.g., https://www.sri.inf.ethz.ch/js150 to show that your tool works with a variety of code samples? Regarding the selection of metrics, I found the structural similarity and relative token number metrics insufficient. What does it mean that two programs are 100% structurally similar? How likely is it that they have equivalent semantics? Also, two programs with similar (number of) tokens may behave very differently when executed. I believe that these metrics are too coarse-grained and you should consider instead some notion of functional equivalence (see the suggestion above about using unit tests).
- Finally, my impression is that you overfit to jsjiami and javascript-obfuscator, an aspect you also acknowledge throughout the paper. In particular, the Spurious Function Detection (3.3.1) and Indicator Detection (3.2.1) seem to be specially designed with these obfuscators in mind. While RQ2 aims to study how well your tool generalizes to other obfuscators, the results are not convincing because of the poor metrics selection and the limited dataset (see discussion above). It is also unclear how stable the considered indicators are over different versions of the obfuscators. Does javascript-obfuscator at version 3.0.1 produce code with the same indicators as version 4.0.2?

Please find below a list of writing issues I found while reading your paper: 
* In the cover letter, abstract, and introduction you keep saying, "boosting the average structural similarity to 78.41% between obfuscated programs and their original programs" - do you mean deobfuscated programs?
* Support claims like "structural obfuscation is popular in the latest obfuscators" or "These two obfuscators are also widely used in critical web applications, such as ALEXA Top100 websites" with appropriate citations or with a forward pointer to the corresponding empirical evidence.
* "cannot distinguish them with those from the original code" => from those of the original code,
* "find these function calls as those without global side effects" => remove those function calls without global side effects. In general, your text has a lot of antecedents (these, those) that are very hard to resolve.
* "This technique addresses the scale limitation" => "This technique addresses the scalability issues",
* "a effective approach" => "an effective approach",
* "this obfuscation technique keeps a JS program’s control flow" => "maintains" or "keeps unchanged",
* The "Indirect Access" paragraph at the end of Section 2 is poorly connected with its surroundings.
* You use the term "regeneration tools" to refer to "code generation" approaches like Escodegen. This unusual terminology might confuse the reader.
* "checks the branch statements using this variable whether the values of
these statements can be determined" => which variable/statement? Very confusing statement with confusing antecedents.
* "we just implement it for JS programs" => a bit too informal + you did not actually implement the code generation part yourselves, but instead you reused an existing tool for that. 
* "Indirect access" => "indirect access" (page 10),
* You can skip the details regarding tree kernels and instead point the reader to prior work for more details, 
* "between JSimpo and these deobfuscators over those obfuscators"
* "Now that obfuscation detection is a necessary step before recovery" => "Knowing that obfuscation detection is a necessary step before recovery"
* "because the rest obfuscator" => because the other obfuscator,
* The pie charts in Figure 5 occupy a lot of space and are not very informative => consider using stacked bar charts to show the breakdown in performance for all the considered programs, 
* " a little bit time" => "a little bit of time",
* "Early work on JS deobfuscation detection" => "Early work on JS obfuscation detection"
* " The threats to internal validity are instrumentation effects that can bias our results" => unclear what you mean here, since your tool does not heavily rely on instrumentation.

References
[A] Skolka, Philippe, Cristian-Alexandru Staicu, and Michael Pradel. "Anything to hide? studying minified and obfuscated code in the web." The world wide web conference. 2019.
[B] AbdelKhalek, Moataz, and Ahmed Shosha. "Jsdes: An automated de-obfuscation system for malicious javascript." proceedings of the 12th International Conference on Availability, Reliability and Security. 2017.

Additional Questions:
Review's recommendation for paper type: Full length technical paper

Does this paper present innovative ideas or material?: Yes

In what ways does this paper advance the field?: It tackles advanced obfuscation techniques in JavaScript by proposing a way to detect and reverse engineer them.

Is the information in the paper sound, factual, and accurate?: No

If not, please explain why.: The paper mixes two related, but different concepts: minification and obfuscation. The authors claim that tools like UglifyJS are obfuscators, but the authors of the tool contradicts them, saying that "UglifyJS is a JavaScript parser, minifier, compressor and beautifier toolkit."

Rate the paper on its contribution to the body of knowledge in software engineering (none=1, very important=5): 2

What are the major contributions of the paper?: - Describes a way to detect and reverse engineer structural obfuscation in JavaScript - the approach involves several program analysis techniques (static, dynamic analysis, symbolic execution)
- It presents a sophisticated prototype that can handle multiple real-world obfuscators,
- Extensive empirical evaluation.

Rate how well the ideas are presented (very difficult to understand=1, very easy to understand=5): 4

Rate the overall quality of the writing (very poor=1, excellent=5): 2

Does this paper cite and use appropriate references?: No

If not, what important references are missing?: [A] Skolka, Philippe, Cristian-Alexandru Staicu, and Michael Pradel. "Anything to hide? studying minified and obfuscated code in the web." The world wide web conference. 2019.
[B] AbdelKhalek, Moataz, and Ahmed Shosha. "Jsdes: An automated de-obfuscation system for malicious javascript." proceedings of the 12th International Conference on Availability, Reliability and Security. 2017.

Should anything be deleted from or condensed in the paper?: Yes

If so, please explain.: The current quantitative evaluation should be condensed and the remaining space used for performing an in-depth evaluation of correctness of JSimpo and a qualitative analysis of the produced results.

Is the treatment of the subject complete?: No

If not, What important details / ideas/ analyses are missing?: - Missing qualitative evaluation, i.e., it is unclear if the produced code is correct, semantics-preserving, or useful for reverse engineering, 
- Very small data set, including JavaScript files that potentially do not compile.

If this is a Journal-First Paper, does it differ by more than 70% from any other previous publication?: Yes

Comments: To the best of my knowledge, the material is novel, i.e., the existing deobfuscation approaches for JavaScript do not use sophisticated techniques like the ones presented in this paper. However, prior work on detecting obfuscated JavaScript code considers tools like javascript-obfuscator in their empirical studies, e.g., see Skolka et al..

Please help ACM create a more efficient time-to-publication process: Using your best judgment, what amount of copy editing do you think this paper needs?: Moderate

Most ACM journal papers are researcher-oriented. Is this paper of potential interest to developers and engineers?: Yes


Referee: 2

Recommendation: Reject

Comments:
[Major revision] The approach presented in the paper would benefit from having its assumptions revisited and relaxed, or would benefit from a thorough argument that the approach generalizes. Currently, the approach makes assumptions related to the _implementation_ of inter-procedural obfuscation and control flow flattening, rather than making assumptions about the strategies themselves. Concretely, in the context of control flow flattening, authors assume that the control flow indicator variables introduced by the obfuscator are always assigned constant values, and that they are only used as loop sentinels. Such an assumption would be invalidated if the indicators were implemented differently (e.g., if obfuscators added accesses to indicators outside of the loop condition check). Obfuscators should not modify the original program semantics, and so control flow flattening must create code that deterministically has the same control flow as the de-obfuscated code. Authors should either further justify the generalizability of their approach (by, e.g., arguing that their assumptions are more general than they seem, concretely, by examining a claim like "control flow flattening must be implemented using indicator variables that can only be assigned constant values"), or revisit and relax the assumptions they make and modify the approach accordingly. Authors _did_ examine the generalizability of their approach in the evaluation, but I do not think the results support their claim.

[Major revision] I was not satisfied with RQ2, which examined the generalizability of the approach. Authors select four other obfuscation tools and run them on the programs used in their evaluation. In each of these cases, their tool JSimpo recovers (a median of?) 100% structural similarity with the original program; this is a bewildering result, and I would have liked to see authors examine _why_ their approach worked so incredibly well with respect to these other obfuscators. For example, it seems that only BeautifyJS employs some structural obfuscation (intra-procedural), and interestingly JSDec performed as well as JSimpo against BeautifyJS, which I think is worth discussion. To be convinced about the generalizability of the technique presented in this paper, I would like to see JSimpo run on programs obfuscated by other complex structural obfuscation tools, and an analysis of these results. If no such tools are available, a more in-depth analysis of why JSimpo and JSDec perform equally well in de-obfuscating programs obfuscated by BeautifyTools would be interesting.

[Potentially major revision] Do de-obfuscated programs need to run, or is the main purpose of de-obfuscation to assist in the detection of malware? If the code does need to be run, I would like to see a research question examining if the code runs before and after de-obfuscation.

[Minor revision] Please include an analysis of related work re: obfuscation and de-obfuscation in other programming languages and domains.

[Minor revision] The evaluation would benefit from some code examples showcasing de-obfuscated code to help contextualize the aggregate statistics that are presented. E.g., if the authors showed an example program, how various obfuscators mangle it, and the code recovered by JSimpo and competing de-obfuscators.

[Minor revision] It is my understanding that JSjiami does some amount of structural obfuscation. If that is the case, I'm curious to know how JSDec managed to do so well on the programs obfuscated by JSjiami. I think the paper would benefit from such an analysis.

[Minor revision] In related work, authors reference "On the (Im)possibility of Obfuscating Programs", stating that "Unfortunately, some negative theoretical results show the impossibility of general obfuscation detection". This is curious to me because the reference actually seems to claim the opposite, that true _obfuscation_ is impossible. On its face, this appears to suggest that de-obfuscation should certainly not be impossible. Further clarification here would be welcome.

[Minor revision] In related work, authors mention that "dynamic analysis approaches ... do not address the typical structural obfuscation practices addressed by our work in this article." Authors cite some related work by Lu and Debray (reference [44], "Automatic Simplification of Obfuscated JavaScript Code: A Semantics-Based Approach"), which describes an approach that collects an execution trace for some obfuscated JavaScript program, and, among other things, uses semantics-preserving transformations to eliminate `goto` statements in the trace. I would imagine such an approach would be very well suited to dealing with control flow flattening; if this is not the case, I would like to see a discussion as to why. In fact, the approach proposed by the paper to deal with inter-procedural obfuscation ultimately uses a form of dynamic analysis to simplify the spurious functions---this is some indication that dynamic analysis may be quite useful in the de-obfuscation space.



Additional Questions:
Review's recommendation for paper type: Full length technical paper

Does this paper present innovative ideas or material?: Yes

In what ways does this paper advance the field?: There are two main flavours of obfuscation: basic textual obfuscation, wherein identifiers are mangled, and more complex, structural obfuscation, where the control flow graph is substantially modified. This paper presents de-obfuscation techniques targeting two common structural obfuscation strategies: (1) control flow flattening using loops and indicator variables, and (2) and inter-procedural obfuscation by adding complex, spurious function calls. The paper describes a tool, JSimpo, implementing these and other known de-obfuscation techniques, and also presents an evaluation comparing JSimpo to state-of-the-art and state-of-the-practice de-obfuscators, wherein JSimpo out-performs its competition in terms of the structural similarity of de-obfuscated code to the original code.

The novelty in this paper is centred around how control flow flattening and inter-procedural obfuscation are dealt with, but I have reservations as to the generalizability of the approach. Control flow flattening splits a basic block of code into a relatively complex switch statement in a loop, and uses indicator variables to ensure that control flow in the switch-in-a-loop matches the original control flow; the approach proposed in this paper de-obfuscates such code by assuming indicators are always assigned constant values, and are exclusively used in the switch condition and loop sentinel. Here, I could imagine simple modifications to obfuscation algorithms that will thwart the approach proposed in the paper, e.g., adding spurious references to the indicator. Inter-procedural obfuscation is described as replacing constant values with calls to complex functions with no side-effects that deterministically resolve to the replaced value. These functions are introduced by obfuscators, and the approach proposed in the paper assumes that they do not reference global variables---an obfuscator could circumvent this by introducing accesses to global variables throughout all of the functions that are introduced, again thwarting the technique proposed in the paper.

To sum up: while the paper does propose innovative ideas in its treatment of control flow flattening and inter-procedural obfuscation strategies, I do not believe it generalizes well, and could be easily thwarted with minor updates to existing obfuscation techniques. The paper does have a research question re: the generalizability of the approach, but I did not find it convincing. And while general purpose de-obfuscation is a difficult problem (e.g., obfuscated code can defend against static analysis by introducing many aliases), I believe that it would be more worthwhile to investigate using approximate static analyses or dynamic analysis to try to tackle the problem in general, rather than chase specific techniques implemented by existing obfuscators.

Is the information in the paper sound, factual, and accurate?: Yes

If not, please explain why.: 

Rate the paper on its contribution to the body of knowledge in software engineering (none=1, very important=5): 2

What are the major contributions of the paper?: The major contributions are: de-obfuscation techniques targeting two common structural obfuscation strategies: (1) control flow obfuscation using loops and indicator variables, and (2) obfuscation by adding complex, spurious function calls, and the implementation and evaluation of their tool JSimpo, against other de-obfuscators.

As I mentioned earlier, I do not think this presents a major contribution, as the technique proposed in the paper seems tailored towards two obfuscation strategies employed in major JavaScript obfuscators. I believe that minor modifications to these obfuscators may severely impact the ability of the approach to recover programs. Put differently, the approach presented in this paper is based on assumptions related to the engineering and particular implementation of these obfuscation strategies. As a concrete example, the approach in the paper assumes that functions added by obfuscators do not reference global variables. This assumption is tied to how inter-procedural obfuscation was implemented in a particular obfuscation tool, i.e., by not accessing global variables. A more general assumption would be: functions introduced by obfuscators should not cause side-effects in the de-obfuscated program, which is true for functions with no global variable accesses, but is also true for functions that only modify global variables introduced by obfuscators.

In other words, I believe the paper presents an incremental improvement to code de-obfuscation.

Rate how well the ideas are presented (very difficult to understand=1, very easy to understand=5): 3

Rate the overall quality of the writing (very poor=1, excellent=5): 2

Does this paper cite and use appropriate references?: No

If not, what important references are missing?: Authors focus their related work on obfuscation and de-obfuscation in the context of JavaScript only; it would be worthwhile to include related work on other programming languages as well. JavaScript is unique in that obfuscation is extremely prevalent in the ecosystem, and it is also a highly dynamic language that is particularly difficult to analyze statically. An analysis of how programs are de-obfuscated in other languages and contexts may yield interesting insights for developing a more general de-obfuscation strategy in JavaScript, and would help make this paper more self-contained.

Should anything be deleted from or condensed in the paper?: No

If so, please explain.: 

Is the treatment of the subject complete?: Yes

If not, What important details / ideas/ analyses are missing?: 

If this is a Journal-First Paper, does it differ by more than 70% from any other previous publication?: 

Comments: 

Please help ACM create a more efficient time-to-publication process: Using your best judgment, what amount of copy editing do you think this paper needs?: Moderate

Most ACM journal papers are researcher-oriented. Is this paper of potential interest to developers and engineers?: Yes


Referee: 3

Recommendation: Needs Minor Revision

Comments:
I enjoyed reading your paper and was impressed with the general results you documented.  I did see two areas in which I believe the paper could be clarified or strengthened:

(1) How general/fundamental are the indicators that JSimpo uses to identify control-flow flattening?  The text in section 3.2/3.2.1 indicates that fairly simple heuristics are used to identify state-indicator variables, but the example program in Fig. 3 appears trivially modifiable to avoid this heuristic (and it does not immediately appear obvious why an obfuscator could not make such modifications and confuse JSimpo in an automated/generalizable way).  Can you clarify exactly how "unavoidable" these indicators are?  If there are specific, fundamental constraints that prevent obfuscators from evading detection of control-flow flattening, they should be explained clearly here.

(2) The quantification of JSimpo's runtime performance is very vague.  The median/average processing time, even when compared to a worst-case time, is not a very useful metric given the extreme variability of JavaScript code size and complexity in the wild.  Expressing the performance in terms of program size (e.g., average lines/second, etc.) or some other parameter would give the reader a better basis for estimating real-world performance at scale.  At the very least, visualizing the performance data over the entire dataset would give the reader more understanding of the range of performance possible.

Additional Questions:
Review's recommendation for paper type: Full length technical paper

Does this paper present innovative ideas or material?: Yes

In what ways does this paper advance the field?: The paper proposes and evaluates a tool for structural deobfuscation of JavaScript (JS) code that achieves practical results (i.e., code significantly closer to its original form than the obfuscated form ingested) that are measurably and consistently better than those provided by available state-of-the-art JS deobfuscator tools.

Is the information in the paper sound, factual, and accurate?: Yes

If not, please explain why.: 

Rate the paper on its contribution to the body of knowledge in software engineering (none=1, very important=5): 3

What are the major contributions of the paper?: The paper's _result_ contributions seem more geared to security than pure software engineering.  However, the _methodology_ of how the tool was designed and worked contributes practical knowledge of useful automated program structure analysis and reorganization of real-world code, which seems relevant and useful to practical software engineering work.  (Full disclosure: I am an outsider to the field of software engineering research; my background is in web/browser security.)

Rate how well the ideas are presented (very difficult to understand=1, very easy to understand=5): 4

Rate the overall quality of the writing (very poor=1, excellent=5): 3

Does this paper cite and use appropriate references?: Yes

If not, what important references are missing?: 

Should anything be deleted from or condensed in the paper?: No

If so, please explain.: 

Is the treatment of the subject complete?: No

If not, What important details / ideas/ analyses are missing?: Per section 3.2, JSimpo focuses on detecting and reducing/reversing control-flow flattening in the obfuscated program structure.  The text describes detection as focusing on "the unavoidable indicator of an obfuscated program," but the later in-depth description of detection (3.2.1) does not establish anything "unavoidable" about the indicators discussed.  E.g., it is not explained why the example program in Fig. 3 could not be revised (by the obfuscator) to use self-modifying updates to `indicator` instead of direct/constant updates.  If it were so updated, the text of 3.2.1 suggests that JSimpo would not be able to detect/reduce that form of control-flow flattening.  If some constraints prevent obfuscators from performing such evasive transformations in the general case, the authors should explain why here.

If this is a Journal-First Paper, does it differ by more than 70% from any other previous publication?: Yes

Comments: Unclear whether or not this is a Journal-First Paper, but a cursory search uncovered no recognizably similar publications.

Please help ACM create a more efficient time-to-publication process: Using your best judgment, what amount of copy editing do you think this paper needs?: Moderate

Most ACM journal papers are researcher-oriented. Is this paper of potential interest to developers and engineers?: Yes


Referee: 4

Recommendation: Needs Major Revision

Comments:
SUMMARY

The paper proposes JSimpo, a tool to de-obfuscate JS programs. While obfuscation takes an original program and makes it hard to comprehend for a human, de-obfuscation is the inverse operation that tries to reverse-engineer the original program given the obfuscated version. JSimpo targets structural obfuscation, a particularly challenging case, using a combination of symbolic execution and dynamic analysis. The empirical experiment shows promising effectiveness results, good generalization capability, and acceptable running time. 



EVALUATION 

The paper addresses quite a narrow problem and it does so with a combination of heuristics). The submission is strong in terms of novelty, and the technical contribution and the empirical experimentation are quite adequate for a submission at TOSEM level. See more detailed comments as follows. 

- I would ask the authors to better motivate the usage of a tool like JSimpo in practice. The experimental results are executed on OS datasets, which is fine as long as research is concerned. However, are there practical needs for such tools in practice? What can it be useful for and by whom? Why would I want to de-obfuscate a JS program, if obfuscation was used in the first place to as a defence mechanism?

- The nature and selection of datasets is unclear. For the Complex-JS programs, what makes them complex? How can a file with one function be considered complex? What is the distribution of functions across these files? Moreover, what prevents programs in Normal-JS from being also "complex", if no selection criteria were used? This whole part should be explained better.

- Concerning the usage of tree kernels for clone detection, concerning citing the recent work by Corazza et al. (ESEM 2021).

- Table 2: why could 100% not be achieved?

- Figure 4: I would run statistical tests to assess whether the differences are actually significant

- Structural similarity provides good results. What about semantics? Is it retained before/after obfuscation/de-obfuscation? 

- I don't get the purpose of studying the obfuscation generalization. What is the difference between RQ1 and RQ2?


*Minor Detailed Comments*

- I'd merge the first two bullets of the claimed contributions, as they are the same

See the annotated PDF for typos and minor comments

Additional Questions:
Review's recommendation for paper type: Full length technical paper

Does this paper present innovative ideas or material?: Yes

In what ways does this paper advance the field?: The paper proposes JSimpo, a tool to de-obfuscate JS programs. JSimpo targets structural obfuscation, a particularly challenging case, using a combination of symbolic execution and dynamic analysis.

Is the information in the paper sound, factual, and accurate?: Yes

If not, please explain why.: 

Rate the paper on its contribution to the body of knowledge in software engineering (none=1, very important=5): 4

What are the major contributions of the paper?: JSimpo targets structural obfuscation, a particularly challenging case, using a combination of symbolic execution and dynamic analysis.

Rate how well the ideas are presented (very difficult to understand=1, very easy to understand=5): 5

Rate the overall quality of the writing (very poor=1, excellent=5): 5

Does this paper cite and use appropriate references?: Yes

If not, what important references are missing?: 

Should anything be deleted from or condensed in the paper?: No

If so, please explain.: 

Is the treatment of the subject complete?: Yes

If not, What important details / ideas/ analyses are missing?: 

If this is a Journal-First Paper, does it differ by more than 70% from any other previous publication?: Yes

Comments: 

Please help ACM create a more efficient time-to-publication process: Using your best judgment, what amount of copy editing do you think this paper needs?: None

Most ACM journal papers are researcher-oriented. Is this paper of potential interest to developers and engineers?: Yes

===================================
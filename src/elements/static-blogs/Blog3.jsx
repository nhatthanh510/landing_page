import React from 'react'
import { FiClock, FiUser } from 'react-icons/fi'
import bg7 from '../../assets/images/bg/bg-image-7.jpg'
import blog3Image from './images/blog3_image.webp'

const Blog3 = () => {
  return (
    <>
      {/* Start Breadcrump Area */}
      <div
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7"
        data-black-overlay="7"
        style={{
          backgroundImage: `url(${bg7})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-page-title text-center pt--100">
                <h2 className="title theme-gradient">
                  Corti, an AI ‘co-pilot’ for healthcare clinicians, raises $60M
                </h2>
                <ul className="blog-meta d-flex justify-content-center align-items-center">
                  <li>
                    <FiClock />
                    Sep 20, 2023
                  </li>
                  <li>
                    <FiUser />
                    Ingrid Lunden
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Blog Details */}
      <div className="rn-blog-details pt--110 pb--70 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-wrapper">
                <div className="inner">
                  <div className="thumbnail">
                    <img src={blog3Image} alt="Blog Images" />
                  </div>
                  <p className="mt--20">
                    Artificial intelligence continues to be a major force in the
                    world of healthcare, and in one of the latest developments,
                    a Copenhagen startup called Corti has raised $60 million to
                    expand its contribution to the field: an AI assistant
                    designed to support healthcare clinicians with patient
                    assessments in real time.
                  </p>
                  <p>
                    Prosus Ventures and Atomico are leading the Series B
                    investment, with previous backers Eurazeo, EIFO, and Chr.
                    Augustinus Fabrikker also participating. The company is not
                    disclosing anything about its valuation, but it has been on
                    a roll in terms of customers and usage.
                  </p>
                  <p>
                    When it last raised money, a Series A of $27 million almost
                    exactly two years ago 2021, it was assisting in 15 million
                    consultations annually. Now it says that it works with 100
                    million patients a year, where it is getting used 150,000
                    times a day, works out to almost 55 consultations annually
                    across Europe and the U.S. It claims that its tools can help
                    healthcare workers be up to 40% more accurate in
                    “outcome-predictions” and 90% faster in their administrative
                    tasks.
                  </p>

                  <p className="mt--40">
                    Corti describes its service as an “AI co-pilot” for
                    healthcare, with its assistant covering a number of areas
                    where that might apply: triaging during a patient
                    interaction, documenting that whole interaction including
                    with the administrative coding that an institution might be
                    using, providing analysis of that interaction to give steers
                    on decisions, sometimes giving “second opinions” that might
                    be contrary to what the clinician thinks, and providing
                    notes both in real time and after a meeting to identify
                    areas of improvement and to train clinicians.
                  </p>
                  <p>
                    That list underscores just how much doctors, nurses and
                    others are expected to be doing all the time, and maybe it’s
                    a good thing that Corti is not the only one pursuing that
                    model, and that there are multiple approaches being taken to
                    do so.
                  </p>
                  <p>
                    Nabla, a startup out of Paris led by serial AI entrepreneur
                    and researcher Alex LeBrun, earlier this year launched an AI
                    “copilot” (no hyphen!), but its approach so far has been to
                    built its tools on top of some of the bigger models that are
                    already out in the world: specifically, in the spring it
                    launched a copilot built on GPT-3 from OpenAI, with medical
                    experts on staff at the startup to contribute to the
                    development.
                  </p>
                  <p>
                    Corti’s approach — as laid out by CTO Lars Maaløe who
                    co-founded the company with CEO Andreas Cleve (and a third
                    co-founder, Michael Boesen, who is no longer with the
                    company) — is that it has built its own models and
                    corresponding components, and has explicitly not brought on
                    medical experts in house as part of that. (Collectively, the
                    three have past experience both in building productivity
                    tools for medical professionals, as well as extensive
                    experience in AI research and development.)
                  </p>
                  <p>
                    "That’s been one of the ideas from the get go," he said in
                    an interview. “The most responsible way is not to have a
                    physician on your payroll because that could create bias in
                    the system.” Instead, he continued, the company built its
                    platform, and while it slowly started to pick up customers
                    to “teach” the AI, it also brought in numerous researchers
                    to poke it and also run their work using it, using that also
                    to build out the platform’s intelligence. Helpfully (and
                    luckily), Maaløe said that this has served its purpose in
                    improving Corti’s responsiveness and functionality.
                  </p>
                  <p>
                    That doesn’t mean that Corti has always been met with open
                    arms over the years.
                  </p>
                  <p>
                    Corti’s platform was launched around 2018, well before all
                    the buzz and hype of ChatGPT, and in that time Maaløe says
                    that customer meetings “have changed radically”. At the
                    beginning, there was a lot of pushback about job
                    replacement, and of course concern that the co-pilot was
                    giving accurate steers to its users and patients.
                  </p>
                  <p>"We want to make the AI term boring," he said.</p>
                  <p>
                    That points, of course, to the darker view that some in
                    medicine take of AI. Earlier this year, a group of doctors
                    and public health experts joined the chorus of those warning
                    of how AI poses an existential threat to humanity,
                    specifically because of over-reliance on data and analysis
                    that might not be nearly as accurate as some might assume,
                    and might even be misleadingly dangerous.
                  </p>
                  <p>
                    But in the world of medicine, that’s not such a bad thing:
                    that kind of conflict of opinion has been part and parcel of
                    how it has always developed and synthesized new ideas.
                  </p>
                  <p>
                    "The healthcare industry faces significant administrative
                    burdens globally, leading to extensive practitioner
                    burnout,” Sandeep Bakshi, Head of European Investments at
                    Prosus Ventures said in a statement. “Corti and its product
                    suite provide system-wide efficiency improvements and
                    enhancement of care provider abilities. We’re confident in
                    its leading technology, unique market offering, and
                    experienced founding team, and believe Corti is
                    well-positioned to fundamentally redefine both the patient
                    and healthcare experiences."
                  </p>
                  <p className="mb--0">
                    "Andreas and Lars are visionary founders who have assembled
                    an extraordinary team at Corti. There are few places where
                    the need for transformational change is greater or more
                    urgent than in global healthcare, as clinicians and
                    providers face a trifecta of rising administrative costs, a
                    demographic transition, and an explosion of chronic illness.
                    Corti simultaneously improves the physician’s efficiency and
                    job satisfaction with real-time documentation automation,
                    greater visibility into care quality, and also optimizes
                    revenue and reduces costs,” added Atomico Partner Laura
                    Connell. “By augmenting overburdened physicians and
                    healthcare providers with AI, Corti paves the way for more
                    personalized, preventative and proactive medicine."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Details */}
    </>
  )
}

export default Blog3

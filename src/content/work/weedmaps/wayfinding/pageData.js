const data = {
  results: {
    label: 'Outcomes',
    description:
      'Post analysis, 1 month after launch. Looking at adopter vs non-adopter.',
    metrics: [
      {
        label: 'Metric 1',
        value: '100%'
      },
      {
        label: 'Metric 2',
        value: '200%'
      },
      {
        label: 'Metric 1',
        value: '100%'
      },
      {
        label: 'Metric 2',
        value: '200%'
      },
      {
        label: 'Metric 1',
        value: '100%'
      },
      {
        label: 'Metric 2',
        value: '200%'
      }
    ]
  },
  strategy: {
    label: 'Strategy',
    skills: [
      'Stakeholder interviews',
      'Critical Paths',
      'Tree Testing',
      'Data Analysis'
    ],
    goal: {
      label: 'Goal',
      description:
        'Collect signals, or evidence, that illuminate the problem space from both a business and user perspective. Once collected, use these signals to paint a clear picture of the problem and recommend a path forward. '
    },
    methodOne: {
      label: 'Tree Testing',
      description: 'Tree testing desc'
    },
    methodTwo: {
      label: 'Data Analysis',
      description:
        'Armed with newly found insights from our users I looked to the data to add another signal to the research. I wanted to understand how people navigate across platforms and surfaces.'
    }
  },
  execution: {
    label: 'EXECUTION',
    description:
      'By exposing the navigation on mobile web, we believe wayfinding will drastically improve and lead to more people finding what they want on Weedmaps. We will know this is true if we see a lift in Navigation CTR, Listing Page Views, Engagement Rates, and Promoted Engagements.',
    methodOne: {
      label: 'PROTOTYPE',
      description: 'A simple solution to a sophisticated problem.'
    },
    methodTwo: {
      label: 'EXPERIMENTATION',
      description:
        'Quantifying the value of wayfinding with a hypothesis grounded in research and supported by data.',
      metrics: [
        {
          label: 'Navigation CTR',
          value: '+41%'
        },
        {
          label: 'Listing Page Views',
          value: '+20%'
        },
        {
          label: 'Engagement Rate',
          value: '+8%'
        },
        {
          label: 'Promoted Engagements',
          value: '+7%'
        }
      ]
    }
  },
  finalThoughts: {
    label: 'Final Thoughts',
    description:
      "This is a glimpse into an ongoing effort to improve wayfinding for our users. It's inspired new ideas and harder conversations around all things navigation. Additionally, it has helped to mature the design teams research efforts and provided us a measurable outcome to speak to."
  }
}

export default data

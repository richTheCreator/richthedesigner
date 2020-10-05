import React from 'react'
import { SectionWrapper, SectionMax } from '../../components/Containers'
import { CaseStudy } from './styles'
import { Heading5 } from '../../components/Typography'

const Studies = ({ caseStudies, name }) => {
  console.log('name', name)
  return (
    <SectionWrapper>
      <SectionMax
        height={'100%'}
        pt={[9, 4]}
        sx={{
          borderBottomWidth: '0px',
          borderTopWidth: '0px',
          borderLeftWidth: '0px',
          borderRightWidth: '0px',
          borderStyle: 'solid'
        }}
      >
        <Heading5 mb={5} fontWeight={700}>
          {' '}
          ● CASE STUDIES for {name}{' '}
        </Heading5>
        {caseStudies.map((study) => {
          console.log('study', study)
          return <CaseStudy study={study} />
        })}
      </SectionMax>
    </SectionWrapper>
  )
}

export default Studies

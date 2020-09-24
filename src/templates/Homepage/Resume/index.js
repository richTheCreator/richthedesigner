import React from 'react'
import { SectionWrapper, SectionMax } from '../../../components/Containers'
import { ResumeItem } from './styles'
import { Heading5 } from '../../../components/Typography'

const Resume = ({ resume }) => {
  return (
    <SectionWrapper bg='transparent' id='resume'>
      <SectionMax height={'100%'}>
        <Heading5 mb={5} fontWeight={700}>
          {' '}
          ● EXPERIENCE{' '}
        </Heading5>
        {resume.map((res) => {
          return <ResumeItem res={res} />
        })}
      </SectionMax>
    </SectionWrapper>
  )
}

export { Resume }

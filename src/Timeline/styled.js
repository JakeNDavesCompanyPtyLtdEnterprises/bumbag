import styled from 'reakit/styled';
import { theme, palette } from 'styled-tools';
import Box from 'reakit/Box';
import Paragraph from '../Paragraph';

export const Timeline = styled(Box)`
  & {
    ${theme('fannypack.Timeline.base')};
  }
`;

export const TimelineRow = styled(Box)`
  display: flex;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    border: 1px solid ${props => props.lineColor || palette('textTint')};
    position: absolute;
    height: 100%;
    left: 0.25rem;
    margin-top: 1.25rem;
  }

  &:last-child::before {
    border: 0;
  }
`;

export const TimelineStep = styled(Box)`
  & {
    ${theme('fannypack.Timeline.Step.base')};
  }
`;

export const TimelineBullet = styled(Box)`
  border-radius: 50%;
  display: inline-flex;
  height: 0.625rem;
  width: 0.625rem;
  margin-top: 1rem;
  margin-right: 0.5rem;
  z-index: 1;

  & {
    ${theme('fannypack.Timeline.Bullet.base')};
  }
`;

export const TimelineStepHeading = styled(Paragraph)`
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  line-height: 1.5rem;
  color: ${props => props.color || palette('text')};

  &:not(:last-child) {
    margin-top: 0.6rem;
    margin-bottom: 0.6rem;
  }

  & {
    ${theme('fannypack.Timeline.StepHeading.base')};
  }
`;

export const TimelineStepDetail = styled(Paragraph)`
  color: ${props => props.color || palette('text')};

  & {
    ${theme('fannypack.Timeline.StepDetail.base')};
  }
`;
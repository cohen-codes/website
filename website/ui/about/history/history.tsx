import { Theme, useMediaQuery } from '@mui/material';
import { Margin, MarginType } from '@cohen-codes/design.layouts.margin';
import {
  WorkItemProps,
  WorkItem,
} from '@nitsan770/portfolio.widgets.work-item';
import { History as HistoryClass } from '@cohen-codes/website.entities.history';

export type HistoryProps = {
  /**
   * the items to render
   */
  workItems: HistoryClass[];
};

export function History({ workItems = [] }: HistoryProps) {
  const defaultWorkItems: WorkItemProps[] = workItems.map((history) => ({
    size: history.yearsOfExperience as any,
    company: history.company,
    designation: history.designation,
    period: history.period,
  }));

  const smDown = useMediaQuery((theme: Theme) => theme?.breakpoints.down('sm'));
  return (
    <>
      {defaultWorkItems.map((workItem) => (
        <Margin
          key={`${workItem.company}#${workItem.designation}`}
          mb={MarginType.SMALL}
        >
          <WorkItem
            {...workItem}
            {...(smDown && {
              size: 10,
            })}
          />
        </Margin>
      ))}
    </>
  );
}

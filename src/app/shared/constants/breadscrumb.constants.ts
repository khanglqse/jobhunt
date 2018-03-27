import { BreadscrumbItem } from '../models/breadscrumb/breadscrumb-item.model';

export const BreadscrumbConstants: BreadscrumbItem[] = [
    {
        name: 'My Tasks',
        url: '/web/my-task'
    },
    {
        name: 'Annual Assurance Plan',
        url: '/web/annual-assurance-plan'
    },
    {
        name: 'Dept Annual Assurance Plan',
        url: '/web/annual-assurance-plan/dep-annual-assurance-plan'
    },
    {
        name: 'Annual Assurance Plan',
        url: '/web/annual-assurance-plan/annual-assurance-plan-listing'
    },
    {
        name: 'Assurance Plan',
        url: '/web/annual-assurance-plan/assurance-plan'
    },
    {
        name: 'Checklist Detail',
        url: '/web/annual-assurance-plan/assurance-plan/checklist-detail'
    },
    {
        name: 'Findings Detail',
        url: '/web/annual-assurance-plan/assurance-plan/findings-item-detail'
    },
    {
        name: 'Action Item Detail',
        url: '/web/annual-assurance-plan/assurance-plan/action-item-detail'
    },
];

export enum BreadscrumbConstantsIndex {
    MY_TASK = 0,
    OPU_AAP,
    DEPT_AAP,
    DEPT_AAP_LISTING,
    AP,
    CHECKLIST,
    FINDINGS,
    ACTION_ITEM
}

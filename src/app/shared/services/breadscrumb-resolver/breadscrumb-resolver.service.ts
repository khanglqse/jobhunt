import { Injectable } from '@angular/core';
import { BreadscrumbItem } from '../../models/breadscrumb/breadscrumb-item.model';
import { BreadscrumbConstants, BreadscrumbConstantsIndex } from '../../constants/breadscrumb.constants';

@Injectable()
export class BreadscrumbResolver {


  constructor() { }

  generateMyTask() {
    return this.generateData(BreadscrumbConstants[BreadscrumbConstantsIndex.MY_TASK]);
  }

  generateOPUAAP() {
    return this.generateData(
      BreadscrumbConstants[BreadscrumbConstantsIndex.MY_TASK],
      BreadscrumbConstants[BreadscrumbConstantsIndex.OPU_AAP],
    );
  }

  generateAP() {
    return this.generateData(
      BreadscrumbConstants[BreadscrumbConstantsIndex.MY_TASK],
      BreadscrumbConstants[BreadscrumbConstantsIndex.OPU_AAP],
      BreadscrumbConstants[BreadscrumbConstantsIndex.AP],
    );
  }

  generateDeptAAP() {
    return this.generateData(
      BreadscrumbConstants[BreadscrumbConstantsIndex.MY_TASK],
      BreadscrumbConstants[BreadscrumbConstantsIndex.DEPT_AAP],
    );
  }

  generateDeptAAPListing() {
    return this.generateData(
      BreadscrumbConstants[BreadscrumbConstantsIndex.MY_TASK],
      BreadscrumbConstants[BreadscrumbConstantsIndex.DEPT_AAP],
      BreadscrumbConstants[BreadscrumbConstantsIndex.DEPT_AAP_LISTING],
    );
  }

  generateChecklist() {
    return this.generateData(
      BreadscrumbConstants[BreadscrumbConstantsIndex.MY_TASK],
      BreadscrumbConstants[BreadscrumbConstantsIndex.OPU_AAP],
      BreadscrumbConstants[BreadscrumbConstantsIndex.AP],
      BreadscrumbConstants[BreadscrumbConstantsIndex.CHECKLIST],
    );
  }

  generateFindings() {
    return this.generateData(
      BreadscrumbConstants[BreadscrumbConstantsIndex.MY_TASK],
      BreadscrumbConstants[BreadscrumbConstantsIndex.OPU_AAP],
      BreadscrumbConstants[BreadscrumbConstantsIndex.AP],
      BreadscrumbConstants[BreadscrumbConstantsIndex.CHECKLIST],
      BreadscrumbConstants[BreadscrumbConstantsIndex.FINDINGS],
    );
  }

  generateActionItem() {
    return this.generateData(
      BreadscrumbConstants[BreadscrumbConstantsIndex.MY_TASK],
      BreadscrumbConstants[BreadscrumbConstantsIndex.OPU_AAP],
      BreadscrumbConstants[BreadscrumbConstantsIndex.AP],
      BreadscrumbConstants[BreadscrumbConstantsIndex.CHECKLIST],
      BreadscrumbConstants[BreadscrumbConstantsIndex.FINDINGS],
      BreadscrumbConstants[BreadscrumbConstantsIndex.ACTION_ITEM],
    );
  }

  private generateData(...items: BreadscrumbItem[]) {
    const data: BreadscrumbItem[] = [];
    data.push(...items);
    return data;
  }
}

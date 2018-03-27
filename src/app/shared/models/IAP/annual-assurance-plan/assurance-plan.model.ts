export class AssurancePlan {
   
  
    constructor(
        public id: string,
        public refNo: string,
        public status: string,
        public year: string,
        public description: string,
        public category: string,
        public title: string,
        public location: string,
        public riskArea: string,
        public type: string,
        public subType : string,
      ) {  }
    
}
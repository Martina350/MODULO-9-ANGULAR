export class TransactionModel {
    constructor(
        public id: number,
        public date: Date,
        public description: string,
        public amount: number,
        public type: 'income' | 'expense'
    ) {}
}
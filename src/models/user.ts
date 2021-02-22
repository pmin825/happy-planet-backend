export class User {
    constructor(
        public id: string,
        public email: string,
        private password: string,
        public first_name: string,
        public last_name: string,
        public sustainable_score: number,
        public created_at: Date,
        public updated_at: Date,
        public post_id: number,
        public comment_id: number
    ) {}
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, email, password, first_name, last_name, sustainable_score, created_at, updated_at, post_id, comment_id) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.sustainable_score = sustainable_score;
        this.created_at = created_at;
        this.updated_at = updated_at;
        this.post_id = post_id;
        this.comment_id = comment_id;
    }
}
exports.User = User;

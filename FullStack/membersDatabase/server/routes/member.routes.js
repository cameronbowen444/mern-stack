const MemberController = require('../controllers/member.controller');

module.exports = (app) => {
    app.get('/api', MemberController.index);
    app.get('/api/members', MemberController.getAllMembers);
    app.post('/api/members', MemberController.createMember);
    app.get('/api/members/:id', MemberController.getOneMember);
    app.put('/api/members/edit/:id', MemberController.updateMember);
    app.delete('/api/members/:id', MemberController.deleteMember);
}
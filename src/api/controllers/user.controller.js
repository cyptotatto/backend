const process = {
  login: (req, res) => {
    const id = req.body.id.body,
      psword = req.body.pasword;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pasword[ids] === psword) {
        return res.json({
          sucess: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: '로그인에 실패했습니다.',
    });
  },
};

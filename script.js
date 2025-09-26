function divide(a, b) {
	debugger;
	console.log("计算结果:", a / b);
	return a / b;
}

	// 映射表
	// 你咋进来的谁让你看源代码的了
	// 算了你想看就看吧
	// 呵呵啊哈哈哈哈
	const hashToUrlMap = {
	  "669f4259d89b0af04c928b79dffba61b31b5779b95f55caabd716f75b7d9d842": "https://s.nobook.com/index.html?id=205866", //炸掉一切！
	  "3c29fc3464377a28ffe2a7713f1a081cebf617f8e11dcd90f3b46df6d04636e1": "https://s.nobook.com/index.html?id=205871", //美味果汁
	  "3121771b9c5973e0f089fc009419975232f6f374f1f95a118e8259c98dd5ded4": "https://b23.tv/7g5kA8S", //剧场！
	  "c06b0cfe0cc5e900c57784484094331f095bf441995c3c31ea6c75691c786c35": "https://s.nobook.com/index.html?id=206204", //玫瑰
	  "a9f74d1ec36ebdeb2da3f6e5868090cd2a2d20b3dcca7b62f60304b1d3d9ef42": "https://s.nobook.com/index.html?id=206345", //茶叶！
	  "a28e9c6746ac69b8b714d9ea569a29f7c203d7ff7abcdc3e3dc97267beec5a43": "https://s.nobook.com/index.html?id=207847", //多功能机器！
	  "cac26a9c8d34590fbf81be0efd061112c271a0a72b2fbd9f137063503cb35141": "https://yunmo-233.github.io/index.html", //陨陌的网站！
	  "df3041cf9a7e98ba49a1c89d94fb39d6215f1559e088de5cc90dab2bb4ac6592": "https://pipetrainingcamp.github.io/index.html", //GoodPTC的网站！
	  "77d87b0061d4094d1c654a07a04a3d312076f385cb69f140de5073160a305c34": "https://s.nobook.com/index.html?id=208948", //泡泡机！
 	 "b9ad6c15a1bd99811f076500cc45a217c5b44c21282929c67587746ed9377568": "boom.html"  //Utw！
	  // 可继续添加更多 "hash": "url"
	};

	// 验证函数
	function verifyCode() {
	  const input = document.getElementById("codeInput").value.trim();
	  const resultEl = document.getElementById("result");
	  const jumpContainer = document.getElementById("jumpContainer");
	  const jumpButton = document.getElementById("jumpButton");

	  // 隐藏上次的跳转按钮
	  jumpContainer.style.display = "none";

	  if (!input) {
		resultEl.innerText = "⚠️ 请输入兑换码";
		resultEl.style.color = "orange";
		return;
	  }

	  // 计算 SHA256 哈希
	  const hash = CryptoJS.SHA256(input).toString(CryptoJS.enc.Hex);

	  // 检查是否在映射表中
	  if (hash in hashToUrlMap) {
		resultEl.innerText = "✅ 验证成功！点击按钮跳转";
		resultEl.style.color = "green";
		jumpButton.href = hashToUrlMap[hash];
		jumpContainer.style.display = "block"; // 显示跳转按钮
	  } else {
		resultEl.innerText = "❌ 兑换码无效，请重试";
		resultEl.style.color = "red";
	  }
	}

	// 支持回车提交
	document.getElementById("codeInput").addEventListener("keypress", function(e) {
	  if (e.key === "Enter") {
		verifyCode();
	  }
	});

//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
//呵呵
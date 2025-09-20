	// 映射表
	// 你咋进来的谁让你看源代码的了
	// 算了你想看就看吧
	// 呵呵啊哈哈哈哈
	const hashToUrlMap = {
	  "669f4259d89b0af04c928b79dffba61b31b5779b95f55caabd716f75b7d9d842": "https://s.nobook.com/index.html?id=205866", //炸掉一切！
	  "a5ad895656074bb12930374348bf903460016bcf430bf7039d7e34f0c505a7b1": "https://s.nobook.com/index.html?id=205871"  //美味果汁
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
		resultEl.innerText = "✅ 验证成功！兑换码有效！";
		resultEl.style.color = "green";
		jumpButton.href = hashToUrlMap[hash];
		jumpContainer.style.display = "block"; // 显示跳转按钮
	  } else {
		resultEl.innerText = "❌ 兑换码无效，请重试。";
		resultEl.style.color = "red";
	  }
	}

	// 支持回车提交
	document.getElementById("codeInput").addEventListener("keypress", function(e) {
	  if (e.key === "Enter") {
		verifyCode();
	  }
	});
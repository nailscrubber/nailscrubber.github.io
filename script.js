// 检测全局是否出现了 vConsole 实例
const vConsoleCheckInterval = setInterval(() => {
	// 常见的 vConsole 挂载位置
	if (window.vConsole || (window.VConsole && window.VConsole.instances && window.VConsole.instances.length > 0)) {
		console.log('检测到 vConsole 被初始化，正在销毁...');
		clearInterval(vConsoleCheckInterval);

		// 销毁已存在的实例
		if (window.vConsole) {
			window.vConsole.destroy();
			window.vConsole = null;
		}

		// 或者尝试阻止后续使用
		Object.defineProperty(window, 'vConsole', {
			writable: false,
			configurable: false,
			value: null
		});
	}
}, 1000); // 每秒检查一次

	// 映射表
	// 你咋进来的谁让你看源代码的了
	// 算了你想看就看吧
	// 呵呵啊哈哈哈哈
	const hashToUrlMap = {
	  "618e078755f2099814f9f44376c7dee20e139ad00c17fb547370bfa750ea2fb7": "https://s.nobook.com/index.html?id=205866", //炸掉一切！
	  "e3b65498105edbbed5b42080445f0cd36831e21b69eda861f5d5150e156b1a64": "https://s.nobook.com/index.html?id=205871", //美味果汁
	  "3101b9e088ae553af7373eae4d9446bc6f0da7668ea73eeae4ffd4e183b69265": "https://b23.tv/7g5kA8S", //剧场！
	  "085a90639ab66fa0317b6556415c1d8ab63bded5387d150d069e8274ca536e7f": "https://s.nobook.com/index.html?id=206204", //玫瑰
	  "3361faab97f0e2f824a1166f4aad583a7eadd77785ca45efee461e0e0662e5ea": "https://s.nobook.com/index.html?id=206345", //茶叶！
	  "6c47f8fcd4975defe5ab63d31391cba82e4794cab6e7ec24a3d5b1ab110ba7a6": "https://s.nobook.com/index.html?id=207847", //多功能机器！
	  "cac26a9c8d34590fbf81be0efd061112c271a0a72b2fbd9f137063503cb35141": "https://yunmo-233.github.io/index.html", //陨陌的网站！
	  "df3041cf9a7e98ba49a1c89d94fb39d6215f1559e088de5cc90dab2bb4ac6592": "https://pipetrainingcamp.github.io/index.html", //GoodPTC的网站！
	  "ffcdce84bb3a3b58b07fb0a4aaa9cea1f302661649657890281660bbbb806fc1": "https://s.nobook.com/index.html?id=208948", //泡泡机！
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
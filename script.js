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
 	 "b9ad6c15a1bd99811f076500cc45a217c5b44c21282929c67587746ed9377568": "boom.html", //Utw！
 	 "cff97e03e7e93cd2a84a27ce90f1c9397507f017db5025a711994efafa59aaea": "https://s.nobook.com/index.html?id=213187", //变色花！
	  "2743b6a2d94064b1b6131c3f07d27d8e36144d3ed5dcaf642d6917229fbbe1cf": "https://s.nobook.com/index.html?id=234906", //高压放电装置！
	  "e5e72beb4e3c6926d3dc9e3e2ef7833ba50cd919c2460a782b244fd071e920de": "weather.html"  //天气瞎报
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
		resultEl.innerText = "⚠️ 你没有输入任何兑换码";
		resultEl.style.color = "orange";
		return;
	  }

	  // 计算 SHA256 哈希
	  const hash = CryptoJS.SHA256(input).toString(CryptoJS.enc.Hex);

	  // 检查是否在映射表中
	  if (hash in hashToUrlMap) {
		resultEl.innerText = "✅ 输对了！看到这个按钮了吗，点击它";
		resultEl.style.color = "green";
		jumpButton.href = hashToUrlMap[hash];
		jumpContainer.style.display = "block"; // 显示跳转按钮
	  } else {
		resultEl.innerText = "❌ 不对";
		resultEl.style.color = "red";
	  }
	}

	// 支持回车提交
	document.getElementById("codeInput").addEventListener("keypress", function(e) {
	  if (e.key === "Enter") {
		verifyCode();
	  }
	});

(function() {
  // "I'm on top of the world because of you."
  // "All I wanted to do is follow you."
  const advicePools = {
	extremeCold: [
	  "洗钉机冻成冰雕，建议改日再战",
	  "试管已结冰，齐喜说别硬掰",
	  "氢气球变冰球，今日不宜实验",
	  "哪个小可爱放的氢氧化钡溶液和氯化铵溶液"
	],
	cold: [
	  "昼夜温差大，试管易裂，轻拿轻放",
	  "手会抖，建议戴手套洗钉",
	  "Lemon泡了果糖茶，放在暖气片上"
	],
	cool: [
	  "适合做低温实验，手别插口袋",
	  "双氧水分解慢，耐心点",
	  "Vial正在测试Gcn Pro低温能不能运转",
	  "四氧化二氮平衡开始受影响…"
	],
	comfortable: [
	  "室温舒适，Utw正在打Phigros",
	  "室温舒适，Vial正在研究Gcn Pro Max",
	  "室温舒适，CWMM在磨铜钉",
	  "室温和平，GoodPTC的玻璃管今天没炸",
	  "温度舒适，这很NOBOOK"
	],
	warm: [
	  "双氧水冒泡中，通风！",
	  "镀膜液开始反光，小心自燃",
	  "ECC提醒：氢气别晒太阳"
	],
	hot: [
	  "高温警告：镀膜液可能自燃🔥",
	  "实验室像蒸笼，建议暂停实验",
	  "Utw服务器过热，Phigros卡顿中",
	  "ECC的干式洗铜机释放了1239℃高温😱"
	]
  };
// 就你小子暂停偷看是吧
  function pickRandom(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
  }

  function getAdvice(maxTemp) {
	if (maxTemp <= -10) return pickRandom(advicePools.extremeCold);
	if (maxTemp <= 0) return pickRandom(advicePools.cold);
	if (maxTemp <= 15) return pickRandom(advicePools.cool);
	if (maxTemp <= 28) return pickRandom(advicePools.comfortable);
	if (maxTemp <= 35) return pickRandom(advicePools.warm);
	return pickRandom(advicePools.hot);
  }

  // === Lemon市===
  fetch(`https://api.open-meteo.com/v1/forecast?latitude=46.643&longitude=124.849&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m&temperature_unit=celsius&timezone=Asia/Shanghai`)
	.then(res => res.json())
	.then(data => {
	  const current = Math.round(data.current.temperature_2m);
	  const max = Math.round(data.daily.temperature_2m_max[0]);
	  const min = Math.round(data.daily.temperature_2m_min[0]);
	  const advice = getAdvice(max);
	  document.getElementById('qixi-suihua-status').textContent = 
		`Lemon市今日 ${min}~${max}℃（现 ${current}℃），${advice}`;
	})
	.catch(() => {
	  document.getElementById('qixi-suihua-status').textContent = 
		"Lemon市今日 ?~?℃（现 ?℃），信号被雪埋了❄️";
	});

  // === NB市===
  fetch(`https://api.open-meteo.com/v1/forecast?latitude=39.9042&longitude=116.4074&daily=temperature_2m_max,temperature_2m_min&current=temperature_2m&temperature_unit=celsius&timezone=Asia/Shanghai`)
	.then(res => res.json())
	.then(data => {
	  const current = Math.round(data.current.temperature_2m);
	  const max = Math.round(data.daily.temperature_2m_max[0]);
	  const min = Math.round(data.daily.temperature_2m_min[0]);
	  const advice = getAdvice(max);
	  document.getElementById('qixi-nb-status').textContent = 
		`NB大陆今日平均气温 ${min}~${max}℃（现 ${current}℃），${advice}`;
	})
	.catch(() => {
	  document.getElementById('qixi-nb-status').textContent = 
		"NB市今日 ?~?℃（现 ?℃），气象站被Utw炸了💥";
	});
})();

// 清空的函数
function clearCode() {
  const input = document.getElementById("codeInput");
  const resultEl = document.getElementById("result");
  const jumpContainer = document.getElementById("jumpContainer");

  input.value = "";
  resultEl.innerText = "";
  resultEl.style.color = "";
  jumpContainer.style.display = "none";
  input.focus();
}
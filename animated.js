function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       ./im/male0001.png
       ./im/male0002.png
       ./im/male0003.png
       ./im/male0004.png
       ./im/male0005.png
       ./im/male0006.png
       ./im/male0007.png
       ./im/male0008.png
       ./im/male0009.png
       ./im/male0010.png
       ./im/male0011.png
       ./im/male0012.png
       ./im/male0013.png
       ./im/male0014.png
       ./im/male0015.png
       ./im/male0016.png
       ./im/male0017.png
       ./im/male0018.png
       ./im/male0019.png
       ./im/male0020.png
       ./im/male0021.png
       ./im/male0022.png
       ./im/male0023.png
       ./im/male0024.png
       ./im/male0025.png
       ./im/male0026.png
       ./im/male0027.png
       ./im/male0028.png
       ./im/male0029.png
       ./im/male0030.png
       ./im/male0031.png
       ./im/male0032.png
       ./im/male0033.png
       ./im/male0034.png
       ./im/male0035.png
       ./im/male0036.png
       ./im/male0037.png
       ./im/male0038.png
       ./im/male0039.png
       ./im/male0040.png
       ./im/male0041.png
       ./im/male0042.png
       ./im/male0043.png
       ./im/male0044.png
       ./im/male0045.png
       ./im/male0046.png
       ./im/male0047.png
       ./im/male0048.png
       ./im/male0049.png
       ./im/male0050.png
       ./im/male0051.png
       ./im/male0052.png
       ./im/male0053.png
       ./im/male0054.png
       ./im/male0055.png
       ./im/male0056.png
       ./im/male0057.png
       ./im/male0058.png
       ./im/male0059.png
       ./im/male0060.png
       ./im/male0061.png
       ./im/male0062.png
       ./im/male0063.png
       ./im/male0064.png
       ./im/male0065.png
       ./im/male0066.png
       ./im/male0067.png
       ./im/male0068.png
       ./im/male0069.png
       ./im/male0070.png
       ./im/male0071.png
       ./im/male0072.png
       ./im/male0073.png
       ./im/male0074.png
       ./im/male0075.png
       ./im/male0076.png
       ./im/male0077.png
       ./im/male0078.png
       ./im/male0079.png
       ./im/male0080.png
       ./im/male0081.png
       ./im/male0082.png
       ./im/male0083.png
       ./im/male0084.png
       ./im/male0085.png
       ./im/male0086.png
       ./im/male0087.png
       ./im/male0088.png
       ./im/male0089.png
       ./im/male0090.png
       ./im/male0091.png
       ./im/male0092.png
       ./im/male0093.png
       ./im/male0094.png
       ./im/male0095.png
       ./im/male0096.png
       ./im/male0097.png
       ./im/male0098.png
       ./im/male0099.png
       ./im/male0100.png
       ./im/male0101.png
       ./im/male0102.png
       ./im/male0103.png
       ./im/male0104.png
       ./im/male0105.png
       ./im/male0106.png
       ./im/male0107.png
       ./im/male0108.png
       ./im/male0109.png
       ./im/male0110.png
       ./im/male0111.png
       ./im/male0112.png
       ./im/male0113.png
       ./im/male0114.png
       ./im/male0115.png
       ./im/male0116.png
       ./im/male0117.png
       ./im/male0118.png
       ./im/male0119.png
       ./im/male0120.png
       ./im/male0121.png
       ./im/male0122.png
       ./im/male0123.png
       ./im/male0124.png
       ./im/male0125.png
       ./im/male0126.png
       ./im/male0127.png
       ./im/male0128.png
       ./im/male0129.png
       ./im/male0130.png
       ./im/male0131.png
       ./im/male0132.png
       ./im/male0133.png
       ./im/male0134.png
       ./im/male0135.png
       ./im/male0136.png
       ./im/male0137.png
       ./im/male0138.png
       ./im/male0139.png
       ./im/male0140.png
       ./im/male0141.png
       ./im/male0142.png
       ./im/male0143.png
       ./im/male0144.png
       ./im/male0145.png
       ./im/male0146.png
       ./im/male0147.png
       ./im/male0148.png
       ./im/male0149.png
       ./im/male0150.png
       ./im/male0151.png
       ./im/male0152.png
       ./im/male0153.png
       ./im/male0154.png
       ./im/male0155.png
       ./im/male0156.png
       ./im/male0157.png
       ./im/male0158.png
       ./im/male0159.png
       ./im/male0160.png
       ./im/male0161.png
       ./im/male0162.png
       ./im/male0163.png
       ./im/male0164.png
       ./im/male0165.png
       ./im/male0166.png
       ./im/male0167.png
       ./im/male0168.png
       ./im/male0169.png
       ./im/male0170.png
       ./im/male0171.png
       ./im/male0172.png
       ./im/male0173.png
       ./im/male0174.png
       ./im/male0175.png
       ./im/male0176.png
       ./im/male0177.png
       ./im/male0178.png
       ./im/male0179.png
       ./im/male0180.png
       ./im/male0181.png
       ./im/male0182.png
       ./im/male0183.png
       ./im/male0184.png
       ./im/male0185.png
       ./im/male0186.png
       ./im/male0187.png
       ./im/male0188.png
       ./im/male0189.png
       ./im/male0190.png
       ./im/male0191.png
       ./im/male0192.png
       ./im/male0193.png
       ./im/male0194.png
       ./im/male0195.png
       ./im/male0196.png
       ./im/male0197.png
       ./im/male0198.png
       ./im/male0199.png
       ./im/male0200.png
       ./im/male0201.png
       ./im/male0202.png
       ./im/male0203.png
       ./im/male0204.png
       ./im/male0205.png
       ./im/male0206.png
       ./im/male0207.png
       ./im/male0208.png
       ./im/male0209.png
       ./im/male0210.png
       ./im/male0211.png
       ./im/male0212.png
       ./im/male0213.png
       ./im/male0214.png
       ./im/male0215.png
       ./im/male0216.png
       ./im/male0217.png
       ./im/male0218.png
       ./im/male0219.png
       ./im/male0220.png
       ./im/male0221.png
       ./im/male0222.png
       ./im/male0223.png
       ./im/male0224.png
       ./im/male0225.png
       ./im/male0226.png
       ./im/male0227.png
       ./im/male0228.png
       ./im/male0229.png
       ./im/male0230.png
       ./im/male0231.png
       ./im/male0232.png
       ./im/male0233.png
       ./im/male0234.png
       ./im/male0235.png
       ./im/male0236.png
       ./im/male0237.png
       ./im/male0238.png
       ./im/male0239.png
       ./im/male0240.png
       ./im/male0241.png
       ./im/male0242.png
       ./im/male0243.png
       ./im/male0244.png
       ./im/male0245.png
       ./im/male0246.png
       ./im/male0247.png
       ./im/male0248.png
       ./im/male0249.png
       ./im/male0250.png
       ./im/male0251.png
       ./im/male0252.png
       ./im/male0253.png
       ./im/male0254.png
       ./im/male0255.png
       ./im/male0256.png
       ./im/male0257.png
       ./im/male0258.png
       ./im/male0259.png
       ./im/male0260.png
       ./im/male0261.png
       ./im/male0262.png
       ./im/male0263.png
       ./im/male0264.png
       ./im/male0265.png
       ./im/male0266.png
       ./im/male0267.png
       ./im/male0268.png
       ./im/male0269.png
       ./im/male0270.png
       ./im/male0271.png
       ./im/male0272.png
       ./im/male0273.png
       ./im/male0274.png
       ./im/male0275.png
       ./im/male0276.png
       ./im/male0277.png
       ./im/male0278.png
       ./im/male0279.png
       ./im/male0280.png
       ./im/male0281.png
       ./im/male0282.png
       ./im/male0283.png
       ./im/male0284.png
       ./im/male0285.png
       ./im/male0286.png
       ./im/male0287.png
       ./im/male0288.png
       ./im/male0289.png
       ./im/male0290.png
       ./im/male0291.png
       ./im/male0292.png
       ./im/male0293.png
       ./im/male0294.png
       ./im/male0295.png
       ./im/male0296.png
       ./im/male0297.png
       ./im/male0298.png
       ./im/male0299.png
       ./im/male0300.png
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
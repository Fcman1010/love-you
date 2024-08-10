// รายการแคปชั่นที่ใช้สำหรับการสุ่ม
const captions = [
    "คบคนพาลถ้าจริงใจก็ไม่ผิด คบบัณฑิตไม่จริงใจก็ไร้ผล",
    "ทำดีย่อมได้ดีทำอัปปรีย์มันจะได้ดีได้ยังไง",
    "บางสิ่งเราก็ไม่ควรจำถ้ามันทำให้ใจเจ็บแต่บางสิ่งเราก็ควรจะเก็บถ้ามันเป็นความเจ็บที่น่าจำ",
    "อย่ามีหัวไว้ให้แค่ผมขึ้น",
    "ความดีก็เหมือนกางเกงในต้องมีติดตัวไว้แต่ไม่ต้องเอามาโชว์",
    "เจ็บแล้วจำคือคน เจ็บแล้วทนคือควาย",
    "พอใจเท่าที่มียินดีเท่าที่ได้",
    "สิ่งที่สอนคนเราไม่ได้ก็คือ (สามัญสำนึก)",
    "ไปให้สุดแล้วหยุดแค่คำว่าพอ",
    "สงครามยังไม่จบอย่าเพิ่งนับศพทหาร",
    "จงซื่อสัตย์กับแฟนตัวเองแล้วจงครื้นเครงกับแฟนคนอื่น",
    "หากเดินตามรอยเท้าคนอื่นก็ไม่มีวันมีรอยเท้าเป็นของตัวเอง",
    "มาสาย กลับก่อน นอนกลางวัน มันส์กลางคืน",
    "สุราไม่ได้สร้างวีรบุรุษ แต่วีรบุรุษก็ขาดสุราไม่ได้",
    "ความพยามครั้งที่ 100 ดีกว่าคิดท้อถอยก่อนที่จะทำ",
    "ทำคืนนี้ให้ดีที่สุดและอย่าหยุดถ้าไม่ถึงจุดสุดยอด",
    "สุขใดไม่เท่าล้วงกระเป๋าแล้วเจอตังค์",
    "คนโง่ย่อมเป็นเหยื่อของคนฉลาด คนฉลาดย่อมเป็นเหยื่อของคนฉลาดที่แกล้งโง่",
    "สามีคือเป้าหมาย ผู้ชายคือทางผ่าน คบเด็กคือนิพพาน ขึ้นคานคือตายทั้งเป็น",
    "การดื่มเหล้าให้เมาไม่ใช่ยี่ห้อของสุรา การศึกษาคือความรู้ที่ได้มาไม่ใช่สถาบัน",
    "ยามศึกเรารบ ยามสงบเราปฏิวัติ",
    "อ่อนโยนแต่อย่าอ่อนแอ",
    "เมียซื้อเงินสด รถซื้อเงินผ่อน",
    "ถ้าคนเราไม่ปล่อยวางอดีต ก็จะไม่รู้จักอนาคต",
    "มนุษย์แท้จริงแล้วไม่ได้โตด้วยอาหาร แต่โตได้ด้วยความลำบาก",
    "เมียรวยช่วยเราได้",
    "เพื่อนกิน เพื่อนกัน เพื่อนกินไม่ทัน เพื่อนกันเอาไปกิน",
    "ชะตาฟ้าลิขิต แต่ชีวิตน่ะของกู",
    "รักแท้ต้องแย่งชิง รักจริงต้องปล่อยไป",
    "ตัดกระดาษต้องใช้กรรไกร แต่ตัดใจต้องใช้เวลา",
    "กาเม มอระนัง ทุกขัง โลเก",
    "รักดีกินถั่ว รักชั่วกินเหล้า รักดีรักชั่ว กินถั่วแกล้มกะเหล้า",
    "สิ่งเดียวที่จะทำให้คนชั่วชนะก็คือ การที่คนดีนิ่งดูดาย",
    "กำขี้ดีกว่ากำตด แต่ถ้ากำขี้สดๆกำตดจะดีกว่ากำขี้",
    "ทำแล้วเสียใจ ยังดีกว่าเสียใจที่ไม่ได้ทำ",
    "กระบี่อยู่ที่ใจ แค่ไม้ไผ่ก้อไร้เทียมทาน",
    "เห็นงานเป็นลม เห็นนมสู้ตาย",
    "ตัวอย่างที่ดีมีค่ากว่าคำสอน",
    "ดี ชั่ว ไม่ได้เป็นกรรมพันธุ์"
];


// ฟังก์ชันสำหรับสุ่มแคปชั่น
function getRandomCaption() {
    const randomIndex = Math.floor(Math.random() * captions.length);
    return captions[randomIndex];
}

// การจัดการเหตุการณ์เมื่อกดปุ่ม "เริ่ม"
document.getElementById('start-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const secretCode = '1233'; // รหัสลับ

    if (username === secretCode) {
        // แสดงหน้าประวัติการกรอกชื่อ
        document.getElementById('history-container').style.display = 'block';
        document.getElementById('main-container').style.display = 'none';
        document.getElementById('caption-container').style.display = 'none';
        document.getElementById('history-output').innerText = `ประวัติการกรอกชื่อ: ${localStorage.getItem('names') || 'ไม่มีประวัติ'}`;
    } else {
        // แสดงหน้าสุ่มแคปชั่น
        document.getElementById('caption-container').style.display = 'block';
        document.getElementById('main-container').style.display = 'none';
        document.getElementById('history-container').style.display = 'none';
    }

    // บันทึกชื่อในประวัติ
    let names = localStorage.getItem('names') || '';
    names += (names ? ', ' : '') + username;
    localStorage.setItem('names', names);
});

// การจัดการเหตุการณ์เมื่อกดปุ่ม "สุ่มแคปชั่น"
document.getElementById('generate-btn').addEventListener('click', function() {
    document.getElementById('caption').innerText = getRandomCaption();
});

// การจัดการเหตุการณ์เมื่อกดปุ่ม "กลับ" ในหน้าสุ่มแคปชั่น
document.getElementById('back-btn').addEventListener('click', function() {
    document.getElementById('caption-container').style.display = 'none';
    document.getElementById('main-container').style.display = 'block';
});

// การจัดการเหตุการณ์เมื่อกดปุ่ม "กลับ" ในหน้าประวัติการกรอกชื่อ
document.getElementById('back-btn-history').addEventListener('click', function() {
    document.getElementById('history-container').style.display = 'none';
    document.getElementById('main-container').style.display = 'block';
});

document.addEventListener("DOMContentLoaded", function() {
    
    // --- ส่วนที่ 1: โค้ดสำหรับ Fade-in Animation (ของเดิม) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.1
    });

    const elementsToFadeIn = document.querySelectorAll('.fade-in');
    elementsToFadeIn.forEach((el) => observer.observe(el));


    // --- ***** เพิ่ม: ส่วนที่ 2: โค้ดสำหรับจัดการ Portfolio Modal ***** ---
    
    // 1. ดึงองค์ประกอบที่จำเป็นทั้งหมด
    const modal = document.getElementById("projectModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDetails = document.getElementById("modalDetails");
    const closeButton = document.querySelector(".close-button");
    const projectCards = document.querySelectorAll(".project-card");

    // 2. สร้าง Event Listener ให้กับการ์ดทุกใบ
    projectCards.forEach(card => {
        card.addEventListener("click", function() {
            // ดึงข้อมูลจากการ์ดที่ถูกคลิก
            const imageSrc = card.querySelector("img").src;
            const title = card.querySelector("h3").textContent;
            // ดึงข้อมูลรายละเอียดจาก data-details attribute
            const details = card.dataset.details;

            // นำข้อมูลไปใส่ใน Modal
            modalImage.src = imageSrc;
            modalTitle.textContent = title;
            modalDetails.textContent = details;

            // แสดง Modal
            modal.style.display = "flex";
        });
    });

    // 3. ฟังก์ชันสำหรับปิด Modal
    function closeModal() {
        modal.style.display = "none";
    }

    // 4. สร้าง Event Listener ให้ปุ่มปิด
    closeButton.addEventListener("click", closeModal);

    // 5. สร้าง Event Listener ให้ปิด Modal เมื่อคลิกพื้นที่ด้านนอก
    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });

});
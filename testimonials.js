document.addEventListener("DOMContentLoaded", () => {
  const testimonialContainer = document.querySelector(".testimonial-content");
  const createButton = document.querySelector(".testi-create");

  fetchTestimonials();

  createButton.addEventListener("click", createTestimonial);

  function fetchTestimonials() {
    fetch("http://localhost:3000/testimonials")
      .then((response) => response.json())
      .then((data) => {
        testimonialContainer.innerHTML = "";
        data.forEach((testimonial) => addTestimonialToHTML(testimonial));
      })
      .catch((error) => console.error("Ma'lumotlarni yuklashda xatolik:", error));
  }

  function addTestimonialToHTML(testimonial) {
    const testiDiv = document.createElement("div");
    testiDiv.className = "testi-content";
    testiDiv.setAttribute("data-id", testimonial.id); 
  
    testiDiv.innerHTML = `
      <div class="testi-btn_content btn-box">
        <button class="testi-delete">Delete</button>
      </div>
      <h2 class="name-testi">${testimonial.name}</h2>
      <p>Role: <span class="role-testi">${testimonial.role}</span></p>
      <span>Message: <span class="message-testi">${testimonial.message}</span></span>
    `;
    testimonialContainer.appendChild(testiDiv);
  
    const deleteButton = testiDiv.querySelector(".testi-delete");
    deleteButton.addEventListener("click", () => {
      handleDelete(testimonial.id, testiDiv);
    });
  }
  

  function createTestimonial() {
    const name = prompt("Iltimos, ismingizni kiriting:");
    const role = prompt("Iltimos, rolingizni kiriting (masalan, Project Manager):");
    const message = prompt("Iltimos, xabaringizni kiriting:");

    const newTestimonial = {
      name,
      role,
      message,
      image: "https://via.placeholder.com/150",
    };

    fetch("http://localhost:3000/testimonials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTestimonial),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Yangi ma'lumot muvaffaqiyatli qo'shildi!");
        addTestimonialToHTML(data);
      })
      .catch((error) => {
        alert("Ma'lumotni qo'shishda xatolik yuz berdi.");
        console.error(error);
      });
  }

  function handleDelete(id, testiDiv) {
    fetch(`http://localhost:3000/testimonials/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          alert("Testimonial muvaffaqiyatli o'chirildi!");
          testiDiv.remove(); 
        } else {
          console.error("Testimonialni o'chirishda xatolik yuz berdi.");
        }
      })
      .catch((error) => console.error("Error deleting testimonial:", error));
  }
  
});
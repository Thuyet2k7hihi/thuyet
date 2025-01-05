document.querySelectorAll('.smenu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function submitComment() {
            // Lấy dữ liệu từ các trường nhập liệu
            const username = document.getElementById('username').value;
            const useremail = document.getElementById('useremail').value;
            const usercomment = document.getElementById('usercomment').value;

            // Kiểm tra nếu có trường nào để trống
            if (!username || !usercomment) {
                alert('Vui lòng điền đầy đủ tên và bình luận!');
                return;
            }

            // Tạo phần tử cho bình luận mới
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.innerHTML = `
                <div class="author">${username} ${useremail ? `(<a href="mailto:${useremail}">${useremail}</a>)` : ''}</div>
                <div class="message">${usercomment}</div>
            `;

            // Thêm bình luận vào danh sách
            document.getElementById('comments-list').prepend(commentElement);

            // Xóa nội dung của các trường nhập liệu sau khi gửi
            document.getElementById('username').value = '';
            document.getElementById('useremail').value = '';
            document.getElementById('usercomment').value = '';
        }
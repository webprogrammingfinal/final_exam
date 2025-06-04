$(document).ready(function() {
  const saved = localStorage.getItem('profile');
  if (saved) {
    const profile = JSON.parse(saved);
    $('#profile-list').append(`
      <div class="profile-card">
        <h3>${profile.name}</h3>
        <p><strong>학과:</strong> ${profile.major}</p>
        <p>${profile.history}</p>
      </div>
    `);
  } else {
    $('#profile-list').html('<p>등록된 프로필이 없습니다.</p>');
  }
});

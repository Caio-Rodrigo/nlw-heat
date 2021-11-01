const links_social_midia = {
  github: 'Caio-Rodrigo',
  facebook: 'caio.rodrigo.3760430',
  instagram: 'caaiorodriigo',
  youtube: 'channel/UCDqOLUdc8oi78Nlck8BBE_w'
}

function change_social_midia_links() {
  for (let li of social_links.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${links_social_midia[social]}`
  }
}

change_social_midia_links()

function get_githurb_profile_info() {
  const url = `https://api.github.com/users/${links_social_midia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      user_name.textContent = data.name
      user_bio.textContent = data.bio
      user_log.textContent = data.login
      user_link_git.href = data.url
      user_photo.src = data.avatar_url
    })
}
get_githurb_profile_info()

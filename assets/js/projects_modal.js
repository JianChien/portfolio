const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

const grass_picture = document.getElementById('grass_picture')
const dry_mountain_and_water_picture = document.getElementById('dry_mountain_and_water_picture')
const navis_picture = document.getElementById('navis_picture')
const wandering_critical_picture = document.getElementById('wandering_critical_picture')
const focasa_picture = document.getElementById('focasa_picture')
const reconnect_picture = document.getElementById('reconnect_picture')
const metadata_picture = document.getElementById('metadata_picture')

openModalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const modal = document.querySelector(button.dataset.modalTarget)
		openModal(modal)
	})
})

overlay.addEventListener('click', () => {
	const modals = document.querySelectorAll('.modal.active')
	modals.forEach(modal => {
		closeModal(modal)
	})
})

closeModalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const modal = button.closest('.modal')
		closeModal(modal)
	})
})

function openModal(modal) {
	if (modal == null) return
	modal.classList.add('active')
	overlay.classList.add('active')
	document.body.style.overflow = 'hidden'

	grass_picture.style.opacity = '0'
	grass_picture.style.transform = 'scale(0)'
	grass_picture.style.transition = '0.8s ease-in-out'

	dry_mountain_and_water_picture.style.opacity = '0'
	dry_mountain_and_water_picture.style.transform = 'scale(0)'
	dry_mountain_and_water_picture.style.transition = '0.8s ease-in-out'

	navis_picture.style.opacity = '0'
	navis_picture.style.transform = 'scale(0)'
	navis_picture.style.transition = '0.8s ease-in-out'

	wandering_critical_picture.style.opacity = '0'
	wandering_critical_picture.style.transform = 'scale(0)'
	wandering_critical_picture.style.transition = '0.8s ease-in-out'

	focasa_picture.style.opacity = '0'
	focasa_picture.style.transform = 'scale(0)'
	focasa_picture.style.transition = '0.8s ease-in-out'

	reconnect_picture.style.opacity = '0'
	reconnect_picture.style.transform = 'scale(0)'
	reconnect_picture.style.transition = '0.8s ease-in-out'

	metadata_picture.style.opacity = '0'
	metadata_picture.style.transform = 'scale(0)'
	metadata_picture.style.transition = '0.8s ease-in-out'
}

function closeModal(modal) {
	$('.modal-video iframe').each(function(){
		$(this).attr('src', $(this).attr('src'));
	});
	if (modal == null) return
	modal.classList.remove('active')
	overlay.classList.remove('active')
	document.body.style.overflow = 'auto'

	grass_picture.style.opacity = '1'
	grass_picture.style.transform = 'scale(1)'
	grass_picture.style.transition = '0.8s ease-in-out'

	dry_mountain_and_water_picture.style.opacity = '1'
	dry_mountain_and_water_picture.style.transform = 'scale(1)'
	dry_mountain_and_water_picture.style.transition = '0.8s ease-in-out'

	navis_picture.style.opacity = '1'
	navis_picture.style.transform = 'scale(1)'
	navis_picture.style.transition = '0.8s ease-in-out'

	wandering_critical_picture.style.opacity = '1'
	wandering_critical_picture.style.transform = 'scale(1)'
	wandering_critical_picture.style.transition = '0.8s ease-in-out'

	focasa_picture.style.opacity = '1'
	focasa_picture.style.transform = 'scale(1)'
	focasa_picture.style.transition = '0.8s ease-in-out'

	reconnect_picture.style.opacity = '1'
	reconnect_picture.style.transform = 'scale(1)'
	reconnect_picture.style.transition = '0.8s ease-in-out'

	metadata_picture.style.opacity = '1'
	metadata_picture.style.transform = 'scale(1)'
	metadata_picture.style.transition = '0.8s ease-in-out'
}
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

const mission_anywhere_picture = document.getElementById('mission_anywhere_picture');
const fluctuating = document.getElementById('fluctuating_picture');
const back_to_the_future_picture = document.getElementById('back_to_the_future_picture');
const endless_picture = document.getElementById('endless_picture');
const pervading_light_picture = document.getElementById('pervading_light_picture');
const ting_picture = document.getElementById('ting_picture');
const metadata_picture = document.getElementById('metadata_picture');


openModalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const modal = document.querySelector(button.dataset.modalTarget);
		openModal(modal);
	});
});

overlay.addEventListener('click', () => {
	const modals = document.querySelectorAll('.modal.active');
	modals.forEach(modal => {
		closeModal(modal);
	});
});

closeModalButtons.forEach(button => {
	button.addEventListener('click', () => {
		const modal = button.closest('.modal');
		closeModal(modal);
	});
});

function openModal(modal) {
	if (modal == null) return;
	modal.classList.add('active');
	overlay.classList.add('active');
	document.body.style.overflow = 'hidden';

	mission_anywhere_picture.style.opacity = '0';
	mission_anywhere_picture.style.transform = 'scale(0)';
	mission_anywhere_picture.style.transition = '0.8s ease-in-out';

	fluctuating_picture.style.opacity = '0';
	fluctuating_picture.style.transform = 'scale(0)';
	fluctuating_picture.style.transition = '0.8s ease-in-out';

	back_to_the_future_picture.style.opacity = '0';
	back_to_the_future_picture.style.transform = 'scale(0)';
	back_to_the_future_picture.style.transition = '0.8s ease-in-out';

	endless_picture.style.opacity = '0';
	endless_picture.style.transform = 'scale(0)';
	endless_picture.style.transition = '0.8s ease-in-out';

	pervading_light_picture.style.opacity = '0';
	pervading_light_picture.style.transform = 'scale(0)';
	pervading_light_picture.style.transition = '0.8s ease-in-out';

	ting_picture.style.opacity = '0';
	ting_picture.style.transform = 'scale(0)';
	ting_picture.style.transition = '0.8s ease-in-out';

	metadata_picture.style.opacity = '0';
	metadata_picture.style.transform = 'scale(0)';
	metadata_picture.style.transition = '0.8s ease-in-out';
}

function closeModal(modal) {
	$('.modal-video iframe').each(function(){
		$(this).attr('src', $(this).attr('src'));
	});
	if (modal == null) return;
	modal.classList.remove('active');
	overlay.classList.remove('active');
	document.body.style.overflow = 'auto';

	mission_anywhere_picture.style.opacity = '1';
	mission_anywhere_picture.style.transform = 'scale(1)';
	mission_anywhere_picture.style.transition = '0.8s ease-in-out';

	fluctuating_picture.style.opacity = '1';
	fluctuating_picture.style.transform = 'scale(1)';
	fluctuating_picture.style.transition = '0.8s ease-in-out';

	back_to_the_future_picture.style.opacity = '1';
	back_to_the_future_picture.style.transform = 'scale(1)';
	back_to_the_future_picture.style.transition = '0.8s ease-in-out';

	endless_picture.style.opacity = '1';
	endless_picture.style.transform = 'scale(1)';
	endless_picture.style.transition = '0.8s ease-in-out';

	pervading_light_picture.style.opacity = '1';
	pervading_light_picture.style.transform = 'scale(1)';
	pervading_light_picture.style.transition = '0.8s ease-in-out';

	ting_picture.style.opacity = '1';
	ting_picture.style.transform = 'scale(1)';
	ting_picture.style.transition = '0.8s ease-in-out';

	metadata_picture.style.opacity = '1';
	metadata_picture.style.transform = 'scale(1)';
	metadata_picture.style.transition = '0.8s ease-in-out';
}
const storageType = localStorage;
const consentPropertyName = 'cookieConsent';

const shouldShowPopup = () => !storageType.getItem(consentPropertyName);
const saveToStorage = () => storageType.setItem(consentPropertyName, 'true');

window.onload = () => {
     const consentPopup = document.getElementById('consent-popup');
     const acceptBtn = document.getElementById('consent-accept');

     const acceptFn = () => {
         saveToStorage(storageType);
         consentPopup.classList.add('hidden');
     };

     acceptBtn.addEventListener('click', acceptFn);

    if(shouldShowPopup(storageType)){
        consentPopup.classList.remove('hidden');
    }
}

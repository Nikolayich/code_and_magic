'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 41, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];

var generateWizards = function() {
  for (var i = 0; i < 4; i++) {
    wizards.push( {
                   name: names[Math.floor((Math.random() * names.length))] + ' ' + surnames[Math.floor((Math.random() * surnames.length))],
                   coatColor: coatColors[Math.floor((Math.random() * coatColors.length))],
                   eyesColor: eyesColors[Math.floor((Math.random() * eyesColors.length))]
    } );
  }
}

var generateWizardTemplate = function(wizard) {
  var wizardTemplate = document.querySelector('#similar-wizard-template')
                     .content
                     .querySelector('.setup-similar-item');
  var wizardElement = wizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var renderWizards = function() {
  var fragment = document.createDocumentFragment();
  var wizardList = document.querySelector('.setup-similar-list');

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild( generateWizardTemplate(wizards[i]) );
  }

  wizardList.appendChild(fragment);
}

generateWizards();
renderWizards();

var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');

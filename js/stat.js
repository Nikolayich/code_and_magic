'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var COLUMN_WIDTH = 40;
var COLUMN_HEIGHT = 150;
var COLUMN_X = 155;
var COLUMN_Y = 95;
var COLUMNS_GAP = 50;
var SCORES_GAP = 5;
var NAMES_GAP = 20;
var TEXT_X = CLOUD_X + 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура! Вы победили!', TEXT_X, CLOUD_Y + 30);
  ctx.fillText('Список результатов:', TEXT_X, CLOUD_Y + 50);

  var biggestScore = 0;

    for (var i = 0; i < times.length; i++) {
      if (times[i] > biggestScore) {
        biggestScore = times[i];
      }
    }

  var renderColumns = function () {
    var gap = 0;

    for (var i = 0; i < names.length; i++) {
      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgba(0, 0, 255, ' + (Math.random() + 0.1) + ')';
      }
      ctx.fillRect(COLUMN_X + gap, COLUMN_Y + COLUMN_HEIGHT - Math.floor(times[i] * COLUMN_HEIGHT / biggestScore), COLUMN_WIDTH, Math.floor(times[i] * COLUMN_HEIGHT / biggestScore));

      gap += COLUMN_WIDTH + COLUMNS_GAP;
    }
  }

  var renderScores = function () {
    var gap = 0;
    ctx.fillStyle = '#000000';

    for (var i = 0; i < names.length; i++) {
      ctx.fillText(Math.floor(times[i]), COLUMN_X + gap, COLUMN_Y - SCORES_GAP + COLUMN_HEIGHT - Math.floor((times[i] * COLUMN_HEIGHT / biggestScore)));

      gap += COLUMN_WIDTH + COLUMNS_GAP;
    }
  }

  var renderNames = function () {
    var gap = 0;
    ctx.fillStyle = '#000000';

    for (var i = 0; i < names.length; i++) {
      ctx.fillText(names[i], COLUMN_X + gap, COLUMN_Y + NAMES_GAP + COLUMN_HEIGHT);

      gap += COLUMN_WIDTH + COLUMNS_GAP;
    }
  }

  renderScores();
  renderColumns();
  renderNames();
}

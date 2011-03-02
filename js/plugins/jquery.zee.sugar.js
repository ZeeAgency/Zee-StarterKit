/**
 * zeeSugar
 * Copyright 2011, Zee Agency
 * Licensed under the CeCILL-C license
 * 
 * http://www.cecill.info/licences/Licence_CeCILL-C_V1-en.html
 * http://www.cecill.info/licences/Licence_CeCILL-C_V1-fr.html
 */
(function($) {
    var methods = [
            'removeClass',  'addClass',         'hasClass',         'toggleClass',          'filter',               'filterNot'
        ],
        defs = [
            ['show',        'hide',             'isHidden',         'toggleHidden',         'filterHidden',         'filterNotHidden',          'hidden'],
            ['beVisible',   'beInvisible',      'isInvisible',      'toggleInvisible',      'filterInvisible',      'filterNotInvisible',       'invisible'],
            ['beOpaque',    'beTransparent',    'isTransparent',    'toggleTransparent',    'filterTransparent',    'filterNotTransparent',     'transparent'],
            ['turnOff',     'turnOn',           'isTurnedOn',       'toggleOn',             'filterOn',             'filterNotOn',              'on'],
            ['deactivate',  'activate',         'isActive',         'toggleActive',         'filterActive',         'filterNotActive',          'active'],
            ['collapse',    'expand',           'isExpanded',       'toggleExpanded',       'filterExpanded',       'filterNotExpanded',        'expanded'],
            ['enable',      'disable',          'isDisabled',       'toggleDisabled',       'filterDisabled',       'filterNotDisabled',        'disabled']
        ],
        createFn = function(methodName, fnName, className) {
            if(methodName === 'filter') {
                className = '.'+className;
            } else if(methodName === 'filterNot') {
                methodName = 'filter';
                className = ':not(.'+className+')';
            }
            $.fn[fnName] = function() {
                return $(this)[methodName](className);
            };
        },
        i, j;
    for(i in defs) {
        if(defs.hasOwnProperty(i)) {
            for(j in methods) {
                if(methods.hasOwnProperty(j)) {
                    createFn(methods[j], defs[i][j], defs[i][6]);
                }
            }
        }
    }

    $.fn.activate = function() {
        $(this).siblings('.'+defs[4][6]).deactivate();
        return $(this).addClass(defs[4][6]);
    };
})(jQuery);
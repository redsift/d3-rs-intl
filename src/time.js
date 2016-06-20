import * as ru_RU from 'd3-time-format/locale/ru-RU.json'

export function intlMonths(lang, fmt) {
    if (lang === undefined) {
        lang = navigator.language;
    }
    let formatter = null;

    if (window.Intl !== undefined) {
        formatter = new Intl.DateTimeFormat(lang, {
            month: fmt,
            timeZone: 'UTC'
        });
    } else {
        formatter = {
            format: function(date) {
                return date.toUTCString().split(' ')[2]
            }
        }
    }
    return Array.apply(null, Array(12)).map(function(_, i) {
        return formatter.format(new Date(Date.UTC(2014, i, 7)));
    });
}

export function intlWeekday(lang, fmt) {
    if (lang === undefined) {
        lang = navigator.language;
    }
    let formatter = null;

    if (window.Intl !== undefined) {
        formatter = new Intl.DateTimeFormat(lang, {
            weekday: fmt,
            timeZone: 'UTC'
        });
    } else {
        formatter = {
            format: function(date) {
                return date.toUTCString().split(' ')[0].substring(0, 3)
            }
        }
    }
    return Array.apply(null, Array(7)).map(function(_, i) {
        return formatter.format(new Date(Date.UTC(2014, 1, i + 2)));
    });
}

export default function time(lang) {
    if (lang == null) {
        if (navigator) {
            lang = navigator.languages; // HTML 5.1 proposed
            if (lang == null) {
                lang = [ navigator.language ]
            }
        } else {
            lang = [ 'en' ]
        }
    } else if (!Array.isArray(lang)) {
        lang = [ lang ];
    }

    return ru_RU;
}

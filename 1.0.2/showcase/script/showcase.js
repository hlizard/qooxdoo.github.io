(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!window.qxsettings) qxsettings = {};
var settings = {"qx.application":"showcase.Application","qx.theme":"showcase.theme.Theme","qx.version":"1.0.2"};
for (var k in settings) qxsettings[k] = settings[k];

if (!window.qxvariants) qxvariants = {};
var variants = {"qx.debug":"off"};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.0.2"},"showcase":{"resourceUri":"resource","sourceUri":"script","version":"trunk"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {"C":{},"de":{"%1 of %2 rows":"%1 von %2 Zeilen","%1 rows":"%1 Zeilen","A date:":"Datum:","Command Menu (keyboard shortcuts)":"Command-Menü (Tastenkürzel)","Copy":"Kopieren","Cut":"Aussschneiden","Date format full:":"Vollständiges Datumsformat:","Date format long:":"Langes Datumsformat:","Date format medium:":"Mittellanges Datumsformat:","Date format short:":"kurzes Zeitformat:","Date full:":"Vollständiges Datum:","Date long:":"Langes Datum:","Date medium:":"Mittellanges Datum:","Date short:":"Zeit (kurz):","Delete":"Löschen","Form Elements":"Formular Widgets","Format of %1:":"Format von %1:","Last month":"Vorheriger Monat","Last year":"Vorheriges Jahr","Locale Information":"Lokalisierungsinformationen","Locale:":"Sprachkennung:","Localized ComboBox:":"Lokalisierte ComboBox:","Next month":"Nächster Monat","Next year":"Nächstes Jahr","Paste":"Einfügen","Redo":"Wiederholen","Reset column widths":"Spaltenbreite zurücksetzen","Search":"Suchen","Search Again":"Weiter suchen","Select All":"Alles auswählen","Territory code:":"Landeskennung:","Time format long:":"Langes Zeitformat:","Time format short:":"kurzes Zeitformat:","Time long:":"Zeit (lang):","Time short:":"Zeit (kurz):","Undo":"Rückgängig","Week start:":"Wochenanfang:","key_full_Alt":"Alt","key_full_Apps":"Kontextmenü","key_full_Backspace":"Rücktaste","key_full_CapsLock":"Feststelltaste","key_full_Control":"Steuerung","key_full_Delete":"Entfernen","key_full_Down":"Pfeil runter","key_full_End":"Ende","key_full_Enter":"Enter","key_full_Escape":"Escape","key_full_Home":"Position 1","key_full_Insert":"Einfügen","key_full_Left":"Pfeil links","key_full_Meta":"Meta","key_full_NumLock":"NumLock","key_full_PageDown":"Bild runter ","key_full_PageUp":"Bild hoch","key_full_Pause":"Pause","key_full_PrintScreen":"Drucken","key_full_Right":"Pfeil rechts","key_full_Scroll":"Rollen","key_full_Shift":"Umschalttaste","key_full_Space":"Leertaste","key_full_Tab":"Tabulator","key_full_Up":"Pfeil hoch","key_full_Win":"Windowstaste","key_short_Alt":"Alt","key_short_Apps":"Kontext","key_short_Backspace":"Rück","key_short_CapsLock":"Feststell","key_short_Control":"Strg","key_short_Delete":"Entf","key_short_Down":"Runter","key_short_End":"Ende","key_short_Enter":"Enter","key_short_Escape":"Esc","key_short_Home":"Pos1","key_short_Insert":"Einfg","key_short_Left":"Links","key_short_Meta":"Meta","key_short_NumLock":"Num","key_short_PageDown":"Bild runter","key_short_PageUp":"Bild hoch","key_short_Pause":"Pause","key_short_PrintScreen":"Druck","key_short_Right":"Rechts ","key_short_Scroll":"Rollen","key_short_Shift":"Umschalt","key_short_Space":"Leer","key_short_Tab":"Tab","key_short_Up":"Hoch","key_short_Win":"Win","one of one row":"Eine von einer Zeile","one row":"Eine Zeile"},"de_AT":{},"de_DE":{},"en":{},"en_GB":{},"en_US":{},"es":{"%1 of %2 rows":"%1 de %2 filas","%1 rows":"%1 filas","A date:":"Una fecha:","Command Menu (keyboard shortcuts)":"Menú de comando (claves del teclado)","Copy":"Copiar","Cut":"Cortar","Date format full:":"Formato de fecha completo:","Date format long:":"Formato de fecha largo:","Date format medium:":"Formato de fecha mediano:","Date format short:":"Formato de hora corto:","Date full:":"Fecha completo:","Date long:":"Fecha largo:","Date medium:":"Fecha mediano:","Date short:":"Hora corto:","Delete":"Borrar","Format of %1:":"Formato de %1:","Last month":"Último mes","Last year":"Último año","Locale Information":"Información de la localisación","Locale:":"Localisación:","Localized ComboBox:":"ComboBox:","Next month":"Mes siguiente","Next year":"Año siguiente","Paste":"Pegar","Redo":"Rehacer","Reset column widths":"Reestablecer anchos de columnas","Search":"Búsqueda","Search Again":"Buscar otra vez","Select All":"Seleccionar todo","Territory code:":"Código regional:","Time format long:":"Formato de hora largo:","Time format short:":"Formato de hora corto:","Time long:":"Hora largo:","Time short:":"Hora corto:","Undo":"Deshacer","Week start:":"Inicio de semana:","key_full_Alt":"Alt","key_full_Apps":"Aplicaciones","key_full_Backspace":"Retroceso","key_full_CapsLock":"Bloqueo Mayúsculas","key_full_Control":"Control","key_full_Delete":"Suprimir","key_full_Down":"Flecha abajo","key_full_End":"Fin","key_full_Enter":"Intro","key_full_Escape":"Escape","key_full_Home":"Inicio","key_full_Insert":"Insertar","key_full_Left":"Flecha izquierda","key_full_Meta":"Meta","key_full_NumLock":"Bloqueo Numérico","key_full_PageDown":"Avanzar Página","key_full_PageUp":"Retroceder Página","key_full_Pause":"Pausa","key_full_PrintScreen":"Imprimir Pantalla","key_full_Right":"Flecha derecha","key_full_Scroll":"Bloq. Despl.","key_full_Shift":"Mayúscula","key_full_Space":"Espacio","key_full_Tab":"Tabulador","key_full_Up":"Flecha arriba","key_full_Win":"Windows","key_short_Alt":"Alt","key_short_Apps":"Aplic","key_short_Backspace":"Retroceso","key_short_CapsLock":"BloqMayús","key_short_Control":"Ctrl","key_short_Control_Mac":"Ctrl","key_short_Delete":"Supr","key_short_Down":"Abajo","key_short_End":"Fin","key_short_Enter":"Intro","key_short_Escape":"Esc","key_short_Home":"Inicio","key_short_Insert":"Insert","key_short_Left":"Izquierda","key_short_Meta":"Meta","key_short_NumLock":"BloqNum","key_short_PageDown":"AvPág","key_short_PageUp":"RePág","key_short_Pause":"Pausa","key_short_PrintScreen":"ImprPant","key_short_Right":"Derecha","key_short_Scroll":"BloqDespl","key_short_Shift":"Mayús","key_short_Space":"Espacio","key_short_Tab":"Tab","key_short_Up":"Arriba","key_short_Win":"Win","one of one row":"una de una fila","one row":"una fila"},"es_ES":{},"es_MX":{}};
qx.$$locales = {"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"d. EEE","cldr_date_time_format_Ed":"E d.","cldr_date_time_format_H":"H","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d. MMM","cldr_date_time_format_MMMMEd":"E d. MMMM","cldr_date_time_format_MMMMd":"d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-M","cldr_date_time_format_yMEd":"EEE, yyyy-M-d","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"D","cldr_day_format_narrow_tue":"D","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr.","cldr_day_stand-alone_abbreviated_mon":"Mo.","cldr_day_stand-alone_abbreviated_sat":"Sa.","cldr_day_stand-alone_abbreviated_sun":"So.","cldr_day_stand-alone_abbreviated_thu":"Do.","cldr_day_stand-alone_abbreviated_tue":"Di.","cldr_day_stand-alone_abbreviated_wed":"Mi.","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Freitag","cldr_day_stand-alone_wide_mon":"Montag","cldr_day_stand-alone_wide_sat":"Samstag","cldr_day_stand-alone_wide_sun":"Sonntag","cldr_day_stand-alone_wide_thu":"Donnerstag","cldr_day_stand-alone_wide_tue":"Dienstag","cldr_day_stand-alone_wide_wed":"Mittwoch","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"“","quotationStart":"„"},"de_AT":{"cldr_date_format_full":"EEEE, dd. MMMM y","cldr_date_format_long":"dd. MMMM y","cldr_month_format_abbreviated_1":"Jän","cldr_month_format_wide_1":"Jänner"},"de_DE":{},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_Hms":"H:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMMEd":"E, MMMM d","cldr_date_time_format_MMMMd":"MMMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE, M/d/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"W","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_abbreviated_fri":"Fri","cldr_day_stand-alone_abbreviated_mon":"Mon","cldr_day_stand-alone_abbreviated_sat":"Sat","cldr_day_stand-alone_abbreviated_sun":"Sun","cldr_day_stand-alone_abbreviated_thu":"Thu","cldr_day_stand-alone_abbreviated_tue":"Tue","cldr_day_stand-alone_abbreviated_wed":"Wed","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_day_stand-alone_wide_fri":"Friday","cldr_day_stand-alone_wide_mon":"Monday","cldr_day_stand-alone_wide_sat":"Saturday","cldr_day_stand-alone_wide_sun":"Sunday","cldr_day_stand-alone_wide_thu":"Thursday","cldr_day_stand-alone_wide_tue":"Tuesday","cldr_day_stand-alone_wide_wed":"Wednesday","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","quotationEnd":"”","quotationStart":"“"},"en_GB":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_date_format_full":"EEEE, d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yyyy","cldr_date_time_format_MEd":"E, d/M","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_yMEd":"EEE, d/M/yyyy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyyyMM":"MM/yyyy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"’","quotationStart":"‘"},"en_US":{},"es":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"a.m.","cldr_date_format_full":"EEEE d 'de' MMMM 'de' y","cldr_date_format_long":"d 'de' MMMM 'de' y","cldr_date_format_medium":"dd/MM/yyyy","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"EEE d","cldr_date_time_format_HHmm":"HH:mm","cldr_date_time_format_HHmmss":"HH:mm:ss","cldr_date_time_format_Hm":"H:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d-M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"E d MMMM","cldr_date_time_format_MMMMd":"d 'de' MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd-MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"MM/dd","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_hhmm":"hh:mm a","cldr_date_time_format_hhmmss":"hh:mm:ss a","cldr_date_time_format_mmss":"mm:ss","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d MMM y","cldr_date_time_format_yMMMM":"MMMM 'de' y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ yyyy","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM-yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ 'de' yy","cldr_date_time_format_yyyyMM":"MM/yyyy","cldr_day_format_abbreviated_fri":"vie","cldr_day_format_abbreviated_mon":"lun","cldr_day_format_abbreviated_sat":"sáb","cldr_day_format_abbreviated_sun":"dom","cldr_day_format_abbreviated_thu":"jue","cldr_day_format_abbreviated_tue":"mar","cldr_day_format_abbreviated_wed":"mié","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"viernes","cldr_day_format_wide_mon":"lunes","cldr_day_format_wide_sat":"sábado","cldr_day_format_wide_sun":"domingo","cldr_day_format_wide_thu":"jueves","cldr_day_format_wide_tue":"martes","cldr_day_format_wide_wed":"miércoles","cldr_day_stand-alone_abbreviated_fri":"vie","cldr_day_stand-alone_abbreviated_mon":"lun","cldr_day_stand-alone_abbreviated_sat":"sáb","cldr_day_stand-alone_abbreviated_sun":"dom","cldr_day_stand-alone_abbreviated_thu":"jue","cldr_day_stand-alone_abbreviated_tue":"mar","cldr_day_stand-alone_abbreviated_wed":"mié","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"viernes","cldr_day_stand-alone_wide_mon":"lunes","cldr_day_stand-alone_wide_sat":"sábado","cldr_day_stand-alone_wide_sun":"domingo","cldr_day_stand-alone_wide_thu":"jueves","cldr_day_stand-alone_wide_tue":"martes","cldr_day_stand-alone_wide_wed":"miércoles","cldr_month_format_abbreviated_1":"ene","cldr_month_format_abbreviated_10":"oct","cldr_month_format_abbreviated_11":"nov","cldr_month_format_abbreviated_12":"dic","cldr_month_format_abbreviated_2":"feb","cldr_month_format_abbreviated_3":"mar","cldr_month_format_abbreviated_4":"abr","cldr_month_format_abbreviated_5":"may","cldr_month_format_abbreviated_6":"jun","cldr_month_format_abbreviated_7":"jul","cldr_month_format_abbreviated_8":"ago","cldr_month_format_abbreviated_9":"sep","cldr_month_format_wide_1":"enero","cldr_month_format_wide_10":"octubre","cldr_month_format_wide_11":"noviembre","cldr_month_format_wide_12":"diciembre","cldr_month_format_wide_2":"febrero","cldr_month_format_wide_3":"marzo","cldr_month_format_wide_4":"abril","cldr_month_format_wide_5":"mayo","cldr_month_format_wide_6":"junio","cldr_month_format_wide_7":"julio","cldr_month_format_wide_8":"agosto","cldr_month_format_wide_9":"septiembre","cldr_month_stand-alone_narrow_1":"E","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0%","cldr_pm":"p.m.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","quotationEnd":"’","quotationStart":"‘"},"es_ES":{},"es_MX":{"cldr_number_decimal_separator":".","cldr_number_group_separator":","}};
qx.$$i18n    = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"animation":[],"boot":[0],"data":[0,1,14],"dragdrop":[0],"form":[0,1,3,4,5,7,9,12],"htmleditor":[0,1,2,3,4,6,9,15],"i18n":[0,1,3,4,5,7,8],"table":[0,1,2,3,5,6,8,10],"theme":[0,2,13],"tree":[0,2,11]},
  uris : [["showcase:showcase.js"],["showcase:showcase-0.js"],["showcase:showcase-1.js"],["showcase:showcase-2.js"],["showcase:showcase-3.js"],["showcase:showcase-4.js"],["showcase:showcase-5.js"],["showcase:showcase-6.js"],["showcase:showcase-7.js"],["showcase:showcase-8.js"],["showcase:showcase-9.js"],["showcase:showcase-10.js"],["showcase:showcase-11.js"],["showcase:showcase-12.js"],["showcase:showcase-13.js"],["showcase:showcase-14.js"]],
  urisBefore : [],
  packageHashes : {"0":"cac023676d57","1":"4e0855d77c53","2":"e53ded6836a0","3":"e9018bab16a1","4":"c81ec01e193b","5":"b627ef03374c","6":"1acf2d08658a","7":"0a07f077632d","8":"475783c6750e","9":"e2713ec921b3","10":"cffb645b55e5","11":"e4a7160b0f8e","12":"dc24c9b35a48","13":"39d7cacee8a0","14":"643d0a5ca112","15":"47c5495be531"},
  boot : "boot",
  bootIsInline : true,
  
  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      
      uris.push(euri);
    }
    return uris;      
  }
};  

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function()
  {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")
    {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  loadScript(list.shift(), function() {
    if (isWebkit) {
      // force asynchronous load
      // Safari fails with an "maximum recursion depth exceeded" error if it is
      // called sync.      
      window.setTimeout(function() {
        loadScriptList(list, callback);
      }, 0);
    } else {
      loadScriptList(list, callback);
    }
  });
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
}

qx.$$loader.signalStartup = function () {
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) qx.event.handler.Application.onScriptLoaded();
}

qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){return;});
  }
  var bootPackageHash=l.packageHashes[l.parts[l.boot][0]];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.uris[l.parts[l.boot]]), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash]);
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['cac023676d57']={"resources":{"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-clear.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-copy.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-cut.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-delete.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-find.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-paste.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-redo.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-select-all.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/edit-undo.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx"],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/icon/Tango/64/actions/object-flip-horizontal.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/audio-card.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/audio-input-microphone.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/battery.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/camera-photo.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/camera-web.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/computer.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/display.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/drive-harddisk.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/drive-optical.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/input-keyboard.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/input-mouse.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/media-flash.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/media-optical.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/multimedia-player.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/network-wired.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/network-wireless.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/pda.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/phone.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/printer.png":[64,64,"png","qx"],"qx/icon/Tango/64/devices/scanner.png":[64,64,"png","qx"],"qx/static/blank.gif":[1,1,"gif","qx"],"qx/static/blank.html":"qx","showcase/animation/icon.png":[151,125,"png","showcase"],"showcase/databinding/icon.png":[151,125,"png","showcase"],"showcase/databinding/twitter_logo_outline.png":[300,78,"png","showcase"],"showcase/dragdrop/icon.png":[151,125,"png","showcase"],"showcase/form/icon.png":[151,125,"png","showcase"],"showcase/htmleditor/format-list-ordered.png":[16,16,"png","showcase"],"showcase/htmleditor/format-list-unordered.png":[16,16,"png","showcase"],"showcase/htmleditor/icon.png":[151,125,"png","showcase"],"showcase/i18n/de.png":[60,40,"png","showcase"],"showcase/i18n/en.png":[60,40,"png","showcase"],"showcase/i18n/es.png":[60,40,"png","showcase"],"showcase/i18n/icon.png":[151,125,"png","showcase"],"showcase/i18n/nl.png":[60,40,"png","showcase"],"showcase/images/contentbackground.gif":[300,12,"gif","showcase"],"showcase/images/headerback.png":[11,200,"png","showcase"],"showcase/images/loading66.gif":[66,66,"gif","showcase"],"showcase/images/tag-hor-c.png":[6,12,"png","showcase"],"showcase/images/tag-hor-l.png":[6,12,"png","showcase"],"showcase/images/tag-hor-r.png":[6,12,"png","showcase"],"showcase/images/tag-vert-b.png":[12,6,"png","showcase"],"showcase/images/tag-vert-c.png":[12,6,"png","showcase"],"showcase/images/tag-vert-t.png":[12,6,"png","showcase"],"showcase/images/welcome.png":[413,121,"png","showcase"],"showcase/table/icon.png":[151,125,"png","showcase"],"showcase/theme/button-b.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-24],"showcase/theme/button-bl.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-12],"showcase/theme/button-br.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-30],"showcase/theme/button-c.png":[20,22,"png","showcase"],"showcase/theme/button-combined-lr.png":[24,22,"png","showcase"],"showcase/theme/button-combined-tb.png":[6,72,"png","showcase"],"showcase/theme/button-l.png":[6,22,"png","showcase","showcase/theme/button-combined-lr.png",-18,0],"showcase/theme/button-pressed-b.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-54],"showcase/theme/button-pressed-bl.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-18],"showcase/theme/button-pressed-br.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-36],"showcase/theme/button-pressed-c.png":[20,22,"png","showcase"],"showcase/theme/button-pressed-l.png":[6,22,"png","showcase","showcase/theme/button-combined-lr.png",-12,0],"showcase/theme/button-pressed-r.png":[6,22,"png","showcase","showcase/theme/button-combined-lr.png",0,0],"showcase/theme/button-pressed-t.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-48],"showcase/theme/button-pressed-tl.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-42],"showcase/theme/button-pressed-tr.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-66],"showcase/theme/button-r.png":[6,22,"png","showcase","showcase/theme/button-combined-lr.png",-6,0],"showcase/theme/button-t.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-6],"showcase/theme/button-tl.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,0],"showcase/theme/button-tr.png":[6,6,"png","showcase","showcase/theme/button-combined-tb.png",0,-60],"showcase/theme/display-b.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,0],"showcase/theme/display-bl.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,-24],"showcase/theme/display-br.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,-12],"showcase/theme/display-c.png":[20,27,"png","showcase"],"showcase/theme/display-combined-lr.png":[12,27,"png","showcase"],"showcase/theme/display-combined-tb.png":[6,36,"png","showcase"],"showcase/theme/display-l.png":[6,27,"png","showcase","showcase/theme/display-combined-lr.png",0,0],"showcase/theme/display-r.png":[6,27,"png","showcase","showcase/theme/display-combined-lr.png",-6,0],"showcase/theme/display-t.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,-18],"showcase/theme/display-tl.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,-30],"showcase/theme/display-tr.png":[6,6,"png","showcase","showcase/theme/display-combined-tb.png",0,-6],"showcase/theme/icon.png":[151,125,"png","showcase"],"showcase/theme/window-b.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,-20],"showcase/theme/window-bl.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,-40],"showcase/theme/window-br.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,0],"showcase/theme/window-c.png":[20,52,"png","showcase"],"showcase/theme/window-combined-lr.png":[20,52,"png","showcase"],"showcase/theme/window-combined-tb.png":[10,60,"png","showcase"],"showcase/theme/window-l.png":[10,52,"png","showcase","showcase/theme/window-combined-lr.png",0,0],"showcase/theme/window-r.png":[10,52,"png","showcase","showcase/theme/window-combined-lr.png",-10,0],"showcase/theme/window-t.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,-50],"showcase/theme/window-tl.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,-30],"showcase/theme/window-tr.png":[10,10,"png","showcase","showcase/theme/window-combined-tb.png",0,-10],"showcase/tree/icon.png":[151,125,"png","showcase"]}};
(function(){var bi="toString",bh=".",bg="default",bf="Object",be='"',bd="Array",bc="()",bb="String",ba="Function",Y=".prototype",bG="function",bF="Boolean",bE="Error",bD="RegExp",bC="warn",bB="hasOwnProperty",bA="string",bz="toLocaleString",by='\", "',bx="info",bp="BROKEN_IE",bq="isPrototypeOf",bn="Date",bo="",bl="qx.Bootstrap",bm="]",bj="Class",bk="error",br="[Class ",bs="valueOf",bu="Number",bt="count",bw="debug",bv="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return br+this.classname+bm;
},createNamespace:function(name,y){var A=name.split(bh);
var parent=window;
var z=A[0];

for(var i=0,B=A.length-1;i<B;i++,z=A[i]){if(!parent[z]){parent=parent[z]={};
}else{parent=parent[z];
}}parent[z]=y;
return z;
},setDisplayName:function(I,J,name){I.displayName=J+bh+name+bc;
},setDisplayNames:function(K,L){for(var name in K){var M=K[name];

if(M instanceof Function){M.displayName=L+bh+name+bc;
}}},define:function(name,bN){if(!bN){var bN={statics:{}};
}var bS;
var bQ=null;
qx.Bootstrap.setDisplayNames(bN.statics,name);

if(bN.members){qx.Bootstrap.setDisplayNames(bN.members,name+Y);
bS=bN.construct||new Function;
var bO=bN.statics||{};
for(var i=0,bT=qx.Bootstrap.getKeys(bO),l=bT.length;i<l;i++){var bU=bT[i];
bS[bU]=bO[bU];
}bQ=bS.prototype;
var bP=bN.members||{};
for(var i=0,bT=qx.Bootstrap.getKeys(bP),l=bT.length;i<l;i++){var bU=bT[i];
bQ[bU]=bP[bU];
}}else{bS=bN.statics||{};
}var bR=this.createNamespace(name,bS);
bS.name=bS.classname=name;
bS.basename=bR;
bS.$$type=bj;
if(!bS.hasOwnProperty(bi)){bS.toString=this.genericToString;
}if(bN.defer){bN.defer(bS,bQ);
}qx.Bootstrap.$$registry[name]=bN.statics;
return bS;
}};
qx.Bootstrap.define(bl,{statics:{LOADSTART:qx.$$start||new Date(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(g){return g.__count__;
},"default":function(bV){var length=0;

for(var bW in bV){length++;
}return length;
}})[(({}).__count__==0)?bt:bg],objectMergeWith:function(r,s,t){if(t===undefined){t=true;
}
for(var u in s){if(t||r[u]===undefined){r[u]=s[u];
}}return r;
},__a:[bq,bB,bz,bi,bs],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(j){var k=[];

for(var o in j){k.push(o);
}var m=qx.Bootstrap.__a;
var n=Object.prototype.hasOwnProperty;

for(var i=0,a=m,l=a.length;i<l;i++){if(n.call(j,a[i])){k.push(a[i]);
}}return k;
},"default":function(d){var e=[];

for(var f in d){e.push(f);
}return e;
}})[typeof (Object.keys)==
bG?bv:
(function(){for(var p in {toString:1}){return p;
}})()!==bi?bp:bg],getKeysAsString:function(bJ){var bK=qx.Bootstrap.getKeys(bJ);

if(bK.length==0){return bo;
}return be+bK.join(by)+be;
},__b:{"[object String]":bb,"[object Array]":bd,"[object Object]":bf,"[object RegExp]":bD,"[object Number]":bu,"[object Boolean]":bF,"[object Date]":bn,"[object Function]":ba,"[object Error]":bE},firstUp:function(X){return X.charAt(0).toUpperCase()+X.substr(1);
},firstLow:function(bL){return bL.charAt(0).toLowerCase()+bL.substr(1);
},getClass:function(C){var D=Object.prototype.toString.call(C);
return (qx.Bootstrap.__b[D]||D.slice(8,-1));
},isString:function(bH){return (bH!==null&&(typeof bH===bA||qx.Bootstrap.getClass(bH)==bb||bH instanceof String||(!!bH&&!!bH.$$isString)));
},isArray:function(R){return (R!==null&&(R instanceof Array||(R&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(R.constructor,qx.data.IListData))||qx.Bootstrap.getClass(R)==bd||(!!R&&!!R.$$isArray)));
},isObject:function(q){return (q!==undefined&&q!==null&&qx.Bootstrap.getClass(q)==bf);
},isFunction:function(x){return qx.Bootstrap.getClass(x)==ba;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(G,name){while(G){if(G.$$properties&&G.$$properties[name]){return G.$$properties[name];
}G=G.superclass;
}return null;
},hasProperty:function(H,name){return !!qx.Bootstrap.getPropertyDefinition(H,name);
},getEventType:function(bM,name){var bM=bM.constructor;

while(bM.superclass){if(bM.$$events&&bM.$$events[name]!==undefined){return bM.$$events[name];
}bM=bM.superclass;
}return null;
},supportsEvent:function(bI,name){return !!qx.Bootstrap.getEventType(bI,name);
},getByInterface:function(U,V){var W,i,l;

while(U){if(U.$$implements){W=U.$$flatImplements;

for(i=0,l=W.length;i<l;i++){if(W[i]===V){return U;
}}}U=U.superclass;
}return null;
},hasInterface:function(P,Q){return !!qx.Bootstrap.getByInterface(P,Q);
},getMixins:function(E){var F=[];

while(E){if(E.$$includes){F.push.apply(F,E.$$flatIncludes);
}E=E.superclass;
}return F;
},$$logs:[],debug:function(S,T){qx.Bootstrap.$$logs.push([bw,arguments]);
},info:function(b,c){qx.Bootstrap.$$logs.push([bx,arguments]);
},warn:function(v,w){qx.Bootstrap.$$logs.push([bC,arguments]);
},error:function(N,O){qx.Bootstrap.$$logs.push([bk,arguments]);
},trace:function(h){}}});
})();
(function(){var k="qx.allowUrlSettings",j="&",h="qx.core.Setting",g="qx.allowUrlVariants",f="qx.propertyDebugLevel",e="qxsetting",d=":",c=".";
qx.Bootstrap.define(h,{statics:{__c:{},define:function(a,b){if(b===undefined){throw new Error('Default value of setting "'+a+'" must be defined!');
}
if(!this.__c[a]){this.__c[a]={};
}else if(this.__c[a].defaultValue!==undefined){throw new Error('Setting "'+a+'" is already defined!');
}this.__c[a].defaultValue=b;
},get:function(l){var m=this.__c[l];

if(m===undefined){throw new Error('Setting "'+l+'" is not defined.');
}
if(m.value!==undefined){return m.value;
}return m.defaultValue;
},set:function(p,q){if((p.split(c)).length<2){throw new Error('Malformed settings key "'+p+'". Must be following the schema "namespace.key".');
}
if(!this.__c[p]){this.__c[p]={};
}this.__c[p].value=q;
},__d:function(){if(window.qxsettings){for(var n in window.qxsettings){this.set(n,window.qxsettings[n]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(o){}this.__e();
}},__e:function(){if(this.get(k)!=true){return;
}var t=document.location.search.slice(1).split(j);

for(var i=0;i<t.length;i++){var s=t[i].split(d);

if(s.length!=3||s[0]!=e){continue;
}this.set(s[1],decodeURIComponent(s[2]));
}}},defer:function(r){r.define(k,false);
r.define(g,false);
r.define(f,0);
r.__d();
}});
})();
(function(){var h="function",g="Boolean",f="qx.Interface",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(f,{statics:{define:function(name,v){if(v){if(v.extend&&!(v.extend instanceof Array)){v.extend=[v.extend];
}{};
var w=v.statics?v.statics:{};
if(v.extend){w.$$extends=v.extend;
}
if(v.properties){w.$$properties=v.properties;
}
if(v.members){w.$$members=v.members;
}
if(v.events){w.$$events=v.events;
}}else{var w={};
}w.$$type=c;
w.name=name;
w.toString=this.genericToString;
w.basename=qx.Bootstrap.createNamespace(name,w);
qx.Interface.$$registry[name]=w;
return w;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(t){if(!t){return [];
}var u=t.concat();

for(var i=0,l=t.length;i<l;i++){if(t[i].$$extends){u.push.apply(u,this.flatten(t[i].$$extends));
}}return u;
},__f:function(I,J,K,L){var P=K.$$members;

if(P){for(var O in P){if(qx.Bootstrap.isFunction(P[O])){var N=this.__g(J,O);
var M=N||qx.Bootstrap.isFunction(I[O]);

if(!M){throw new Error('Implementation of method "'+O+'" is missing in class "'+J.classname+'" required by interface "'+K.name+'"');
}var Q=L===true&&!N&&!qx.Bootstrap.hasInterface(J,K);

if(Q){I[O]=this.__j(K,I[O],O,P[O]);
}}else{if(typeof I[O]===undefined){if(typeof I[O]!==h){throw new Error('Implementation of member "'+O+'" is missing in class "'+J.classname+'" required by interface "'+K.name+'"');
}}}}}},__g:function(n,o){var s=o.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!s){return false;
}var p=qx.Bootstrap.firstLow(s[2]);
var q=qx.Bootstrap.getPropertyDefinition(n,p);

if(!q){return false;
}var r=s[0]==b||s[0]==d;

if(r){return qx.Bootstrap.getPropertyDefinition(n,p).check==g;
}return true;
},__h:function(j,k){if(k.$$properties){for(var m in k.$$properties){if(!qx.Bootstrap.getPropertyDefinition(j,m)){throw new Error('The property "'+m+'" is not supported by Class "'+j.classname+'"!');
}}}},__i:function(x,y){if(y.$$events){for(var z in y.$$events){if(!qx.Bootstrap.supportsEvent(x,z)){throw new Error('The event "'+z+'" is not supported by Class "'+x.classname+'"!');
}}}},assertObject:function(E,F){var H=E.constructor;
this.__f(E,H,F,false);
this.__h(H,F);
this.__i(H,F);
var G=F.$$extends;

if(G){for(var i=0,l=G.length;i<l;i++){this.assertObject(E,G[i]);
}}},assert:function(A,B,C){this.__f(A.prototype,A,B,C);
this.__h(A,B);
this.__i(A,B);
var D=B.$$extends;

if(D){for(var i=0,l=D.length;i<l;i++){this.assert(A,D[i],C);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__j:function(){},__k:null,__l:function(){}}});
})();
(function(){var g="qx.Mixin",f=".prototype",e="constructor",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(g,{statics:{define:function(name,w){if(w){if(w.include&&!(w.include instanceof Array)){w.include=[w.include];
}{};
var y=w.statics?w.statics:{};
qx.Bootstrap.setDisplayNames(y,name);

for(var x in y){if(y[x] instanceof Function){y[x].$$mixin=y;
}}if(w.construct){y.$$constructor=w.construct;
qx.Bootstrap.setDisplayName(w.construct,name,e);
}
if(w.include){y.$$includes=w.include;
}
if(w.properties){y.$$properties=w.properties;
}
if(w.members){y.$$members=w.members;
qx.Bootstrap.setDisplayNames(w.members,name+f);
}
for(var x in y.$$members){if(y.$$members[x] instanceof Function){y.$$members[x].$$mixin=y;
}}
if(w.events){y.$$events=w.events;
}
if(w.destruct){y.$$destructor=w.destruct;
qx.Bootstrap.setDisplayName(w.destruct,name,b);
}}else{var y={};
}y.$$type=a;
y.name=name;
y.toString=this.genericToString;
y.basename=qx.Bootstrap.createNamespace(name,y);
this.$$registry[name]=y;
return y;
},checkCompatibility:function(m){var p=this.flatten(m);
var q=p.length;

if(q<2){return true;
}var t={};
var s={};
var r={};
var o;

for(var i=0;i<q;i++){o=p[i];

for(var n in o.events){if(r[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+r[n]+'" in member "'+n+'"!');
}r[n]=o.name;
}
for(var n in o.properties){if(t[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+t[n]+'" in property "'+n+'"!');
}t[n]=o.name;
}
for(var n in o.members){if(s[n]){throw new Error('Conflict between mixin "'+o.name+'" and "'+s[n]+'" in member "'+n+'"!');
}s[n]=o.name;
}}return true;
},isCompatible:function(h,j){var k=qx.Bootstrap.getMixins(j);
k.push(h);
return qx.Mixin.checkCompatibility(k);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(u){if(!u){return [];
}var v=u.concat();

for(var i=0,l=u.length;i<l;i++){if(u[i].$$includes){v.push.apply(v,this.flatten(u[i].$$includes));
}}return v;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__m:null,__n:function(){}}});
})();
(function(){var ca=';',bY="string",bX='!==undefined)',bW='if(this.',bV='return this.',bU="boolean",bT="set",bS="resetThemed",bR="setThemed",bQ="resetRuntime",bF="reset",bE='this.',bD="setRuntime",bC="init",bB="",bA="this.",bz='=value;',by='else if(this.',bx='delete this.',bw="();",ch='else ',ci="return this.",cf="get",cg='(value);',cd="(a[",ce=' of an instance of ',cb="refresh",cc=' is not (yet) ready!");',cj="]);",ck='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',bJ='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',bI='value !== null && value.nodeType === 9 && value.documentElement',bL='===value)return value;',bK='value !== null && value.$$type === "Mixin"',bN='return init;',bM='var init=this.',bP='value !== null && value.nodeType === 1 && value.attributes',bO="Error in property ",bH="property",bG='.validate.call(this, value);',r='qx.core.Assert.assertInstance(value, Date, msg) || true',s=" in method ",t='qx.core.Assert.assertInstance(value, Error, msg) || true',u='Undefined value is not allowed!',v="inherit",w='Is invalid!',x='if(value===undefined)prop.error(this,2,"',y="': ",z=" of class ",A='value !== null && value.nodeType !== undefined',co='===undefined)return;',cn='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',cm='qx.core.Assert.assertPositiveInteger(value, msg) || true',cl='value=this.',cs='","',cr='if(init==qx.core.Property.$$inherit)init=null;',cq='value !== null && value.$$type === "Interface"',cp='var inherit=prop.$$inherit;',cu="$$useinit_",ct='",value);',ba="on",bb="$$runtime_",X='Requires exactly one argument!',Y="$$user_",be='qx.core.Assert.assertArray(value, msg) || true',bf='qx.core.Assert.assertPositiveNumber(value, msg) || true',bc=".prototype",bd="Boolean",V='return value;',W='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',I='Does not allow any arguments!',H="()",K="var a=arguments[0] instanceof Array?arguments[0]:arguments;",J='.$$properties.',E='value !== null && value.$$type === "Theme"',D="())",G='return null;',F='qx.core.Assert.assertObject(value, msg) || true',C='qx.core.Assert.assertString(value, msg) || true',B='value !== null && value.$$type === "Class"',bk='qx.core.Assert.assertFunction(value, msg) || true',bl=".",bm="object",bn="$$init_",bg="$$theme_",bh='qx.core.Assert.assertMap(value, msg) || true',bi="qx.aspects",bj='qx.core.Assert.assertNumber(value, msg) || true',bo='Null value is not allowed!',bp='qx.core.Assert.assertInteger(value, msg) || true',S="value",R="shorthand",Q='qx.core.Assert.assertInstance(value, RegExp, msg) || true',P='value !== null && value.type !== undefined',O='value !== null && value.document',N='throw new Error("Property ',M="(!this.",L='qx.core.Assert.assertBoolean(value, msg) || true',U="toggle",T="$$inherit_",bq='var prop=qx.core.Property;',br=" with incoming value '",bs="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",bt="qx.core.Property",bu="is",bv='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(bt,{statics:{__o:{"Boolean":L,"String":C,"Number":bj,"Integer":bp,"PositiveNumber":bf,"PositiveInteger":cm,"Error":t,"RegExp":Q,"Object":F,"Array":be,"Map":bh,"Function":bk,"Date":r,"Node":A,"Element":bP,"Document":bI,"Window":O,"Event":P,"Class":B,"Mixin":bK,"Interface":cq,"Theme":E,"Color":ck,"Decorator":cn,"Font":bJ},__p:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:v,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bY,dispose:bU,inheritable:bU,nullable:bU,themeable:bU,refine:bU,init:null,apply:bY,event:bY,check:null,transform:bY,deferredInit:bU,validate:null},$$allowedGroupKeys:{name:bY,group:bm,mode:bY,themeable:bU},$$inheritable:{},refresh:function(cU){var parent=cU.getLayoutParent();

if(parent){var cX=cU.constructor;
var da=this.$$store.inherit;
var cY=this.$$store.init;
var cW=this.$$method.refresh;
var db;
var cV;
{};

while(cX){db=cX.$$properties;

if(db){for(var name in this.$$inheritable){if(db[name]&&cU[cW[name]]){cV=parent[da[name]];

if(cV===undefined){cV=parent[cY[name]];
}{};
cU[cW[name]](cV);
}}}cX=cX.superclass;
}}},attach:function(dC){var dD=dC.$$properties;

if(dD){for(var name in dD){this.attachMethods(dC,name,dD[name]);
}}dC.$$propertiesAttached=true;
},attachMethods:function(cy,name,cz){cz.group?this.__q(cy,cz,name):this.__r(cy,cz,name);
},__q:function(dH,dI,name){var dP=qx.Bootstrap.firstUp(name);
var dO=dH.prototype;
var dQ=dI.themeable===true;
{};
var dR=[];
var dL=[];

if(dQ){var dJ=[];
var dN=[];
}var dM=K;
dR.push(dM);

if(dQ){dJ.push(dM);
}
if(dI.mode==R){var dK=bs;
dR.push(dK);

if(dQ){dJ.push(dK);
}}
for(var i=0,a=dI.group,l=a.length;i<l;i++){{};
dR.push(bA,this.$$method.set[a[i]],cd,i,cj);
dL.push(bA,this.$$method.reset[a[i]],bw);

if(dQ){{};
dJ.push(bA,this.$$method.setThemed[a[i]],cd,i,cj);
dN.push(bA,this.$$method.resetThemed[a[i]],bw);
}}this.$$method.set[name]=bT+dP;
dO[this.$$method.set[name]]=new Function(dR.join(bB));
this.$$method.reset[name]=bF+dP;
dO[this.$$method.reset[name]]=new Function(dL.join(bB));

if(dQ){this.$$method.setThemed[name]=bR+dP;
dO[this.$$method.setThemed[name]]=new Function(dJ.join(bB));
this.$$method.resetThemed[name]=bS+dP;
dO[this.$$method.resetThemed[name]]=new Function(dN.join(bB));
}},__r:function(dw,dx,name){var dz=qx.Bootstrap.firstUp(name);
var dB=dw.prototype;
{};
if(dx.dispose===undefined&&typeof dx.check===bY){dx.dispose=this.__p[dx.check]||qx.Bootstrap.classIsDefined(dx.check)||(qx.Interface&&qx.Interface.isDefined(dx.check));
}var dA=this.$$method;
var dy=this.$$store;
dy.runtime[name]=bb+name;
dy.user[name]=Y+name;
dy.theme[name]=bg+name;
dy.init[name]=bn+name;
dy.inherit[name]=T+name;
dy.useinit[name]=cu+name;
dA.get[name]=cf+dz;
dB[dA.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,dw,name,cf);
};
dA.set[name]=bT+dz;
dB[dA.set[name]]=function(cK){return qx.core.Property.executeOptimizedSetter(this,dw,name,bT,arguments);
};
dA.reset[name]=bF+dz;
dB[dA.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dw,name,bF);
};

if(dx.inheritable||dx.apply||dx.event||dx.deferredInit){dA.init[name]=bC+dz;
dB[dA.init[name]]=function(dE){return qx.core.Property.executeOptimizedSetter(this,dw,name,bC,arguments);
};
}
if(dx.inheritable){dA.refresh[name]=cb+dz;
dB[dA.refresh[name]]=function(cP){return qx.core.Property.executeOptimizedSetter(this,dw,name,cb,arguments);
};
}dA.setRuntime[name]=bD+dz;
dB[dA.setRuntime[name]]=function(q){return qx.core.Property.executeOptimizedSetter(this,dw,name,bD,arguments);
};
dA.resetRuntime[name]=bQ+dz;
dB[dA.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dw,name,bQ);
};

if(dx.themeable){dA.setThemed[name]=bR+dz;
dB[dA.setThemed[name]]=function(b){return qx.core.Property.executeOptimizedSetter(this,dw,name,bR,arguments);
};
dA.resetThemed[name]=bS+dz;
dB[dA.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dw,name,bS);
};
}
if(dx.check===bd){dB[U+dz]=new Function(ci+dA.set[name]+M+dA.get[name]+D);
dB[bu+dz]=new Function(ci+dA.get[name]+H);
}},__s:{0:bv,1:X,2:u,3:I,4:bo,5:w},error:function(dc,dd,de,df,dg){var dh=dc.constructor.classname;
var di=bO+de+z+dh+s+this.$$method[df][de]+br+dg+y;
throw new Error(di+(this.__s[dd]||"Unknown reason: "+dd));
},__t:function(dS,dT,name,dU,dV,dW){var dX=this.$$method[dU][name];
{dT[dX]=new Function(S,dV.join(bB));
};
if(qx.core.Variant.isSet(bi,ba)){dT[dX]=qx.core.Aspect.wrap(dS.classname+bl+dX,dT[dX],bH);
}qx.Bootstrap.setDisplayName(dT[dX],dS.classname+bc,dX);
if(dW===undefined){return dS[dX]();
}else{return dS[dX](dW[0]);
}},executeOptimizedGetter:function(c,d,name,e){var g=d.$$properties[name];
var j=d.prototype;
var f=[];
var h=this.$$store;
f.push(bW,h.runtime[name],bX);
f.push(bV,h.runtime[name],ca);

if(g.inheritable){f.push(by,h.inherit[name],bX);
f.push(bV,h.inherit[name],ca);
f.push(ch);
}f.push(bW,h.user[name],bX);
f.push(bV,h.user[name],ca);

if(g.themeable){f.push(by,h.theme[name],bX);
f.push(bV,h.theme[name],ca);
}
if(g.deferredInit&&g.init===undefined){f.push(by,h.init[name],bX);
f.push(bV,h.init[name],ca);
}f.push(ch);

if(g.init!==undefined){if(g.inheritable){f.push(bM,h.init[name],ca);

if(g.nullable){f.push(cr);
}else if(g.init!==undefined){f.push(bV,h.init[name],ca);
}else{f.push(W,name,ce,d.classname,cc);
}f.push(bN);
}else{f.push(bV,h.init[name],ca);
}}else if(g.inheritable||g.nullable){f.push(G);
}else{f.push(N,name,ce,d.classname,cc);
}return this.__t(c,j,name,e,f);
},executeOptimizedSetter:function(cA,cB,name,cC,cD){var cI=cB.$$properties[name];
var cH=cB.prototype;
var cF=[];
var cE=cC===bT||cC===bR||cC===bD||(cC===bC&&cI.init===undefined);
var cG=cI.apply||cI.event||cI.inheritable;
var cJ=this.__u(cC,name);
this.__v(cF,cI,name,cC,cE);

if(cE){this.__w(cF,cB,cI,name);
}
if(cG){this.__x(cF,cE,cJ,cC);
}
if(cI.inheritable){cF.push(cp);
}{};

if(!cG){this.__z(cF,name,cC,cE);
}else{this.__A(cF,cI,name,cC,cE);
}
if(cI.inheritable){this.__B(cF,cI,name,cC);
}else if(cG){this.__C(cF,cI,name,cC);
}
if(cG){this.__D(cF,cI,name);
if(cI.inheritable&&cH._getChildren){this.__E(cF,name);
}}if(cE){cF.push(V);
}return this.__t(cA,cH,name,cC,cF,cD);
},__u:function(dF,name){if(dF===bD||dF===bQ){var dG=this.$$store.runtime[name];
}else if(dF===bR||dF===bS){dG=this.$$store.theme[name];
}else if(dF===bC){dG=this.$$store.init[name];
}else{dG=this.$$store.user[name];
}return dG;
},__v:function(cQ,cR,name,cS,cT){{if(!cR.nullable||cR.check||cR.inheritable){cQ.push(bq);
}if(cS===bT){cQ.push(x,name,cs,cS,ct);
}};
},__w:function(cv,cw,cx,name){if(cx.transform){cv.push(cl,cx.transform,cg);
}if(cx.validate){if(typeof cx.validate===bY){cv.push(bE,cx.validate,cg);
}else if(cx.validate instanceof Function){cv.push(cw.classname,J,name);
cv.push(bG);
}}},__x:function(dr,ds,dt,du){var dv=(du===bF||du===bS||du===bQ);

if(ds){dr.push(bW,dt,bL);
}else if(dv){dr.push(bW,dt,co);
}},__y:undefined,__z:function(n,name,o,p){if(o===bD){n.push(bE,this.$$store.runtime[name],bz);
}else if(o===bQ){n.push(bW,this.$$store.runtime[name],bX);
n.push(bx,this.$$store.runtime[name],ca);
}else if(o===bT){n.push(bE,this.$$store.user[name],bz);
}else if(o===bF){n.push(bW,this.$$store.user[name],bX);
n.push(bx,this.$$store.user[name],ca);
}else if(o===bR){n.push(bE,this.$$store.theme[name],bz);
}else if(o===bS){n.push(bW,this.$$store.theme[name],bX);
n.push(bx,this.$$store.theme[name],ca);
}else if(o===bC&&p){n.push(bE,this.$$store.init[name],bz);
}},__A:function(dm,dn,name,dp,dq){if(dn.inheritable){dm.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{dm.push('var computed, old;');
}dm.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(dp==="setRuntime"){dm.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dp==="resetRuntime"){dm.push('delete this.',this.$$store.runtime[name],';');
dm.push('if(this.',this.$$store.user[name],'!==undefined)');
dm.push('computed=this.',this.$$store.user[name],';');
dm.push('else if(this.',this.$$store.theme[name],'!==undefined)');
dm.push('computed=this.',this.$$store.theme[name],';');
dm.push('else if(this.',this.$$store.init[name],'!==undefined){');
dm.push('computed=this.',this.$$store.init[name],';');
dm.push('this.',this.$$store.useinit[name],'=true;');
dm.push('}');
}else{dm.push('old=computed=this.',this.$$store.runtime[name],';');
if(dp==="set"){dm.push('this.',this.$$store.user[name],'=value;');
}else if(dp==="reset"){dm.push('delete this.',this.$$store.user[name],';');
}else if(dp==="setThemed"){dm.push('this.',this.$$store.theme[name],'=value;');
}else if(dp==="resetThemed"){dm.push('delete this.',this.$$store.theme[name],';');
}else if(dp==="init"&&dq){dm.push('this.',this.$$store.init[name],'=value;');
}}dm.push('}');
dm.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(dp==="set"){if(!dn.inheritable){dm.push('old=this.',this.$$store.user[name],';');
}dm.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dp==="reset"){if(!dn.inheritable){dm.push('old=this.',this.$$store.user[name],';');
}dm.push('delete this.',this.$$store.user[name],';');
dm.push('if(this.',this.$$store.runtime[name],'!==undefined)');
dm.push('computed=this.',this.$$store.runtime[name],';');
dm.push('if(this.',this.$$store.theme[name],'!==undefined)');
dm.push('computed=this.',this.$$store.theme[name],';');
dm.push('else if(this.',this.$$store.init[name],'!==undefined){');
dm.push('computed=this.',this.$$store.init[name],';');
dm.push('this.',this.$$store.useinit[name],'=true;');
dm.push('}');
}else{if(dp==="setRuntime"){dm.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dn.inheritable){dm.push('computed=this.',this.$$store.user[name],';');
}else{dm.push('old=computed=this.',this.$$store.user[name],';');
}if(dp==="setThemed"){dm.push('this.',this.$$store.theme[name],'=value;');
}else if(dp==="resetThemed"){dm.push('delete this.',this.$$store.theme[name],';');
}else if(dp==="init"&&dq){dm.push('this.',this.$$store.init[name],'=value;');
}}dm.push('}');
if(dn.themeable){dm.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!dn.inheritable){dm.push('old=this.',this.$$store.theme[name],';');
}
if(dp==="setRuntime"){dm.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dp==="set"){dm.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dp==="setThemed"){dm.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dp==="resetThemed"){dm.push('delete this.',this.$$store.theme[name],';');
dm.push('if(this.',this.$$store.init[name],'!==undefined){');
dm.push('computed=this.',this.$$store.init[name],';');
dm.push('this.',this.$$store.useinit[name],'=true;');
dm.push('}');
}else if(dp==="init"){if(dq){dm.push('this.',this.$$store.init[name],'=value;');
}dm.push('computed=this.',this.$$store.theme[name],';');
}else if(dp==="refresh"){dm.push('computed=this.',this.$$store.theme[name],';');
}dm.push('}');
}dm.push('else if(this.',this.$$store.useinit[name],'){');

if(!dn.inheritable){dm.push('old=this.',this.$$store.init[name],';');
}
if(dp==="init"){if(dq){dm.push('computed=this.',this.$$store.init[name],'=value;');
}else{dm.push('computed=this.',this.$$store.init[name],';');
}}else if(dp==="set"||dp==="setRuntime"||dp==="setThemed"||dp==="refresh"){dm.push('delete this.',this.$$store.useinit[name],';');

if(dp==="setRuntime"){dm.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dp==="set"){dm.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dp==="setThemed"){dm.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dp==="refresh"){dm.push('computed=this.',this.$$store.init[name],';');
}}dm.push('}');
if(dp==="set"||dp==="setRuntime"||dp==="setThemed"||dp==="init"){dm.push('else{');

if(dp==="setRuntime"){dm.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(dp==="set"){dm.push('computed=this.',this.$$store.user[name],'=value;');
}else if(dp==="setThemed"){dm.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(dp==="init"){if(dq){dm.push('computed=this.',this.$$store.init[name],'=value;');
}else{dm.push('computed=this.',this.$$store.init[name],';');
}dm.push('this.',this.$$store.useinit[name],'=true;');
}dm.push('}');
}},__B:function(dj,dk,name,dl){dj.push('if(computed===undefined||computed===inherit){');

if(dl==="refresh"){dj.push('computed=value;');
}else{dj.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}dj.push('if((computed===undefined||computed===inherit)&&');
dj.push('this.',this.$$store.init[name],'!==undefined&&');
dj.push('this.',this.$$store.init[name],'!==inherit){');
dj.push('computed=this.',this.$$store.init[name],';');
dj.push('this.',this.$$store.useinit[name],'=true;');
dj.push('}else{');
dj.push('delete this.',this.$$store.useinit[name],';}');
dj.push('}');
dj.push('if(old===computed)return value;');
dj.push('if(computed===inherit){');
dj.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
dj.push('}');
dj.push('else if(computed===undefined)');
dj.push('delete this.',this.$$store.inherit[name],';');
dj.push('else this.',this.$$store.inherit[name],'=computed;');
dj.push('var backup=computed;');
if(dk.init!==undefined&&dl!=="init"){dj.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{dj.push('if(old===undefined)old=null;');
}dj.push('if(computed===undefined||computed==inherit)computed=null;');
},__C:function(cL,cM,name,cN){if(cN!=="set"&&cN!=="setRuntime"&&cN!=="setThemed"){cL.push('if(computed===undefined)computed=null;');
}cL.push('if(old===computed)return value;');
if(cM.init!==undefined&&cN!=="init"){cL.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{cL.push('if(old===undefined)old=null;');
}},__D:function(k,m,name){if(m.apply){k.push('this.',m.apply,'(computed, old, "',name,'");');
}if(m.event){k.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",m.event,"')){","reg.fireEvent(this, '",m.event,"', qx.event.type.Data, [computed, old]",")}");
}},__E:function(cO,name){cO.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
cO.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
cO.push('}');
}}});
})();
(function(){var a="qx.bom.client.Engine";
qx.Bootstrap.define(a,{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,__X:function(){var b="unknown";
var f="0.0.0";
var e=window.navigator.userAgent;
var h=false;
var d=false;

if(window.opera&&Object.prototype.toString.call(window.opera)=="[object Opera]"){b="opera";
this.OPERA=true;
if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(e)){f=RegExp.$1+"."+RegExp.$2;

if(RegExp.$3!=""){f+="."+RegExp.$3;
}}else{d=true;
f="9.6.0";
}}else if(window.navigator.userAgent.indexOf("AppleWebKit/")!=-1){b="webkit";
this.WEBKIT=true;

if(/AppleWebKit\/([^ ]+)/.test(e)){f=RegExp.$1;
var g=RegExp("[^\\.0-9]").exec(f);

if(g){f=f.slice(0,g.index);
}}else{d=true;
f="525.26";
}}else if(window.controllers&&window.navigator.product==="Gecko"){b="gecko";
this.GECKO=true;
if(/rv\:([^\);]+)(\)|;)/.test(e)){f=RegExp.$1;
}else{d=true;
f="1.9.0.0";
}}else if(window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(e)){b="mshtml";
f=RegExp.$1;

if(document.documentMode){this.DOCUMENT_MODE=document.documentMode;
}if(f<8&&/Trident\/([^\);]+)(\)|;)/.test(e)){if(RegExp.$1==="4.0"){f="8.0";
}}this.MSHTML=true;
}else{var c=window.qxFail;

if(c&&typeof c==="function"){var b=c();

if(b.NAME&&b.FULLVERSION){b=b.NAME;
this[b.toUpperCase()]=true;
f=b.FULLVERSION;
}}else{h=true;
d=true;
f="1.9.0.0";
b="gecko";
this.GECKO=true;
window.alert("Unsupported client: "+e+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}this.UNKNOWN_ENGINE=h;
this.UNKNOWN_VERSION=d;
this.NAME=b;
this.FULLVERSION=f;
this.VERSION=parseFloat(f);
}},defer:function(i){i.__X();
}});
})();
(function(){var w="on",u="off",t="|",s="default",r="object",q="&",p="qx.aspects",o="$",n="qx.allowUrlVariants",m="qx.debug",e="qx.client",k="qx.dynlocale",h="webkit",d="qxvariant",c="opera",g=":",f="qx.core.Variant",j="mshtml",b="gecko";
qx.Bootstrap.define(f,{statics:{__Y:{},__ba:{},compilerIsSet:function(){return true;
},define:function(x,y,z){{};

if(!this.__Y[x]){this.__Y[x]={};
}else{}this.__Y[x].allowedValues=y;
this.__Y[x].defaultValue=z;
},get:function(A){var B=this.__Y[A];
{};

if(B.value!==undefined){return B.value;
}return B.defaultValue;
},__bb:function(){if(window.qxvariants){for(var a in qxvariants){{};

if(!this.__Y[a]){this.__Y[a]={};
}this.__Y[a].value=qxvariants[a];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(Q){}this.__bc(this.__Y);
}},__bc:function(){if(qx.core.Setting.get(n)!=true){return;
}var N=document.location.search.slice(1).split(q);

for(var i=0;i<N.length;i++){var O=N[i].split(g);

if(O.length!=3||O[0]!=d){continue;
}var P=O[1];

if(!this.__Y[P]){this.__Y[P]={};
}this.__Y[P].value=decodeURIComponent(O[2]);
}},select:function(J,K){{};

for(var L in K){if(this.isSet(J,L)){return K[L];
}}
if(K[s]!==undefined){return K[s];
}{};
},isSet:function(E,F){var G=E+o+F;

if(this.__ba[G]!==undefined){return this.__ba[G];
}var I=false;
if(F.indexOf(t)<0){I=this.get(E)===F;
}else{var H=F.split(t);

for(var i=0,l=H.length;i<l;i++){if(this.get(E)===H[i]){I=true;
break;
}}}this.__ba[G]=I;
return I;
},__bd:function(v){return typeof v===r&&v!==null&&v instanceof Array;
},__be:function(v){return typeof v===r&&v!==null&&!(v instanceof Array);
},__bf:function(C,D){for(var i=0,l=C.length;i<l;i++){if(C[i]==D){return true;
}}return false;
}},defer:function(M){M.define(e,[b,j,c,h],qx.bom.client.Engine.NAME);
M.define(m,[w,u],w);
M.define(p,[w,u],u);
M.define(k,[w,u],w);
M.__bb();
}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__wk:[],wrap:function(j,k,l){var q=[];
var m=[];
var p=this.__wk;
var o;

for(var i=0;i<p.length;i++){o=p[i];

if((o.type==null||l==o.type||o.type==b)&&(o.name==null||j.match(o.name))){o.pos==-1?q.push(o.fcn):m.push(o.fcn);
}}
if(q.length===0&&m.length===0){return k;
}var n=function(){for(var i=0;i<q.length;i++){q[i].call(this,j,k,l,arguments);
}var h=k.apply(this,arguments);

for(var i=0;i<m.length;i++){m[i].call(this,j,k,l,arguments,h);
}return h;
};

if(l!==a){n.self=k.self;
n.base=k.base;
}k.wrapper=n;
n.original=k;
return n;
},addAdvice:function(e,f,g,name){this.__wk.push({fcn:e,pos:f===c?-1:1,type:g,name:name});
}}});
})();
(function(){var bp="static",bo="[Class ",bn="]",bm="qx.aspects",bl="extend",bk="qx.Class",bj=".",bi="on";
qx.Bootstrap.define(bk,{statics:{define:function(name,bE){if(!bE){var bE={};
}if(bE.include&&!(bE.include instanceof Array)){bE.include=[bE.include];
}if(bE.implement&&!(bE.implement instanceof Array)){bE.implement=[bE.implement];
}if(!bE.hasOwnProperty(bl)&&!bE.type){bE.type=bp;
}{};
var bG=this.__J(name,bE.type,bE.extend,bE.statics,bE.construct,bE.destruct);
if(bE.extend){if(bE.properties){this.__L(bG,bE.properties,true);
}if(bE.members){this.__N(bG,bE.members,true,true,false);
}if(bE.events){this.__K(bG,bE.events,true);
}if(bE.include){for(var i=0,l=bE.include.length;i<l;i++){this.__Q(bG,bE.include[i],false);
}}}if(bE.settings){for(var bF in bE.settings){qx.core.Setting.define(bF,bE.settings[bF]);
}}if(bE.variants){for(var bF in bE.variants){qx.core.Variant.define(bF,bE.variants[bF].allowedValues,bE.variants[bF].defaultValue);
}}if(bE.implement){for(var i=0,l=bE.implement.length;i<l;i++){this.__P(bG,bE.implement[i]);
}}{};
if(bE.defer){bE.defer.self=bG;
bE.defer(bG,bG.prototype,{add:function(name,s){var t={};
t[name]=s;
qx.Class.__L(bG,t,true);
}});
}return bG;
},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(c,d){{};
qx.Class.__Q(c,d,false);
},patch:function(bu,bv){{};
qx.Class.__Q(bu,bv,true);
},isSubClassOf:function(ba,bb){if(!ba){return false;
}
if(ba==bb){return true;
}
if(ba.prototype instanceof bb){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(bc){var bd=[];

while(bc){if(bc.$$properties){bd.push.apply(bd,qx.Bootstrap.getKeys(bc.$$properties));
}bc=bc.superclass;
}return bd;
},getByProperty:function(bN,name){while(bN){if(bN.$$properties&&bN.$$properties[name]){return bN;
}bN=bN.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(u,v){return u.$$includes&&u.$$includes.indexOf(v)!==-1;
},getByMixin:function(D,E){var F,i,l;

while(D){if(D.$$includes){F=D.$$flatIncludes;

for(i=0,l=F.length;i<l;i++){if(F[i]===E){return D;
}}}D=D.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(P,Q){return !!this.getByMixin(P,Q);
},hasOwnInterface:function(bI,bJ){return bI.$$implements&&bI.$$implements.indexOf(bJ)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(y){var z=[];

while(y){if(y.$$implements){z.push.apply(z,y.$$flatImplements);
}y=y.superclass;
}return z;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(A,B){var C=A.constructor;

if(this.hasInterface(C,B)){return true;
}
try{qx.Interface.assertObject(A,B);
return true;
}catch(bH){}
try{qx.Interface.assert(C,B,false);
return true;
}catch(b){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return bo+this.classname+bn;
},$$registry:qx.Bootstrap.$$registry,__F:null,__G:null,__H:function(){},__I:function(){},__J:function(name,e,f,g,h,j){var p;

if(!f&&qx.core.Variant.isSet("qx.aspects","off")){p=g||{};
qx.Bootstrap.setDisplayNames(p,name);
}else{p={};

if(f){if(!h){h=this.__R();
}p=this.__T(h,name,e);
qx.Bootstrap.setDisplayName(h,name,"constructor");
}if(g){qx.Bootstrap.setDisplayNames(g,name);
var q;

for(var i=0,a=qx.Bootstrap.getKeys(g),l=a.length;i<l;i++){q=a[i];
var m=g[q];

if(qx.core.Variant.isSet("qx.aspects","on")){if(m instanceof Function){m=qx.core.Aspect.wrap(name+"."+q,m,"static");
}p[q]=m;
}else{p[q]=m;
}}}}var o=qx.Bootstrap.createNamespace(name,p,false);
p.name=p.classname=name;
p.basename=o;
p.$$type="Class";

if(e){p.$$classtype=e;
}if(!p.hasOwnProperty("toString")){p.toString=this.genericToString;
}
if(f){var r=f.prototype;
var k=this.__S();
k.prototype=r;
var n=new k;
p.prototype=n;
n.name=n.classname=name;
n.basename=o;
h.base=p.superclass=f;
h.self=p.constructor=n.constructor=p;
if(j){if(qx.core.Variant.isSet("qx.aspects","on")){j=qx.core.Aspect.wrap(name,j,"destructor");
}p.$$destructor=j;
qx.Bootstrap.setDisplayName(j,name,"destruct");
}}this.$$registry[name]=p;
return p;
},__K:function(be,bf,bg){var bh,bh;
{};

if(be.$$events){for(var bh in bf){be.$$events[bh]=bf[bh];
}}else{be.$$events=bf;
}},__L:function(U,V,W){var Y;

if(W===undefined){W=false;
}var X=!!U.$$propertiesAttached;

for(var name in V){Y=V[name];
{};
Y.name=name;
if(!Y.refine){if(U.$$properties===undefined){U.$$properties={};
}U.$$properties[name]=Y;
}if(Y.init!==undefined){U.prototype["$$init_"+name]=Y.init;
}if(Y.event!==undefined){var event={};
event[Y.event]="qx.event.type.Data";
this.__K(U,event,W);
}if(Y.inheritable){qx.core.Property.$$inheritable[name]=true;
}if(X){qx.core.Property.attachMethods(U,name,Y);
}}},__M:null,__N:function(bw,bx,by,bz,bA){var bB=bw.prototype;
var bD,bC;
qx.Bootstrap.setDisplayNames(bx,bw.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(bx),l=a.length;i<l;i++){bD=a[i];
bC=bx[bD];
{};
if(bz!==false&&bC instanceof Function&&bC.$$type==null){if(bA==true){bC=this.__O(bC,bB[bD]);
}else{if(bB[bD]){bC.base=bB[bD];
}bC.self=bw;
}
if(qx.core.Variant.isSet("qx.aspects","on")){bC=qx.core.Aspect.wrap(bw.classname+"."+bD,bC,"member");
}}bB[bD]=bC;
}},__O:function(w,x){if(x){return function(){var bP=w.base;
w.base=x;
var bO=w.apply(this,arguments);
w.base=bP;
return bO;
};
}else{return w;
}},__P:function(br,bs){{};
var bt=qx.Interface.flatten([bs]);

if(br.$$implements){br.$$implements.push(bs);
br.$$flatImplements.push.apply(br.$$flatImplements,bt);
}else{br.$$implements=[bs];
br.$$flatImplements=bt;
}},__Q:function(K,L,M){{};

if(this.hasMixin(K,L)){return;
}var O=qx.Mixin.flatten([L]);
var N;

for(var i=0,l=O.length;i<l;i++){N=O[i];
if(N.$$events){this.__K(K,N.$$events,M);
}if(N.$$properties){this.__L(K,N.$$properties,M);
}if(N.$$members){this.__N(K,N.$$members,M,M,M);
}}if(K.$$includes){K.$$includes.push(L);
K.$$flatIncludes.push.apply(K.$$flatIncludes,O);
}else{K.$$includes=[L];
K.$$flatIncludes=O;
}},__R:function(){function bq(){arguments.callee.base.apply(this,arguments);
}return bq;
},__S:function(){return function(){};
},__T:function(G,name,H){var J=function(){var T=arguments.callee.constructor;
{};
if(!T.$$propertiesAttached){qx.core.Property.attach(T);
}var S=T.$$original.apply(this,arguments);
if(T.$$includes){var R=T.$$flatIncludes;

for(var i=0,l=R.length;i<l;i++){if(R[i].$$constructor){R[i].$$constructor.apply(this,arguments);
}}}if(this.classname===name.classname){this.$$initialized=true;
}return S;
};

if(qx.core.Variant.isSet("qx.aspects","on")){var I=qx.core.Aspect.wrap(name,J,"constructor");
J.$$original=G;
J.constructor=I;
J=I;
}if(H==="singleton"){J.getInstance=this.getInstance;
}J.$$original=G;
G.wrapper=J;
return J;
}},defer:function(){if(qx.core.Variant.isSet(bm,bi)){for(var bK in qx.Bootstrap.$$registry){var bL=qx.Bootstrap.$$registry[bK];

for(var bM in bL){if(bL[bM] instanceof Function){bL[bM]=qx.core.Aspect.wrap(bK+bj+bM,bL[bM],bp);
}}}}}});
})();
(function(){var d="$$hash",c="qx.core.ObjectRegistry";
qx.Class.define(c,{statics:{inShutDown:false,__U:{},__V:0,__W:[],register:function(p){var s=this.__U;

if(!s){return;
}var r=p.$$hash;

if(r==null){var q=this.__W;

if(q.length>0){r=q.pop();
}else{r=(this.__V++).toString(36);
}p.$$hash=r;
}{};
s[r]=p;
},unregister:function(e){var f=e.$$hash;

if(f==null){return;
}var g=this.__U;

if(g&&g[f]){delete g[f];
this.__W.push(f);
}try{delete e.$$hash;
}catch(t){if(e.removeAttribute){e.removeAttribute(d);
}}},toHashCode:function(k){{};
var n=k.$$hash;

if(n!=null){return n;
}var m=this.__W;

if(m.length>0){n=m.pop();
}else{n=(this.__V++).toString(36);
}return k.$$hash=n;
},clearHashCode:function(h){{};
var j=h.$$hash;

if(j!=null){this.__W.push(j);
try{delete h.$$hash;
}catch(z){if(h.removeAttribute){h.removeAttribute(d);
}}}},fromHashCode:function(u){return this.__U[u]||null;
},shutdown:function(){this.inShutDown=true;
var w=this.__U;
var y=[];

for(var x in w){y.push(x);
}y.sort(function(a,b){return parseInt(b,36)-parseInt(a,36);
});
var v,i=0,l=y.length;

while(true){try{for(;i<l;i++){x=y[i];
v=w[x];

if(v&&v.dispose){v.dispose();
}}}catch(o){qx.Bootstrap.error(this,"Could not dispose object "+v.toString()+": "+o);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__U;
},getRegistry:function(){return this.__U;
}}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(c,d,e,f){return qx.data.SingleValueBinding.bind(this,c,d,e,f);
},removeBinding:function(b){qx.data.SingleValueBinding.removeBindingFromObject(this,b);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var l="qx.client",k="on",j="function",i="mousedown",h="qx.bom.Event",g="return;",f="mouseover",d="HTMLEvents";
qx.Class.define(h,{statics:{addNativeListener:qx.core.Variant.select(l,{"mshtml":function(a,b,c){a.attachEvent(k+b,c);
},"default":function(y,z,A){y.addEventListener(z,A,false);
}}),removeNativeListener:qx.core.Variant.select(l,{"mshtml":function(B,C,D){try{B.detachEvent(k+C,D);
}catch(e){if(e.number!==-2146828218){throw e;
}}},"default":function(p,q,r){p.removeEventListener(q,r,false);
}}),getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:qx.core.Variant.select(l,{"mshtml":function(e){if(e.type===f){return e.fromEvent;
}else{return e.toElement;
}},"gecko":function(e){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}return e.relatedTarget;
},"default":function(e){return e.relatedTarget;
}}),preventDefault:qx.core.Variant.select(l,{"gecko":function(e){if(qx.bom.client.Engine.VERSION>=1.9&&e.type==i&&e.button==2){return;
}e.preventDefault();
if(qx.bom.client.Engine.VERSION<1.9){try{e.keyCode=0;
}catch(t){}}},"mshtml":function(e){try{e.keyCode=0;
}catch(s){}e.returnValue=false;
},"default":function(e){e.preventDefault();
}}),stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}e.cancelBubble=true;
},fire:function(m,n){if(document.createEventObject){var o=document.createEventObject();
return m.fireEvent(k+n,o);
}else{var o=document.createEvent(d);
o.initEvent(n,true,true);
return !m.dispatchEvent(o);
}},supportsEvent:qx.core.Variant.select(l,{"webkit":function(E,F){return E.hasOwnProperty(k+F);
},"default":function(u,v){var w=k+v;
var x=(w in u);

if(!x){x=typeof u[w]==j;

if(!x&&u.setAttribute){u.setAttribute(w,g);
x=typeof u[w]==j;
u.removeAttribute(w);
}}return x;
}})}});
})();
(function(){var C="|bubble",B="|capture",A="|",z="_",y="unload",x="UNKNOWN_",w="__bl",v="DOM_",u="c",t="__bk",q="WIN_",s="capture",r="qx.event.Manager",p="QX_";
qx.Class.define(r,{extend:Object,construct:function(W,X){this.__bg=W;
this.__bh=qx.core.ObjectRegistry.toHashCode(W);
this.__bi=X;
if(W.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(W,y,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(W,y,arguments.callee);
self.dispose();
}));
}this.__bj={};
this.__bk={};
this.__bl={};
this.__bm={};
},statics:{__bn:0,getNextUniqueId:function(){return (this.__bn++).toString(36);
}},members:{__bi:null,__bj:null,__bl:null,__bo:null,__bk:null,__bm:null,__bg:null,__bh:null,getWindow:function(){return this.__bg;
},getWindowId:function(){return this.__bh;
},getHandler:function(bk){var bl=this.__bk[bk.classname];

if(bl){return bl;
}return this.__bk[bk.classname]=new bk(this);
},getDispatcher:function(n){var o=this.__bl[n.classname];

if(o){return o;
}return this.__bl[n.classname]=new n(this,this.__bi);
},getListeners:function(bA,bB,bC){var bD=bA.$$hash||qx.core.ObjectRegistry.toHashCode(bA);
var bF=this.__bj[bD];

if(!bF){return null;
}var bG=bB+(bC?B:C);
var bE=bF[bG];
return bE?bE.concat():null;
},serializeListeners:function(D){var K=D.$$hash||qx.core.ObjectRegistry.toHashCode(D);
var M=this.__bj[K];
var I=[];

if(M){var G,L,E,H,J;

for(var F in M){G=F.indexOf(A);
L=F.substring(0,G);
E=F.charAt(G+1)==u;
H=M[F];

for(var i=0,l=H.length;i<l;i++){J=H[i];
I.push({self:J.context,handler:J.handler,type:L,capture:E});
}}}return I;
},toggleAttachedEvents:function(N,O){var T=N.$$hash||qx.core.ObjectRegistry.toHashCode(N);
var V=this.__bj[T];

if(V){var Q,U,P,R;

for(var S in V){Q=S.indexOf(A);
U=S.substring(0,Q);
P=S.charCodeAt(Q+1)===99;
R=V[S];

if(O){this.__bp(N,U,P);
}else{this.__bq(N,U,P);
}}}},hasListener:function(ck,cl,cm){{};
var cn=ck.$$hash||qx.core.ObjectRegistry.toHashCode(ck);
var cp=this.__bj[cn];

if(!cp){return false;
}var cq=cl+(cm?B:C);
var co=cp[cq];
return co&&co.length>0;
},importListeners:function(bH,bI){{};
var bO=bH.$$hash||qx.core.ObjectRegistry.toHashCode(bH);
var bP=this.__bj[bO]={};
var bL=qx.event.Manager;

for(var bJ in bI){var bM=bI[bJ];
var bN=bM.type+(bM.capture?B:C);
var bK=bP[bN];

if(!bK){bK=bP[bN]=[];
this.__bp(bH,bM.type,bM.capture);
}bK.push({handler:bM.listener,context:bM.self,unique:bM.unique||(bL.__bn++).toString(36)});
}},addListener:function(a,b,c,self,d){var h;
{};
var j=a.$$hash||qx.core.ObjectRegistry.toHashCode(a);
var m=this.__bj[j];

if(!m){m=this.__bj[j]={};
}var g=b+(d?B:C);
var f=m[g];

if(!f){f=m[g]=[];
}if(f.length===0){this.__bp(a,b,d);
}var k=(qx.event.Manager.__bn++).toString(36);
var e={handler:c,context:self,unique:k};
f.push(e);
return g+A+k;
},findHandler:function(cr,cs){var cC=false,cv=false,cD=false;
var cB;

if(cr.nodeType===1){cC=true;
cB=v+cr.tagName.toLowerCase()+z+cs;
}else if(cr==this.__bg){cv=true;
cB=q+cs;
}else if(cr.classname){cD=true;
cB=p+cr.classname+z+cs;
}else{cB=x+cr+z+cs;
}var cx=this.__bm;

if(cx[cB]){return cx[cB];
}var cA=this.__bi.getHandlers();
var cw=qx.event.IEventHandler;
var cy,cz,cu,ct;

for(var i=0,l=cA.length;i<l;i++){cy=cA[i];
cu=cy.SUPPORTED_TYPES;

if(cu&&!cu[cs]){continue;
}ct=cy.TARGET_CHECK;

if(ct){if(!cC&&ct===cw.TARGET_DOMNODE){continue;
}else if(!cv&&ct===cw.TARGET_WINDOW){continue;
}else if(!cD&&ct===cw.TARGET_OBJECT){continue;
}}cz=this.getHandler(cA[i]);

if(cy.IGNORE_CAN_HANDLE||cz.canHandleEvent(cr,cs)){cx[cB]=cz;
return cz;
}}return null;
},__bp:function(bw,bx,by){var bz=this.findHandler(bw,bx);

if(bz){bz.registerEvent(bw,bx,by);
return;
}{};
},removeListener:function(bm,bn,bo,self,bp){var bt;
{};
var bu=bm.$$hash||qx.core.ObjectRegistry.toHashCode(bm);
var bv=this.__bj[bu];

if(!bv){return false;
}var bq=bn+(bp?B:C);
var br=bv[bq];

if(!br){return false;
}var bs;

for(var i=0,l=br.length;i<l;i++){bs=br[i];

if(bs.handler===bo&&bs.context===self){qx.lang.Array.removeAt(br,i);

if(br.length==0){this.__bq(bm,bn,bp);
}return true;
}}return false;
},removeListenerById:function(bX,bY){var cf;
{};
var cd=bY.split(A);
var ci=cd[0];
var ca=cd[1].charCodeAt(0)==99;
var ch=cd[2];
var cg=bX.$$hash||qx.core.ObjectRegistry.toHashCode(bX);
var cj=this.__bj[cg];

if(!cj){return false;
}var ce=ci+(ca?B:C);
var cc=cj[ce];

if(!cc){return false;
}var cb;

for(var i=0,l=cc.length;i<l;i++){cb=cc[i];

if(cb.unique===ch){qx.lang.Array.removeAt(cc,i);

if(cc.length==0){this.__bq(bX,ci,ca);
}return true;
}}return false;
},removeAllListeners:function(bd){var bh=bd.$$hash||qx.core.ObjectRegistry.toHashCode(bd);
var bj=this.__bj[bh];

if(!bj){return false;
}var bf,bi,be;

for(var bg in bj){if(bj[bg].length>0){bf=bg.split(A);
bi=bf[0];
be=bf[1]===s;
this.__bq(bd,bi,be);
}}delete this.__bj[bh];
return true;
},__bq:function(Y,ba,bb){var bc=this.findHandler(Y,ba);

if(bc){bc.unregisterEvent(Y,ba,bb);
return;
}{};
},dispatchEvent:function(bQ,event){var bV;
{};
var bW=event.getType();

if(!event.getBubbles()&&!this.hasListener(bQ,bW)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(bQ);
}var bU=this.__bi.getDispatchers();
var bT;
var bS=false;

for(var i=0,l=bU.length;i<l;i++){bT=this.getDispatcher(bU[i]);
if(bT.canDispatchEvent(bQ,event,bW)){bT.dispatchEvent(bQ,event,bW);
bS=true;
break;
}}
if(!bS){qx.log.Logger.error(this,"No dispatcher can handle event of type "+bW+" on "+bQ);
return true;
}var bR=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !bR;
},dispose:function(){this.__bi.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,t);
qx.util.DisposeUtil.disposeMap(this,w);
this.__bj=this.__bg=this.__bo=null;
this.__bi=this.__bm=null;
}}});
})();
(function(){var e="qx.dom.Node",d="qx.client",c="";
qx.Class.define(e,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(q){return q.nodeType===
this.DOCUMENT?q:
q.ownerDocument||q.document;
},getWindow:qx.core.Variant.select(d,{"mshtml":function(g){if(g.nodeType==null){return g;
}if(g.nodeType!==this.DOCUMENT){g=g.ownerDocument;
}return g.parentWindow;
},"default":function(h){if(h.nodeType==null){return h;
}if(h.nodeType!==this.DOCUMENT){h=h.ownerDocument;
}return h.defaultView;
}}),getDocumentElement:function(j){return this.getDocument(j).documentElement;
},getBodyElement:function(f){return this.getDocument(f).body;
},isNode:function(t){return !!(t&&t.nodeType!=null);
},isElement:function(n){return !!(n&&n.nodeType===this.ELEMENT);
},isDocument:function(m){return !!(m&&m.nodeType===this.DOCUMENT);
},isText:function(r){return !!(r&&r.nodeType===this.TEXT);
},isWindow:function(b){return !!(b&&b.history&&b.location&&b.document);
},isNodeName:function(k,l){if(!l||!k||!k.nodeName){return false;
}return l.toLowerCase()==qx.dom.Node.getName(k);
},getName:function(s){if(!s||!s.nodeName){return null;
}return s.nodeName.toLowerCase();
},getText:function(o){if(!o||!o.nodeType){return null;
}
switch(o.nodeType){case 1:var i,a=[],p=o.childNodes,length=p.length;

for(i=0;i<length;i++){a[i]=this.getText(p[i]);
}return a.join(c);
case 2:return o.nodeValue;
break;
case 3:return o.nodeValue;
break;
}return null;
}}});
})();
(function(){var o="mshtml",n="qx.client",m="[object Array]",k="qx.lang.Array",j="qx",h="number",g="string";
qx.Class.define(k,{statics:{toArray:function(bd,be){return this.cast(bd,Array,be);
},cast:function(Y,ba,bb){if(Y.constructor===ba){return Y;
}
if(qx.Class.hasInterface(Y,qx.data.IListData)){var Y=Y.toArray();
}var bc=new ba;
if(qx.core.Variant.isSet(n,o)){if(Y.item){for(var i=bb||0,l=Y.length;i<l;i++){bc.push(Y[i]);
}return bc;
}}if(Object.prototype.toString.call(Y)===m&&bb==null){bc.push.apply(bc,Y);
}else{bc.push.apply(bc,Array.prototype.slice.call(Y,bb||0));
}return bc;
},fromArguments:function(J,K){return Array.prototype.slice.call(J,K||0);
},fromCollection:function(bh){if(qx.core.Variant.isSet(n,o)){if(bh.item){var bi=[];

for(var i=0,l=bh.length;i<l;i++){bi[i]=bh[i];
}return bi;
}}return Array.prototype.slice.call(bh,0);
},fromShortHand:function(R){var T=R.length;
var S=qx.lang.Array.clone(R);
switch(T){case 1:S[1]=S[2]=S[3]=S[0];
break;
case 2:S[2]=S[0];
case 3:S[3]=S[1];
}return S;
},clone:function(s){return s.concat();
},insertAt:function(G,H,i){G.splice(i,0,H);
return G;
},insertBefore:function(V,W,X){var i=V.indexOf(X);

if(i==-1){V.push(W);
}else{V.splice(i,0,W);
}return V;
},insertAfter:function(d,e,f){var i=d.indexOf(f);

if(i==-1||i==(d.length-1)){d.push(e);
}else{d.splice(i+1,0,e);
}return d;
},removeAt:function(p,i){return p.splice(i,1)[0];
},removeAll:function(I){I.length=0;
return this;
},append:function(b,c){{};
Array.prototype.push.apply(b,c);
return b;
},exclude:function(bj,bk){{};

for(var i=0,bm=bk.length,bl;i<bm;i++){bl=bj.indexOf(bk[i]);

if(bl!=-1){bj.splice(bl,1);
}}return bj;
},remove:function(q,r){var i=q.indexOf(r);

if(i!=-1){q.splice(i,1);
return r;
}},contains:function(bp,bq){return bp.indexOf(bq)!==-1;
},equals:function(bf,bg){var length=bf.length;

if(length!==bg.length){return false;
}
for(var i=0;i<length;i++){if(bf[i]!==bg[i]){return false;
}}return true;
},sum:function(bn){var bo=0;

for(var i=0,l=bn.length;i<l;i++){bo+=bn[i];
}return bo;
},max:function(O){{};
var i,Q=O.length,P=O[0];

for(i=1;i<Q;i++){if(O[i]>P){P=O[i];
}}return P===undefined?null:P;
},min:function(L){{};
var i,N=L.length,M=L[0];

for(i=1;i<N;i++){if(L[i]<M){M=L[i];
}}return M===undefined?null:M;
},unique:function(t){var D=[],v={},y={},A={};
var z,u=0;
var E=j+qx.lang.Date.now();
var w=false,C=false,F=false;
for(var i=0,B=t.length;i<B;i++){z=t[i];
if(z===null){if(!w){w=true;
D.push(z);
}}else if(z===undefined){}else if(z===false){if(!C){C=true;
D.push(z);
}}else if(z===true){if(!F){F=true;
D.push(z);
}}else if(typeof z===g){if(!v[z]){v[z]=1;
D.push(z);
}}else if(typeof z===h){if(!y[z]){y[z]=1;
D.push(z);
}}else{x=z[E];

if(x==null){x=z[E]=u++;
}
if(!A[x]){A[x]=z;
D.push(z);
}}}for(var x in A){try{delete A[x][E];
}catch(a){try{A[x][E]=null;
}catch(U){throw new Error("Cannot clean-up map entry doneObjects["+x+"]["+E+"]");
}}}return D;
}}});
})();
(function(){var C="()",B=".",A=".prototype.",z='anonymous()',y="qx.lang.Function",x=".constructor()";
qx.Class.define(y,{statics:{getCaller:function(i){return i.caller?i.caller.callee:i.callee.caller;
},getName:function(a){if(a.displayName){return a.displayName;
}
if(a.$$original||a.wrapper||a.classname){return a.classname+x;
}
if(a.$$mixin){for(var c in a.$$mixin.$$members){if(a.$$mixin.$$members[c]==a){return a.$$mixin.name+A+c+C;
}}for(var c in a.$$mixin){if(a.$$mixin[c]==a){return a.$$mixin.name+B+c+C;
}}}
if(a.self){var d=a.self.constructor;

if(d){for(var c in d.prototype){if(d.prototype[c]==a){return d.classname+A+c+C;
}}for(var c in d){if(d[c]==a){return d.classname+B+c+C;
}}}}var b=a.toString().match(/function\s*(\w*)\s*\(.*/);

if(b&&b.length>=1&&b[1]){return b[1]+C;
}return z;
},globalEval:function(h){if(window.execScript){return window.execScript(h);
}else{return eval.call(window,h);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(e,f){{};
if(!f){return e;
}if(!(f.self||f.args||f.delay!=null||f.periodical!=null||f.attempt)){return e;
}return function(event){{};
var G=qx.lang.Array.fromArguments(arguments);
if(f.args){G=f.args.concat(G);
}
if(f.delay||f.periodical){var F=qx.event.GlobalError.observeMethod(function(){return e.apply(f.self||this,G);
});

if(f.delay){return window.setTimeout(F,f.delay);
}
if(f.periodical){return window.setInterval(F,f.periodical);
}}else if(f.attempt){var H=false;

try{H=e.apply(f.self||this,G);
}catch(l){}return H;
}else{return e.apply(f.self||this,G);
}};
},bind:function(D,self,E){return this.create(D,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(j,k){return this.create(j,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(o,self,p){if(arguments.length<3){return function(event){return o.call(self||this,event||window.event);
};
}else{var q=qx.lang.Array.fromArguments(arguments,2);
return function(event){var g=[event||window.event];
g.push.apply(g,q);
o.apply(self||this,g);
};
}},attempt:function(m,self,n){return this.create(m,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(u,v,self,w){return this.create(u,{delay:v,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(r,s,self,t){return this.create(r,{periodical:s,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var i="qx.event.Registration";
qx.Class.define(i,{statics:{__br:{},getManager:function(M){if(M==null){{};
M=window;
}else if(M.nodeType){M=qx.dom.Node.getWindow(M);
}else if(!qx.dom.Node.isWindow(M)){M=window;
}var O=M.$$hash||qx.core.ObjectRegistry.toHashCode(M);
var N=this.__br[O];

if(!N){N=new qx.event.Manager(M,this);
this.__br[O]=N;
}return N;
},removeManager:function(s){var t=s.getWindowId();
delete this.__br[t];
},addListener:function(o,p,q,self,r){return this.getManager(o).addListener(o,p,q,self,r);
},removeListener:function(G,H,I,self,J){return this.getManager(G).removeListener(G,H,I,self,J);
},removeListenerById:function(P,Q){return this.getManager(P).removeListenerById(P,Q);
},removeAllListeners:function(v){return this.getManager(v).removeAllListeners(v);
},hasListener:function(C,D,E){return this.getManager(C).hasListener(C,D,E);
},serializeListeners:function(j){return this.getManager(j).serializeListeners(j);
},createEvent:function(k,l,m){{};
if(l==null){l=qx.event.type.Event;
}var n=qx.event.Pool.getInstance().getObject(l);

if(!n){return;
}m?n.init.apply(n,m):n.init();
if(k){n.setType(k);
}return n;
},dispatchEvent:function(u,event){return this.getManager(u).dispatchEvent(u,event);
},fireEvent:function(w,x,y,z){var A;
{};
var B=this.createEvent(x,y||null,z);
return this.getManager(w).dispatchEvent(w,B);
},fireNonBubblingEvent:function(c,d,e,f){{};
var g=this.getManager(c);

if(!g.hasListener(c,d,false)){return true;
}var h=this.createEvent(d,e||null,f);
return g.dispatchEvent(c,h);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__bs:[],addHandler:function(F){{};
this.__bs.push(F);
this.__bs.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__bs;
},__bt:[],addDispatcher:function(K,L){{};
this.__bt.push(K);
this.__bt.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__bt;
}}});
})();
(function(){var k=":",j="qx.client",h="anonymous",g="...",f="qx.dev.StackTrace",e="",d="\n",c="/source/class/",b=".";
qx.Class.define(f,{statics:{getStackTrace:qx.core.Variant.select(j,{"gecko":function(){try{throw new Error();
}catch(o){var w=this.getStackTraceFromError(o);
qx.lang.Array.removeAt(w,0);
var u=this.getStackTraceFromCaller(arguments);
var s=u.length>w.length?u:w;

for(var i=0;i<Math.min(u.length,w.length);i++){var t=u[i];

if(t.indexOf(h)>=0){continue;
}var A=t.split(k);

if(A.length!=2){continue;
}var y=A[0];
var r=A[1];
var q=w[i];
var B=q.split(k);
var x=B[0];
var p=B[1];

if(qx.Class.getByName(x)){var v=x;
}else{v=y;
}var z=v+k;

if(r){z+=r+k;
}z+=p;
s[i]=z;
}return s;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var l;

try{l.bar();
}catch(bc){var m=this.getStackTraceFromError(bc);
qx.lang.Array.removeAt(m,0);
return m;
}return [];
}}),getStackTraceFromCaller:qx.core.Variant.select(j,{"opera":function(n){return [];
},"default":function(H){var M=[];
var L=qx.lang.Function.getCaller(H);
var I={};

while(L){var J=qx.lang.Function.getName(L);
M.push(J);

try{L=L.caller;
}catch(a){break;
}
if(!L){break;
}var K=qx.core.ObjectRegistry.toHashCode(L);

if(I[K]){M.push(g);
break;
}I[K]=L;
}return M;
}}),getStackTraceFromError:qx.core.Variant.select(j,{"gecko":function(U){if(!U.stack){return [];
}var bb=/@(.+):(\d+)$/gm;
var V;
var W=[];

while((V=bb.exec(U.stack))!=null){var X=V[1];
var ba=V[2];
var Y=this.__bu(X);
W.push(Y+k+ba);
}return W;
},"webkit":function(G){if(G.sourceURL&&G.line){return [this.__bu(G.sourceURL)+k+G.line];
}else{return [];
}},"opera":function(N){if(N.message.indexOf("Backtrace:")<0){return [];
}var P=[];
var Q=qx.lang.String.trim(N.message.split("Backtrace:")[1]);
var R=Q.split(d);

for(var i=0;i<R.length;i++){var O=R[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(O&&O.length>=2){var T=O[1];
var S=this.__bu(O[2]);
P.push(S+k+T);
}}return P;
},"default":function(){return [];
}}),__bu:function(C){var F=c;
var D=C.indexOf(F);
var E=(D==-1)?C:C.substring(D+F.length).replace(/\//g,b).replace(/\.js$/,e);
return E;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(i){this.__bv=[];
this.setMaxMessages(i||50);
},members:{__bw:0,__bv:null,__bx:50,setMaxMessages:function(b){this.__bx=b;
this.clearHistory();
},getMaxMessages:function(){return this.__bx;
},process:function(g){var h=this.getMaxMessages();

if(this.__bv.length<h){this.__bv.push(g);
}else{this.__bv[this.__bw++]=g;

if(this.__bw>=h){this.__bw=0;
}}},getAllLogEvents:function(){return this.retrieveLogEvents(this.getMaxMessages());
},retrieveLogEvents:function(c){if(c>this.__bv.length){c=this.__bv.length;
}
if(this.__bv.length==this.getMaxMessages()){var e=this.__bw-1;
}else{e=this.__bv.length-1;
}var d=e-c+1;

if(d<0){d+=this.__bv.length;
}var f;

if(d<=e){f=this.__bv.slice(d,e+1);
}else{f=this.__bv.slice(d,this.__bv.length).concat(this.__bv.slice(0,e+1));
}return f;
},clearHistory:function(){this.__bv=[];
this.__bw=0;
}}});
})();
(function(){var bh="node",bg="error",bf="...(+",be="array",bd=")",bc="info",bb="instance",ba="string",Y="null",X="class",bC="number",bB="stringify",bA="]",bz="unknown",by="function",bx="boolean",bw="debug",bv="map",bu="undefined",bt="qx.log.Logger",bo=")}",bp="#",bm="warn",bn="document",bk="{...(",bl="[",bi="text[",bj="[...(",bq="\n",br=")]",bs="object";
qx.Class.define(bt,{statics:{__by:bw,setLevel:function(S){this.__by=S;
},getLevel:function(){return this.__by;
},setTreshold:function(bK){this.__bB.setMaxMessages(bK);
},getTreshold:function(){return this.__bB.getMaxMessages();
},__bz:{},__bA:0,register:function(D){if(D.$$id){return;
}var E=this.__bA++;
this.__bz[E]=D;
D.$$id=E;
var F=this.__bB.getAllLogEvents();

for(var i=0,l=F.length;i<l;i++){D.process(F[i]);
}},unregister:function(c){var d=c.$$id;

if(d==null){return;
}delete this.__bz[d];
delete c.$$id;
},debug:function(bI,bJ){qx.log.Logger.__bD(bw,arguments);
},info:function(bD,bE){qx.log.Logger.__bD(bc,arguments);
},warn:function(Q,R){qx.log.Logger.__bD(bm,arguments);
},error:function(e,f){qx.log.Logger.__bD(bg,arguments);
},trace:function(G){qx.log.Logger.__bD(bc,[G,qx.dev.StackTrace.getStackTrace().join(bq)]);
},deprecatedMethodWarning:function(A,B){var C;
{};
},deprecatedClassWarning:function(g,h){var j;
{};
},deprecatedEventWarning:function(bF,event,bG){var bH;
{};
},deprecatedMixinWarning:function(n,o){var p;
{};
},deprecatedConstantWarning:function(T,U,V){var self,W;
{};
},clear:function(){this.__bB.clearHistory();
},__bB:new qx.log.appender.RingBuffer(50),__bC:{debug:0,info:1,warn:2,error:3},__bD:function(q,r){var w=this.__bC;

if(w[q]<w[this.__by]){return;
}var t=r.length<2?null:r[0];
var v=t?1:0;
var s=[];

for(var i=v,l=r.length;i<l;i++){s.push(this.__bF(r[i],true));
}var x=new Date;
var y={time:x,offset:x-qx.Bootstrap.LOADSTART,level:q,items:s,win:window};
if(t){if(t instanceof qx.core.Object){y.object=t.$$hash;
}else if(t.$$type){y.clazz=t;
}}this.__bB.process(y);
var z=this.__bz;

for(var u in z){z[u].process(y);
}},__bE:function(k){if(k===undefined){return bu;
}else if(k===null){return Y;
}
if(k.$$type){return X;
}var m=typeof k;

if(m===by||m==ba||m===bC||m===bx){return m;
}else if(m===bs){if(k.nodeType){return bh;
}else if(k.classname){return bb;
}else if(k instanceof Array){return be;
}else if(k instanceof Error){return bg;
}else{return bv;
}}
if(k.toString){return bB;
}return bz;
},__bF:function(H,I){var P=this.__bE(H);
var L=bz;
var K=[];

switch(P){case Y:case bu:L=P;
break;
case ba:case bC:case bx:L=H;
break;
case bh:if(H.nodeType===9){L=bn;
}else if(H.nodeType===3){L=bi+H.nodeValue+bA;
}else if(H.nodeType===1){L=H.nodeName.toLowerCase();

if(H.id){L+=bp+H.id;
}}else{L=bh;
}break;
case by:L=qx.lang.Function.getName(H)||P;
break;
case bb:L=H.basename+bl+H.$$hash+bA;
break;
case X:case bB:L=H.toString();
break;
case bg:K=qx.dev.StackTrace.getStackTraceFromError(H);
L=H.toString();
break;
case be:if(I){L=[];

for(var i=0,l=H.length;i<l;i++){if(L.length>20){L.push(bf+(l-i)+bd);
break;
}L.push(this.__bF(H[i],false));
}}else{L=bj+H.length+br;
}break;
case bv:if(I){var J;
var O=[];

for(var N in H){O.push(N);
}O.sort();
L=[];

for(var i=0,l=O.length;i<l;i++){if(L.length>20){L.push(bf+(l-i)+bd);
break;
}N=O[i];
J=this.__bF(H[N],false);
J.key=N;
L.push(J);
}}else{var M=0;

for(var N in H){M++;
}L=bk+M+bo;
}break;
}return {type:P,text:L,trace:K};
}},defer:function(a){var b=qx.Bootstrap.$$logs;

for(var i=0;i<b.length;i++){this.__bD(b[i][0],b[i][1]);
}qx.Bootstrap.debug=a.debug;
qx.Bootstrap.info=a.info;
qx.Bootstrap.warn=a.warn;
qx.Bootstrap.error=a.error;
qx.Bootstrap.trace=a.trace;
}});
})();
(function(){var bo="set",bn="get",bm="reset",bl="qx.core.Object",bk="]",bj="[",bi="$$user_",bh="Object";
qx.Class.define(bl,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:bh},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+bj+this.$$hash+bk;
},base:function(V,W){{};

if(arguments.length===1){return V.callee.base.call(this);
}else{return V.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(p){return p.callee.self;
},clone:function(){var h=this.constructor;
var g=new h;
var k=qx.Class.getProperties(h);
var j=qx.core.Property.$$store.user;
var m=qx.core.Property.$$method.set;
var name;
for(var i=0,l=k.length;i<l;i++){name=k[i];

if(this.hasOwnProperty(j[name])){g[m[name]](this[j[name]]);
}}return g;
},set:function(B,C){var E=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(B)){if(!this[E[B]]){if(this[bo+qx.Bootstrap.firstUp(B)]!=undefined){this[bo+qx.Bootstrap.firstUp(B)](C);
return;
}{};
}return this[E[B]](C);
}else{for(var D in B){if(!this[E[D]]){if(this[bo+qx.Bootstrap.firstUp(D)]!=undefined){this[bo+qx.Bootstrap.firstUp(D)](B[D]);
continue;
}{};
}this[E[D]](B[D]);
}return this;
}},get:function(r){var s=qx.core.Property.$$method.get;

if(!this[s[r]]){if(this[bn+qx.Bootstrap.firstUp(r)]!=undefined){return this[bn+qx.Bootstrap.firstUp(r)]();
}{};
}return this[s[r]]();
},reset:function(a){var b=qx.core.Property.$$method.reset;

if(!this[b[a]]){if(this[bm+qx.Bootstrap.firstUp(a)]!=undefined){this[bm+qx.Bootstrap.firstUp(a)]();
return;
}{};
}this[b[a]]();
},__bG:qx.event.Registration,addListener:function(bu,bv,self,bw){if(!this.$$disposed){return this.__bG.addListener(this,bu,bv,self,bw);
}return null;
},addListenerOnce:function(L,M,self,N){var O=function(e){M.call(self||this,e);
this.removeListener(L,O,this,N);
};
return this.addListener(L,O,this,N);
},removeListener:function(t,u,self,v){if(!this.$$disposed){return this.__bG.removeListener(this,t,u,self,v);
}return false;
},removeListenerById:function(f){if(!this.$$disposed){return this.__bG.removeListenerById(this,f);
}return false;
},hasListener:function(by,bz){return this.__bG.hasListener(this,by,bz);
},dispatchEvent:function(bx){if(!this.$$disposed){return this.__bG.dispatchEvent(this,bx);
}return true;
},fireEvent:function(bp,bq,br){if(!this.$$disposed){return this.__bG.fireEvent(this,bp,bq,br);
}return true;
},fireNonBubblingEvent:function(S,T,U){if(!this.$$disposed){return this.__bG.fireNonBubblingEvent(this,S,T,U);
}return true;
},fireDataEvent:function(w,x,y,z){if(!this.$$disposed){if(y===undefined){y=null;
}return this.__bG.fireNonBubblingEvent(this,w,qx.event.type.Data,[x,y,!!z]);
}return true;
},__bH:null,setUserData:function(c,d){if(!this.__bH){this.__bH={};
}this.__bH[c]=d;
},getUserData:function(bs){if(!this.__bH){return null;
}var bt=this.__bH[bs];
return bt===undefined?null:bt;
},__bI:qx.log.Logger,debug:function(A){this.__bI.debug(this,A);
},info:function(P){this.__bI.info(this,P);
},warn:function(q){this.__bI.warn(this,q);
},error:function(K){this.__bI.error(this,K);
},trace:function(){this.__bI.trace(this);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var I,G;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
{};
var H=this.constructor;
var F;

while(H.superclass){if(H.$$destructor){H.$$destructor.call(this);
}if(H.$$includes){F=H.$$flatIncludes;

for(var i=0,l=F.length;i<l;i++){if(F[i].$$destructor){F[i].$$destructor.call(this);
}}}H=H.superclass;
}var J=qx.Class.getProperties(this.constructor);

for(var i=0,l=J.length;i<l;i++){delete this[bi+J[i]];
}{};
},_disposeFields:function(R){qx.Bootstrap.warn("Don't use '_disposeFields' - instead assign directly to 'null'");
qx.util.DisposeUtil.disposeFields(this,arguments);
},_disposeObjects:function(Q){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeArray:function(o){qx.util.DisposeUtil.disposeArray(this,o);
},_disposeMap:function(n){qx.util.DisposeUtil.disposeMap(this,n);
}},settings:{"qx.disposerDebugLevel":0},defer:function(X){{};
},destruct:function(){qx.event.Registration.removeAllListeners(this);
qx.core.ObjectRegistry.unregister(this);
this.__bH=null;
var bb=this.constructor;
var bf;
var bg=qx.core.Property.$$store;
var bd=bg.user;
var be=bg.theme;
var Y=bg.inherit;
var bc=bg.useinit;
var ba=bg.init;

while(bb){bf=bb.$$properties;

if(bf){for(var name in bf){if(bf[name].dispose){this[bd[name]]=this[be[name]]=this[Y[name]]=this[bc[name]]=this[ba[name]]=undefined;
}}}bb=bb.superclass;
}}});
})();
(function(){var b="abstract",a="qx.ui.layout.Abstract";
qx.Class.define(a,{type:b,extend:qx.core.Object,members:{__ie:null,_invalidChildrenCache:null,__if:null,invalidateLayoutCache:function(){this.__ie=null;
},renderLayout:function(d,e){this.warn("Missing renderLayout() implementation!");
},getSizeHint:function(){if(this.__ie){return this.__ie;
}return this.__ie=this._computeSizeHint();
},hasHeightForWidth:function(){return false;
},getHeightForWidth:function(f){this.warn("Missing getHeightForWidth() implementation!");
return null;
},_computeSizeHint:function(){return null;
},invalidateChildrenCache:function(){this._invalidChildrenCache=true;
},verifyLayoutProperty:null,_clearSeparators:function(){var c=this.__if;

if(c instanceof qx.ui.core.LayoutItem){c.clearSeparators();
}},_renderSeparator:function(g,h){this.__if.renderSeparator(g,h);
},connectToWidget:function(i){if(i&&this.__if){throw new Error("It is not possible to manually set the connected widget.");
}this.__if=i;
this.invalidateChildrenCache();
},_getWidget:function(){return this.__if;
},_applyLayoutChange:function(){if(this.__if){this.__if.scheduleLayoutUpdate();
}},_getLayoutChildren:function(){return this.__if.getLayoutChildren();
}},destruct:function(){this.__if=this.__ie=null;
}});
})();
(function(){var k="bottom",j="_applyLayoutChange",h="top",g="left",f="right",e="middle",d="center",c="qx.ui.layout.Atom",b="Integer",a="Boolean";
qx.Class.define(c,{extend:qx.ui.layout.Abstract,properties:{gap:{check:b,init:4,apply:j},iconPosition:{check:[g,h,f,k],init:g,apply:j},center:{check:a,init:false,apply:j}},members:{verifyLayoutProperty:null,renderLayout:function(l,m){var v=qx.ui.layout.Util;
var o=this.getIconPosition();
var r=this._getLayoutChildren();
var length=r.length;
var F,top,w,p;
var B,u;
var z=this.getGap();
var E=this.getCenter();
if(o===k||o===f){var x=length-1;
var s=-1;
var q=-1;
}else{var x=0;
var s=length;
var q=1;
}if(o==h||o==k){if(E){var A=0;

for(var i=x;i!=s;i+=q){p=r[i].getSizeHint().height;

if(p>0){A+=p;

if(i!=x){A+=z;
}}}top=Math.round((m-A)/2);
}else{top=0;
}
for(var i=x;i!=s;i+=q){B=r[i];
u=B.getSizeHint();
w=Math.min(u.maxWidth,Math.max(l,u.minWidth));
p=u.height;
F=v.computeHorizontalAlignOffset(d,w,l);
B.renderLayout(F,top,w,p);
if(p>0){top+=p+z;
}}}else{var t=l;
var n=null;
var D=0;

for(var i=x;i!=s;i+=q){B=r[i];
w=B.getSizeHint().width;

if(w>0){if(!n&&B instanceof qx.ui.basic.Label){n=B;
}else{t-=w;
}D++;
}}
if(D>1){var C=(D-1)*z;
t-=C;
}
if(n){var u=n.getSizeHint();
var y=Math.max(u.minWidth,Math.min(t,u.maxWidth));
t-=y;
}
if(E&&t>0){F=Math.round(t/2);
}else{F=0;
}
for(var i=x;i!=s;i+=q){B=r[i];
u=B.getSizeHint();
p=Math.min(u.maxHeight,Math.max(m,u.minHeight));

if(B===n){w=y;
}else{w=u.width;
}top=v.computeVerticalAlignOffset(e,u.height,m);
B.renderLayout(F,top,w,p);
if(w>0){F+=w+z;
}}}},_computeSizeHint:function(){var Q=this._getLayoutChildren();
var length=Q.length;
var I,O;
if(length===1){var I=Q[0].getSizeHint();
O={width:I.width,height:I.height,minWidth:I.minWidth,minHeight:I.minHeight};
}else{var M=0,N=0;
var J=0,L=0;
var K=this.getIconPosition();
var P=this.getGap();

if(K===h||K===k){var G=0;

for(var i=0;i<length;i++){I=Q[i].getSizeHint();
N=Math.max(N,I.width);
M=Math.max(M,I.minWidth);
if(I.height>0){L+=I.height;
J+=I.minHeight;
G++;
}}
if(G>1){var H=(G-1)*P;
L+=H;
J+=H;
}}else{var G=0;

for(var i=0;i<length;i++){I=Q[i].getSizeHint();
L=Math.max(L,I.height);
J=Math.max(J,I.minHeight);
if(I.width>0){N+=I.width;
M+=I.minWidth;
G++;
}}
if(G>1){var H=(G-1)*P;
N+=H;
M+=H;
}}O={minWidth:M,width:N,minHeight:J,height:L};
}return O;
}}});
})();
(function(){var c=": ",b="qx.type.BaseError",a="";
qx.Class.define(b,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__dc=d||a;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__dc:null,message:null,getComment:function(){return this.__dc;
},toString:function(){return this.__dc+c+this.message;
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IStringForm";
qx.Interface.define(a,{events:{"changeValue":b},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var f="",e="g",d="$",c="qx.util.StringSplit",b="\\$&",a="^";
qx.Class.define(c,{statics:{split:function(g,h,k){var n=f;
if(h===undefined){return [g.toString()];
}else if(h===null||h.constructor!==RegExp){h=new RegExp(String(h).replace(/[.*+?^${}()|[\]\/\\]/g,b),e);
}else{n=h.toString().replace(/^[\S\s]+\//,f);

if(!h.global){h=new RegExp(h.source,e+n);
}}var m=new RegExp(a+h.source+d,n);
if(k===undefined||+k<0){k=false;
}else{k=Math.floor(+k);

if(!k){return [];
}}var p,o=[],l=0,i=0;

while((k?i++<=k:true)&&(p=h.exec(g))){if((p[0].length===0)&&(h.lastIndex>p.index)){h.lastIndex--;
}
if(h.lastIndex>l){if(p.length>1){p[0].replace(m,function(){for(var j=1;j<arguments.length-2;j++){if(arguments[j]===undefined){p[j]=undefined;
}}});
}o=o.concat(g.substring(l,p.index),(p.index===g.length?[]:p.slice(1)));
l=h.lastIndex;
}
if(p[0].length===0){h.lastIndex++;
}}return (l===g.length)?(h.test(f)?o:o.concat(f)):(k?o:o.concat(g.substring(l)));
}}});
})();
(function(){var f="qx.globalErrorHandling",e="on",d="qx.event.GlobalError";
qx.Class.define(d,{statics:{setErrorHandler:function(k,l){this.__cS=k||null;
this.__cT=l||window;

if(qx.core.Setting.get(f)===e){if(k&&!window.onerror){window.onerror=qx.lang.Function.bind(this.__cU,this);
}
if(!k&&window.onerror){window.onerror=null;
}}},__cU:function(a,b,c){if(this.__cS){this.handleError(new qx.core.WindowError(a,b,c));
return true;
}},observeMethod:function(i){if(qx.core.Setting.get(f)===e){var self=this;
return function(){if(!self.__cS){return i.apply(this,arguments);
}
try{return i.apply(this,arguments);
}catch(h){self.handleError(new qx.core.GlobalError(h,arguments));
}};
}else{return i;
}},handleError:function(j){if(this.__cS){this.__cS.call(this.__cT,j);
}}},defer:function(g){qx.core.Setting.define(f,e);
g.setErrorHandler(null,null);
}});
})();
(function(){var b="qx.util.DeferredCallManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){this.__dl={};
this.__dm=qx.lang.Function.bind(this.__dq,this);
this.__dn=false;
},members:{__do:null,__dp:null,__dl:null,__dn:null,__dm:null,schedule:function(g){if(this.__do==null){this.__do=window.setTimeout(this.__dm,0);
}var h=g.toHashCode();
if(this.__dp&&this.__dp[h]){return;
}this.__dl[h]=g;
this.__dn=true;
},cancel:function(e){var f=e.toHashCode();
if(this.__dp&&this.__dp[f]){this.__dp[f]=null;
return;
}delete this.__dl[f];
if(qx.lang.Object.isEmpty(this.__dl)&&this.__do!=null){window.clearTimeout(this.__do);
this.__do=null;
}},__dq:qx.event.GlobalError.observeMethod(function(){this.__do=null;
while(this.__dn){this.__dp=qx.lang.Object.clone(this.__dl);
this.__dl={};
this.__dn=false;

for(var d in this.__dp){var c=this.__dp[d];

if(c){this.__dp[d]=null;
c.call();
}}}this.__dp=null;
})},destruct:function(){if(this.__do!=null){window.clearTimeout(this.__do);
}this.__dm=this.__dl=null;
}});
})();
(function(){var a="qx.util.DeferredCall";
qx.Class.define(a,{extend:qx.core.Object,construct:function(d,e){arguments.callee.base.call(this);
this.__dr=d;
this.__ds=e||null;
this.__dt=qx.util.DeferredCallManager.getInstance();
},members:{__dr:null,__ds:null,__dt:null,cancel:function(){this.__dt.cancel(this);
},schedule:function(){this.__dt.schedule(this);
},call:function(){this.__ds?this.__dr.apply(this.__ds):this.__dr();
}},destruct:function(b,c){this.cancel();
this.__ds=this.__dr=this.__dt=null;
}});
})();
(function(){var C="element",B="qx.client",A="div",z="",w="mshtml",v="none",u="scroll",t="text",s="qx.html.Element",r="|capture|",W="focus",V="gecko",U="blur",T="deactivate",S="capture",R="userSelect",Q="-moz-none",P="visible",O="releaseCapture",N="|bubble|",J="qxSelectable",K="tabIndex",H="off",I="activate",F="MozUserSelect",G="normal",D="webkit",E="__dQ",L="hidden",M="on";
qx.Class.define(s,{extend:qx.core.Object,construct:function(bd){arguments.callee.base.call(this);
this.__du=bd||A;
},statics:{DEBUG:false,_modified:{},_visibility:{},_scroll:{},_actions:[],__dv:{},_scheduleFlush:function(cP){qx.html.Element.__ed.schedule();
},flush:function(){var dQ;
{};
var dI=this.__dw();
var dH=dI.getFocus();

if(dH&&this.__dA(dH)){dI.blur(dH);
}var dX=dI.getActive();

if(dX&&this.__dA(dX)){qx.bom.Element.deactivate(dX);
}var dL=this.__dy();

if(dL&&this.__dA(dL)){qx.bom.Element.releaseCapture(dL);
}var dR=[];
var dS=this._modified;

for(var dP in dS){dQ=dS[dP];
if(dQ.__dU()){if(dQ.__dB&&qx.dom.Hierarchy.isRendered(dQ.__dB)){dR.push(dQ);
}else{{};
dQ.__dT();
}delete dS[dP];
}}
for(var i=0,l=dR.length;i<l;i++){dQ=dR[i];
{};
dQ.__dT();
}var dN=this._visibility;

for(var dP in dN){dQ=dN[dP];
{};
if(!dQ.$$disposed){dQ.__dB.style.display=dQ.__dE?z:v;
if(qx.core.Variant.isSet(B,w)){if(!(document.documentMode>=8)){dQ.__dB.style.visibility=dQ.__dE?P:L;
}}}delete dN[dP];
}var scroll=this._scroll;

for(var dP in scroll){dQ=scroll[dP];
var dY=dQ.__dB;

if(dY&&dY.offsetWidth){var dK=true;
if(dQ.__dH!=null){dQ.__dB.scrollLeft=dQ.__dH;
delete dQ.__dH;
}if(dQ.__dI!=null){dQ.__dB.scrollTop=dQ.__dI;
delete dQ.__dI;
}var dU=dQ.__dF;

if(dU!=null){var dO=dU.element.getDomElement();

if(dO&&dO.offsetWidth){qx.bom.element.Scroll.intoViewX(dO,dY,dU.align);
delete dQ.__dF;
}else{dK=false;
}}var dV=dQ.__dG;

if(dV!=null){var dO=dV.element.getDomElement();

if(dO&&dO.offsetWidth){qx.bom.element.Scroll.intoViewY(dO,dY,dV.align);
delete dQ.__dG;
}else{dK=false;
}}if(dK){delete scroll[dP];
}}}var dJ={"releaseCapture":1,"blur":1,"deactivate":1};
for(var i=0;i<this._actions.length;i++){var dW=this._actions[i];
var dT=dW.element.__dB;

if(!dT||!dJ[dW.type]&&!dW.element.__dU()){continue;
}var dM=dW.args;
dM.unshift(dT);
qx.bom.Element[dW.type].apply(qx.bom.Element,dM);
}this._actions=[];
for(var dP in this.__dv){var dG=this.__dv[dP];
var dY=dG.element.__dB;

if(dY){qx.bom.Selection.set(dY,dG.start,dG.end);
delete this.__dv[dP];
}}qx.event.handler.Appear.refresh();
},__dw:function(){if(!this.__dx){var p=qx.event.Registration.getManager(window);
this.__dx=p.getHandler(qx.event.handler.Focus);
}return this.__dx;
},__dy:function(){if(!this.__dz){var bv=qx.event.Registration.getManager(window);
this.__dz=bv.getDispatcher(qx.event.dispatch.MouseCapture);
}return this.__dz.getCaptureElement();
},__dA:function(bR){var bS=qx.core.ObjectRegistry.fromHashCode(bR.$$element);
return bS&&!bS.__dU();
}},members:{__du:null,__dB:null,__dC:false,__dD:true,__dE:true,__dF:null,__dG:null,__dH:null,__dI:null,__dJ:null,__dK:null,__dL:null,__dM:null,__dN:null,__dO:null,__dP:null,__dQ:null,__dR:null,__dS:null,_scheduleChildrenUpdate:function(){if(this.__dR){return;
}this.__dR=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
},_createDomElement:function(){return qx.bom.Element.create(this.__du);
},__dT:function(){{};
var ci=this.__dQ;

if(ci){var length=ci.length;
var cj;

for(var i=0;i<length;i++){cj=ci[i];

if(cj.__dE&&cj.__dD&&!cj.__dB){cj.__dT();
}}}
if(!this.__dB){this.__dB=this._createDomElement();
this.__dB.$$element=this.$$hash;
this._copyData(false);

if(ci&&length>0){this._insertChildren();
}}else{this._syncData();

if(this.__dR){this._syncChildren();
}}delete this.__dR;
},_insertChildren:function(){var bI=this.__dQ;
var length=bI.length;
var bK;

if(length>2){var bJ=document.createDocumentFragment();

for(var i=0;i<length;i++){bK=bI[i];

if(bK.__dB&&bK.__dD){bJ.appendChild(bK.__dB);
}}this.__dB.appendChild(bJ);
}else{var bJ=this.__dB;

for(var i=0;i<length;i++){bK=bI[i];

if(bK.__dB&&bK.__dD){bJ.appendChild(bK.__dB);
}}}},_syncChildren:function(){var de;
var dj=qx.core.ObjectRegistry;
var cY=this.__dQ;
var dh=cY.length;
var da;
var df;
var dd=this.__dB;
var dg=dd.childNodes;
var dc=0;
var di;
{};
for(var i=dg.length-1;i>=0;i--){di=dg[i];
df=dj.fromHashCode(di.$$element);

if(!df||!df.__dD||df.__dS!==this){dd.removeChild(di);
{};
}}for(var i=0;i<dh;i++){da=cY[i];
if(da.__dD){df=da.__dB;
di=dg[dc];

if(!df){continue;
}if(df!=di){if(di){dd.insertBefore(df,di);
}else{dd.appendChild(df);
}{};
}dc++;
}}{};
},_copyData:function(dy){var dC=this.__dB;
var dB=this.__dN;

if(dB){var dz=qx.bom.element.Attribute;

for(var dD in dB){dz.set(dC,dD,dB[dD]);
}}var dB=this.__dM;

if(dB){var dA=qx.bom.element.Style;

if(dy){dA.setStyles(dC,dB);
}else{dA.setCss(dC,dA.compile(dB));
}}var dB=this.__dO;

if(dB){for(var dD in dB){this._applyProperty(dD,dB[dD]);
}}var dB=this.__dP;

if(dB){qx.event.Registration.getManager(dC).importListeners(dC,dB);
delete this.__dP;
}},_syncData:function(){var cH=this.__dB;
var cG=qx.bom.element.Attribute;
var cE=qx.bom.element.Style;
var cF=this.__dK;

if(cF){var cK=this.__dN;

if(cK){var cI;

for(var cJ in cF){cI=cK[cJ];

if(cI!==undefined){cG.set(cH,cJ,cI);
}else{cG.reset(cH,cJ);
}}}this.__dK=null;
}var cF=this.__dJ;

if(cF){var cK=this.__dM;

if(cK){var cD={};

for(var cJ in cF){cD[cJ]=cK[cJ];
}cE.setStyles(cH,cD);
}this.__dJ=null;
}var cF=this.__dL;

if(cF){var cK=this.__dO;

if(cK){var cI;

for(var cJ in cF){this._applyProperty(cJ,cK[cJ]);
}}this.__dL=null;
}},__dU:function(){var ds=this;
while(ds){if(ds.__dC){return true;
}
if(!ds.__dD||!ds.__dE){return false;
}ds=ds.__dS;
}return false;
},__dV:function(cS){if(cS.__dS===this){throw new Error("Child is already in: "+cS);
}
if(cS.__dC){throw new Error("Root elements could not be inserted into other ones.");
}if(cS.__dS){cS.__dS.remove(cS);
}cS.__dS=this;
if(!this.__dQ){this.__dQ=[];
}if(this.__dB){this._scheduleChildrenUpdate();
}},__dW:function(q){if(q.__dS!==this){throw new Error("Has no child: "+q);
}if(this.__dB){this._scheduleChildrenUpdate();
}delete q.__dS;
},__dX:function(h){if(h.__dS!==this){throw new Error("Has no child: "+h);
}if(this.__dB){this._scheduleChildrenUpdate();
}},getChildren:function(){return this.__dQ||null;
},getChild:function(bq){var br=this.__dQ;
return br&&br[bq]||null;
},hasChildren:function(){var bQ=this.__dQ;
return bQ&&bQ[0]!==undefined;
},indexOf:function(d){var f=this.__dQ;
return f?f.indexOf(d):-1;
},hasChild:function(ct){var cu=this.__dQ;
return cu&&cu.indexOf(ct)!==-1;
},add:function(ch){if(arguments[1]){for(var i=0,l=arguments.length;i<l;i++){this.__dV(arguments[i]);
}this.__dQ.push.apply(this.__dQ,arguments);
}else{this.__dV(ch);
this.__dQ.push(ch);
}return this;
},addAt:function(cQ,cR){this.__dV(cQ);
qx.lang.Array.insertAt(this.__dQ,cQ,cR);
return this;
},remove:function(bT){var bU=this.__dQ;

if(!bU){return;
}
if(arguments[1]){var bV;

for(var i=0,l=arguments.length;i<l;i++){bV=arguments[i];
this.__dW(bV);
qx.lang.Array.remove(bU,bV);
}}else{this.__dW(bT);
qx.lang.Array.remove(bU,bT);
}return this;
},removeAt:function(co){var cp=this.__dQ;

if(!cp){throw new Error("Has no children!");
}var cq=cp[co];

if(!cq){throw new Error("Has no child at this position!");
}this.__dW(cq);
qx.lang.Array.removeAt(this.__dQ,co);
return this;
},removeAll:function(){var bw=this.__dQ;

if(bw){for(var i=0,l=bw.length;i<l;i++){this.__dW(bw[i]);
}bw.length=0;
}return this;
},getParent:function(){return this.__dS||null;
},insertInto:function(parent,g){parent.__dV(this);

if(g==null){parent.__dQ.push(this);
}else{qx.lang.Array.insertAt(this.__dQ,this,g);
}return this;
},insertBefore:function(bz){var parent=bz.__dS;
parent.__dV(this);
qx.lang.Array.insertBefore(parent.__dQ,this,bz);
return this;
},insertAfter:function(be){var parent=be.__dS;
parent.__dV(this);
qx.lang.Array.insertAfter(parent.__dQ,this,be);
return this;
},moveTo:function(du){var parent=this.__dS;
parent.__dX(this);
var dv=parent.__dQ.indexOf(this);

if(dv===du){throw new Error("Could not move to same index!");
}else if(dv<du){du--;
}qx.lang.Array.removeAt(parent.__dQ,dv);
qx.lang.Array.insertAt(parent.__dQ,this,du);
return this;
},moveBefore:function(dt){var parent=this.__dS;
return this.moveTo(parent.__dQ.indexOf(dt));
},moveAfter:function(bp){var parent=this.__dS;
return this.moveTo(parent.__dQ.indexOf(bp)+1);
},free:function(){var parent=this.__dS;

if(!parent){throw new Error("Has no parent to remove from.");
}
if(!parent.__dQ){return;
}parent.__dW(this);
qx.lang.Array.remove(parent.__dQ,this);
return this;
},getDomElement:function(){return this.__dB||null;
},getNodeName:function(){return this.__du;
},setNodeName:function(name){this.__du=name;
},setRoot:function(cT){this.__dC=cT;
},useMarkup:function(cr){if(this.__dB){throw new Error("Could not overwrite existing element!");
}if(qx.core.Variant.isSet(B,w)){var cs=document.createElement(A);
}else{var cs=qx.html.Element.__dY;

if(!cs){cs=qx.html.Element.__dY=document.createElement(A);
}}cs.innerHTML=cr;
this.__dB=cs.firstChild;
this.__dB.$$element=this.$$hash;
this._copyData(true);
return this.__dB;
},useElement:function(cO){if(this.__dB){throw new Error("Could not overwrite existing element!");
}this.__dB=cO;
this.__dB.$$element=this.$$hash;
this._copyData(true);
},isFocusable:function(){var cN=this.getAttribute(K);

if(cN>=1){return true;
}var cM=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(cN>=0&&cM[this.__du]){return true;
}return false;
},setSelectable:function(bF){this.setAttribute(J,bF?M:H);
if(qx.core.Variant.isSet(B,D)){this.setStyle(R,bF?G:v);
}else if(qx.core.Variant.isSet(B,V)){this.setStyle(F,bF?t:Q);
}},isNativelyFocusable:function(){return !!qx.event.handler.Focus.FOCUSABLE_ELEMENTS[this.__du];
},include:function(){if(this.__dD){return;
}delete this.__dD;

if(this.__dS){this.__dS._scheduleChildrenUpdate();
}return this;
},exclude:function(){if(!this.__dD){return;
}this.__dD=false;

if(this.__dS){this.__dS._scheduleChildrenUpdate();
}return this;
},isIncluded:function(){return this.__dD===true;
},show:function(){if(this.__dE){return;
}
if(this.__dB){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}if(this.__dS){this.__dS._scheduleChildrenUpdate();
}delete this.__dE;
},hide:function(){if(!this.__dE){return;
}
if(this.__dB){qx.html.Element._visibility[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}this.__dE=false;
},isVisible:function(){return this.__dE===true;
},scrollChildIntoViewX:function(bW,bX,bY){var ca=this.__dB;
var cb=bW.getDomElement();

if(bY!==false&&ca&&ca.offsetWidth&&cb&&cb.offsetWidth){qx.bom.element.Scroll.intoViewX(cb,ca,bX);
}else{this.__dF={element:bW,align:bX};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}delete this.__dH;
},scrollChildIntoViewY:function(j,k,m){var n=this.__dB;
var o=j.getDomElement();

if(m!==false&&n&&n.offsetWidth&&o&&o.offsetWidth){qx.bom.element.Scroll.intoViewY(o,n,k);
}else{this.__dG={element:j,align:k};
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}delete this.__dI;
},scrollToX:function(x,cl){var cm=this.__dB;

if(cl!==true&&cm&&cm.offsetWidth){cm.scrollLeft=x;
}else{this.__dH=x;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}delete this.__dF;
},getScrollX:function(){var bD=this.__dB;

if(bD){return bD.scrollLeft;
}return this.__dH||0;
},scrollToY:function(y,bb){var bc=this.__dB;

if(bb!==true&&bc&&bc.offsetWidth){bc.scrollTop=y;
}else{this.__dI=y;
qx.html.Element._scroll[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}delete this.__dG;
},getScrollY:function(){var cv=this.__dB;

if(cv){return cv.scrollTop;
}return this.__dI||0;
},disableScrolling:function(){this.enableScrolling();
this.scrollToX(0);
this.scrollToY(0);
this.addListener(u,this.__eb,this);
},enableScrolling:function(){this.removeListener(u,this.__eb,this);
},__ea:null,__eb:function(e){if(!this.__ea){this.__ea=true;
this.__dB.scrollTop=0;
this.__dB.scrollLeft=0;
delete this.__ea;
}},getTextSelection:function(){var bG=this.__dB;

if(bG){return qx.bom.Selection.get(bG);
}return null;
},getTextSelectionLength:function(){var bE=this.__dB;

if(bE){return qx.bom.Selection.getLength(bE);
}return null;
},getTextSelectionStart:function(){var dw=this.__dB;

if(dw){return qx.bom.Selection.getStart(dw);
}return null;
},getTextSelectionEnd:function(){var cU=this.__dB;

if(cU){return qx.bom.Selection.getEnd(cU);
}return null;
},setTextSelection:function(dl,dm){var dn=this.__dB;

if(dn){qx.bom.Selection.set(dn,dl,dm);
return;
}qx.html.Element.__dv[this.toHashCode()]={element:this,start:dl,end:dm};
qx.html.Element._scheduleFlush(C);
},clearTextSelection:function(){var dk=this.__dB;

if(dk){qx.bom.Selection.clear(dk);
}delete qx.html.Element.__dv[this.toHashCode()];
},__ec:function(dp,dq){var dr=qx.html.Element._actions;
dr.push({type:dp,element:this,args:dq||[]});
qx.html.Element._scheduleFlush(C);
},focus:function(){this.__ec(W);
},blur:function(){this.__ec(U);
},activate:function(){this.__ec(I);
},deactivate:function(){this.__ec(T);
},capture:function(bH){this.__ec(S,[bH!==false]);
},releaseCapture:function(){this.__ec(O);
},setStyle:function(a,b,c){if(!this.__dM){this.__dM={};
}
if(this.__dM[a]==b){return;
}
if(b==null){delete this.__dM[a];
}else{this.__dM[a]=b;
}if(this.__dB){if(c){qx.bom.element.Style.set(this.__dB,a,b);
return this;
}if(!this.__dJ){this.__dJ={};
}this.__dJ[a]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}return this;
},setStyles:function(bL,bM){var bN=qx.bom.element.Style;

if(!this.__dM){this.__dM={};
}
if(this.__dB){if(!this.__dJ){this.__dJ={};
}
for(var bP in bL){var bO=bL[bP];

if(this.__dM[bP]==bO){continue;
}
if(bO==null){delete this.__dM[bP];
}else{this.__dM[bP]=bO;
}if(bM){bN.set(this.__dB,bP,bO);
continue;
}this.__dJ[bP]=true;
}qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}else{for(var bP in bL){var bO=bL[bP];

if(this.__dM[bP]==bO){continue;
}
if(bO==null){delete this.__dM[bP];
}else{this.__dM[bP]=bO;
}}}return this;
},removeStyle:function(dE,dF){this.setStyle(dE,null,dF);
},getStyle:function(ck){return this.__dM?this.__dM[ck]:null;
},getAllStyles:function(){return this.__dM||null;
},setAttribute:function(cV,cW,cX){if(!this.__dN){this.__dN={};
}
if(this.__dN[cV]==cW){return;
}
if(cW==null){delete this.__dN[cV];
}else{this.__dN[cV]=cW;
}if(this.__dB){if(cX){qx.bom.element.Attribute.set(this.__dB,cV,cW);
return this;
}if(!this.__dK){this.__dK={};
}this.__dK[cV]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}return this;
},setAttributes:function(X,Y){for(var ba in X){this.setAttribute(ba,X[ba],Y);
}return this;
},removeAttribute:function(bA,bB){this.setAttribute(bA,null,bB);
},getAttribute:function(dx){return this.__dN?this.__dN[dx]:null;
},_applyProperty:function(name,bl){},_setProperty:function(bm,bn,bo){if(!this.__dO){this.__dO={};
}
if(this.__dO[bm]==bn){return;
}
if(bn==null){delete this.__dO[bm];
}else{this.__dO[bm]=bn;
}if(this.__dB){if(bo){this._applyProperty(bm,bn);
return this;
}if(!this.__dL){this.__dL={};
}this.__dL[bm]=true;
qx.html.Element._modified[this.$$hash]=this;
qx.html.Element._scheduleFlush(C);
}return this;
},_removeProperty:function(bx,by){this._setProperty(bx,null,by);
},_getProperty:function(bs){var bt=this.__dO;

if(!bt){return null;
}var bu=bt[bs];
return bu==null?null:bu;
},addListener:function(bf,bg,self,bh){var bi;

if(this.$$disposed){return null;
}{};

if(this.__dB){return qx.event.Registration.addListener(this.__dB,bf,bg,self,bh);
}
if(!this.__dP){this.__dP={};
}
if(bh==null){bh=false;
}var bj=qx.event.Manager.getNextUniqueId();
var bk=bf+(bh?r:N)+bj;
this.__dP[bk]={type:bf,listener:bg,self:self,capture:bh,unique:bj};
return bk;
},removeListener:function(cw,cx,self,cy){var cz;

if(this.$$disposed){return null;
}{};

if(this.__dB){qx.event.Registration.removeListener(this.__dB,cw,cx,self,cy);
}else{var cB=this.__dP;
var cA;

if(cy==null){cy=false;
}
for(var cC in cB){cA=cB[cC];
if(cA.listener===cx&&cA.self===self&&cA.capture===cy&&cA.type===cw){delete cB[cC];
break;
}}}return this;
},removeListenerById:function(cn){if(this.$$disposed){return null;
}
if(this.__dB){qx.event.Registration.removeListenerById(this.__dB,cn);
}else{delete this.__dP[cn];
}return this;
},hasListener:function(cc,cd){if(this.$$disposed){return false;
}
if(this.__dB){return qx.event.Registration.hasListener(this.__dB,cc,cd);
}var cf=this.__dP;
var ce;

if(cd==null){cd=false;
}
for(var cg in cf){ce=cf[cg];
if(ce.capture===cd&&ce.type===cc){return true;
}}return false;
}},defer:function(cL){cL.__ed=new qx.util.DeferredCall(cL.flush,cL);
},destruct:function(){var bC=this.__dB;

if(bC){qx.event.Registration.getManager(bC).removeAllListeners(bC);
bC.$$element=z;
}
if(!qx.core.ObjectRegistry.inShutDown){var parent=this.__dS;

if(parent&&!parent.$$disposed){parent.remove(this);
}}this._disposeArray(E);
this.__dN=this.__dM=this.__dP=this.__dO=this.__dK=this.__dJ=this.__dL=this.__dB=this.__dS=this.__dF=this.__dG=null;
}});
})();
(function(){var f="value",e="Please use the getValue() method instead.",d="qx.html.Label",c="Please use the setValue() method instead.";
qx.Class.define(d,{extend:qx.html.Element,members:{__jx:null,_applyProperty:function(name,j){arguments.callee.base.call(this,name,j);

if(name==f){var k=this.getDomElement();
qx.bom.Label.setValue(k,j);
}},_createDomElement:function(){var b=this.__jx;
var a=qx.bom.Label.create(this._content,b);
return a;
},_copyData:function(l){return arguments.callee.base.call(this,true);
},setRich:function(h){var i=this.getDomElement();

if(i){throw new Error("The label mode cannot be modified after initial creation");
}h=!!h;

if(this.__jx==h){return;
}this.__jx=h;
return this;
},setValue:function(m){this._setProperty(f,m);
return this;
},getValue:function(){return this._getProperty(f);
},setContent:function(g){qx.log.Logger.deprecatedMethodWarning(arguments.callee,c);
return this.setValue(g);
},getContent:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,e);
return this.getValue();
}}});
})();
(function(){var j="qx.event.type.Event";
qx.Class.define(j,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(d,e){{};
this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!d;
this._cancelable=!!e;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(a){if(a){var b=a;
}else{var b=qx.event.Pool.getInstance().getObject(this.constructor);
}b._type=this._type;
b._target=this._target;
b._currentTarget=this._currentTarget;
b._relatedTarget=this._relatedTarget;
b._originalTarget=this._originalTarget;
b._stopPropagation=this._stopPropagation;
b._bubbles=this._bubbles;
b._preventDefault=this._preventDefault;
b._cancelable=this._cancelable;
return b;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){{};
this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){{};
this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(h){this._type=h;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(k){this._eventPhase=k;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(m){this._target=m;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(f){this._currentTarget=f;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(c){this._relatedTarget=c;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(l){this._originalTarget=l;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(g){this._bubbles=g;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(i){this._cancelable=i;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(e,f,g,h,i){arguments.callee.base.call(this,h,i);
this._target=f||qx.bom.Event.getTarget(e);
this._relatedTarget=g||qx.bom.Event.getRelatedTarget(e);

if(e.timeStamp){this._timeStamp=e.timeStamp;
}this._native=e;
this._returnValue=null;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
var d={};
c._native=this._cloneNativeEvent(this._native,d);
c._returnValue=this._returnValue;
return c;
},_cloneNativeEvent:function(k,l){l.preventDefault=qx.lang.Function.empty;
return l;
},preventDefault:function(){arguments.callee.base.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(j){this._returnValue=j;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var a="qx.event.type.Dom";
qx.Class.define(a,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(b,c){var c=arguments.callee.base.call(this,b,c);
c.shiftKey=b.shiftKey;
c.ctrlKey=b.ctrlKey;
c.altKey=b.altKey;
c.metaKey=b.metaKey;
return c;
},getModifiers:function(){var e=0;
var d=this._native;

if(d.shiftKey){e|=qx.event.type.Dom.SHIFT_MASK;
}
if(d.ctrlKey){e|=qx.event.type.Dom.CTRL_MASK;
}
if(d.altKey){e|=qx.event.type.Dom.ALT_MASK;
}
if(d.metaKey){e|=qx.event.type.Dom.META_MASK;
}return e;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.bom.client.Platform.MAC){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var j="left",i="right",h="middle",g="qx.client",f="dblclick",e="click",d="none",c="contextmenu",b="qx.event.type.Mouse";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{init:function(m,n,o,p,q){arguments.callee.base.call(this,m,n,o,p,q);

if(!o){this._relatedTarget=qx.bom.Event.getRelatedTarget(m);
}return this;
},_cloneNativeEvent:function(k,l){var l=arguments.callee.base.call(this,k,l);
l.button=k.button;
l.clientX=k.clientX;
l.clientY=k.clientY;
l.pageX=k.pageX;
l.pageY=k.pageY;
l.screenX=k.screenX;
l.screenY=k.screenY;
l.wheelDelta=k.wheelDelta;
l.detail=k.detail;
l.srcElement=k.srcElement;
return l;
},__fO:qx.core.Variant.select(g,{"mshtml":{1:j,2:i,4:h},"default":{0:j,2:i,1:h}}),stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case e:case f:return j;
case c:return i;
default:return this.__fO[this._native.button]||d;
}},isLeftPressed:function(){return this.getButton()===j;
},isMiddlePressed:function(){return this.getButton()===h;
},isRightPressed:function(){return this.getButton()===i;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:qx.core.Variant.select(g,{"mshtml":function(){var a=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(a);
},"default":function(){return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(g,{"mshtml":function(){var r=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(r);
},"default":function(){return this._native.pageY;
}}),getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var c="qx.client",b="chrome",a="qx.event.type.MouseWheel";
qx.Class.define(a,{extend:qx.event.type.Mouse,members:{stop:function(){this.stopPropagation();
this.preventDefault();
},getWheelDelta:qx.core.Variant.select(c,{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.bom.client.Browser.NAME==b){return -(this._native.wheelDelta/120);
}else{return -(this._native.wheelDelta/40);
}}})}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(d,e){var f=qx.locale.Manager;

if(f){return f.tr.apply(f,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(g,h,i,j){var k=qx.locale.Manager;

if(k){return k.trn.apply(k,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(l,m,n){var o=qx.locale.Manager;

if(o){return o.trc.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(b){var c=qx.locale.Manager;

if(c){return c.marktr.apply(c,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var e="edge-start",d="align-start",c="align-end",b="edge-end",a="qx.util.placement.AbstractAxis";
qx.Class.define(a,{extend:qx.core.Object,members:{computeStart:function(f,g,h,i,j){throw new Error("abstract method call!");
},_moveToEdgeAndAlign:function(n,o,p,q){switch(q){case e:return o.start-p.end-n;
case b:return o.end+p.start;
case d:return o.start+p.start;
case c:return o.end-p.end-n;
}},_isInRange:function(k,l,m){return k>=0&&k+l<=m;
}}});
})();
(function(){var a="qx.util.placement.BestFitAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){var g=this._moveToEdgeAndAlign(b,c,d,f);

if(this._isInRange(g,b,e)){return g;
}
if(g<0){g=Math.min(0,e-b);
}
if(g+b>e){g=Math.max(0,e-b);
}return g;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:3},members:{canHandleEvent:function(b,c){},registerEvent:function(g,h,i){},unregisterEvent:function(d,e,f){}}});
})();
(function(){var f="blur",e="focus",d="input",c="load",b="qx.ui.core.EventHandler",a="activate";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){arguments.callee.base.call(this);
this.__gH=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:false},members:{__gH:null,__gI:{focusin:1,focusout:1,focus:1,blur:1},__gJ:{mouseover:1,mouseout:1,appear:1,disappear:1},canHandleEvent:function(h,j){return h instanceof qx.ui.core.Widget;
},_dispatchEvent:function(k){var q=k.getTarget();
var p=qx.ui.core.Widget.getWidgetByElement(q);
var r=false;

while(p&&p.isAnonymous()){var r=true;
p=p.getLayoutParent();
}if(p&&r&&k.getType()==a){p.getContainerElement().activate();
}if(this.__gI[k.getType()]){p=p&&p.getFocusTarget();
if(!p){return;
}}if(k.getRelatedTarget){var y=k.getRelatedTarget();
var x=qx.ui.core.Widget.getWidgetByElement(y);

while(x&&x.isAnonymous()){x=x.getLayoutParent();
}
if(x){if(this.__gI[k.getType()]){x=x.getFocusTarget();
}if(x===p){return;
}}}var t=k.getCurrentTarget();
var v=qx.ui.core.Widget.getWidgetByElement(t);

if(!v||v.isAnonymous()){return;
}if(this.__gI[k.getType()]){v=v.getFocusTarget();
}var w=k.getType();

if(!v||!(v.isEnabled()||this.__gJ[w])){return;
}var m=k.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var s=this.__gH.getListeners(v,w,m);

if(!s||s.length===0){return;
}var n=qx.event.Pool.getInstance().getObject(k.constructor);
k.clone(n);
n.setTarget(p);
n.setRelatedTarget(x||null);
n.setCurrentTarget(v);
var z=k.getOriginalTarget();

if(z){var o=qx.ui.core.Widget.getWidgetByElement(z);

while(o&&o.isAnonymous()){o=o.getLayoutParent();
}n.setOriginalTarget(o);
}else{n.setOriginalTarget(q);
}for(var i=0,l=s.length;i<l;i++){var u=s[i].context||v;
s[i].handler.call(u,n);
}if(n.getPropagationStopped()){k.stopPropagation();
}
if(n.getDefaultPrevented()){k.preventDefault();
}qx.event.Pool.getInstance().poolObject(n);
},registerEvent:function(A,B,C){var D;

if(B===e||B===f){D=A.getFocusElement();
}else if(B===c||B===d){D=A.getContentElement();
}else{D=A.getContainerElement();
}
if(D){D.addListener(B,this._dispatchEvent,this,C);
}},unregisterEvent:function(E,F,G){var H;

if(F===e||F===f){H=E.getFocusElement();
}else if(F===c||F===d){H=E.getContentElement();
}else{H=E.getContainerElement();
}
if(H){H.removeListener(F,this._dispatchEvent,this,G);
}}},destruct:function(){this.__gH=null;
},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var h="qx.ui.core.DecoratorFactory",g="$$nopool$$";
qx.Class.define(h,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__bR={};
},statics:{MAX_SIZE:15,__bS:g},members:{__bR:null,getDecoratorElement:function(a){var f=qx.ui.core.DecoratorFactory;

if(qx.lang.Type.isString(a)){var d=a;
var c=qx.theme.manager.Decoration.getInstance().resolve(a);
}else{var d=f.__bS;
c=a;
}var e=this.__bR;

if(e[d]&&e[d].length>0){var b=e[d].pop();
}else{var b=this._createDecoratorElement(c,d);
}b.$$pooled=false;
return b;
},poolDecorator:function(n){if(!n||n.$$pooled){return;
}var q=qx.ui.core.DecoratorFactory;
var o=n.getId();

if(o==q.__bS){n.dispose();
return;
}var p=this.__bR;

if(!p[o]){p[o]=[];
}
if(p[o].length>q.MAX_SIZE){n.dispose();
}else{n.$$pooled=true;
p[o].push(n);
}},_createDecoratorElement:function(i,j){var k=new qx.html.Decorator(i,j);
{};
return k;
},toString:function(){return arguments.callee.base.call(this);
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){var m=this.__bR;

for(var l in m){qx.util.DisposeUtil.disposeArray(m,l);
}}this.__bR=null;
}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeFields:function(f,g){qx.Bootstrap.warn("Don't use 'disposeFields' - instead assign directly to 'null'");

for(var i=0,l=g.length;i<l;i++){var name=g[i];

if(f[name]==null||!f.hasOwnProperty(name)){continue;
}f[name]=null;
}},disposeObjects:function(o,p){var name;

for(var i=0,l=p.length;i<l;i++){name=p[i];

if(o[name]==null||!o.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(o[name].dispose){o[name].dispose();
}else{throw new Error("Has no disposable object under key: "+name+"!");
}}o[name]=null;
}},disposeArray:function(q,r){var t=q[r];

if(!t){return;
}if(qx.core.ObjectRegistry.inShutDown){q[r]=null;
return;
}try{var s;

for(var i=t.length-1;i>=0;i--){s=t[i];

if(s){s.dispose();
}}}catch(n){throw new Error("The array field: "+r+" of object: "+q+" has non disposable entries: "+n);
}t.length=0;
q[r]=null;
},disposeMap:function(h,j){var k=h[j];

if(!k){return;
}if(qx.core.ObjectRegistry.inShutDown){h[j]=null;
return;
}try{for(var m in k){if(k.hasOwnProperty(m)){k[m].dispose();
}}}catch(e){throw new Error("The map field: "+j+" of object: "+h+" has non disposable entries: "+e);
}h[j]=null;
},disposeTriggeredBy:function(b,c){var d=c.dispose;
c.dispose=function(){d.call(c);
b.dispose();
};
}}});
})();
(function(){var b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(d){return this._dynamic[d];
},isDynamic:function(e){return !!this._dynamic[e];
},resolve:function(c){if(c&&this._dynamic[c]){return this._dynamic[c];
}return c;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Class.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__cV=c;
this.__cW=d||b;
this.__cX=e===undefined?-1:e;
},members:{__cV:null,__cW:null,__cX:null,toString:function(){return this.__cV;
},getUri:function(){return this.__cW;
},getLineNumber:function(){return this.__cX;
}}});
})();
(function(){var bf=",",be="rgb(",bd=")",bc="qx.theme.manager.Color",bb="qx.util.ColorUtil";
qx.Class.define(bb,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(J){return this.NAMED[J]!==undefined;
},isSystemColor:function(D){return this.SYSTEM[D]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(bc);
},isThemedColor:function(v){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(v);
},stringToRgb:function(U){if(this.supportsThemes()&&this.isThemedColor(U)){var U=qx.theme.manager.Color.getInstance().resolveDynamic(U);
}
if(this.isNamedColor(U)){return this.NAMED[U];
}else if(this.isSystemColor(U)){throw new Error("Could not convert system colors to RGB: "+U);
}else if(this.isRgbString(U)){return this.__hu();
}else if(this.isHex3String(U)){return this.__hw();
}else if(this.isHex6String(U)){return this.__hx();
}throw new Error("Could not parse color: "+U);
},cssStringToRgb:function(N){if(this.isNamedColor(N)){return this.NAMED[N];
}else if(this.isSystemColor(N)){throw new Error("Could not convert system colors to RGB: "+N);
}else if(this.isRgbString(N)){return this.__hu();
}else if(this.isRgbaString(N)){return this.__hv();
}else if(this.isHex3String(N)){return this.__hw();
}else if(this.isHex6String(N)){return this.__hx();
}throw new Error("Could not parse color: "+N);
},stringToRgbString:function(C){return this.rgbToRgbString(this.stringToRgb(C));
},rgbToRgbString:function(P){return be+P[0]+bf+P[1]+bf+P[2]+bd;
},rgbToHexString:function(bh){return (qx.lang.String.pad(bh[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(bh[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(bh[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(E){return this.isThemedColor(E)||this.isNamedColor(E)||this.isHex3String(E)||this.isHex6String(E)||this.isRgbString(E);
},isCssString:function(bg){return this.isSystemColor(bg)||this.isNamedColor(bg)||this.isHex3String(bg)||this.isHex6String(bg)||this.isRgbString(bg);
},isHex3String:function(V){return this.REGEXP.hex3.test(V);
},isHex6String:function(Q){return this.REGEXP.hex6.test(Q);
},isRgbString:function(u){return this.REGEXP.rgb.test(u);
},isRgbaString:function(O){return this.REGEXP.rgba.test(O);
},__hu:function(){var ba=parseInt(RegExp.$1,10);
var Y=parseInt(RegExp.$2,10);
var X=parseInt(RegExp.$3,10);
return [ba,Y,X];
},__hv:function(){var T=parseInt(RegExp.$1,10);
var S=parseInt(RegExp.$2,10);
var R=parseInt(RegExp.$3,10);
return [T,S,R];
},__hw:function(){var H=parseInt(RegExp.$1,16)*17;
var G=parseInt(RegExp.$2,16)*17;
var F=parseInt(RegExp.$3,16)*17;
return [H,G,F];
},__hx:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(bi){if(this.isHex3String(bi)){return this.__hw(bi);
}throw new Error("Invalid hex3 value: "+bi);
},hex6StringToRgb:function(W){if(this.isHex6String(W)){return this.__hx(W);
}throw new Error("Invalid hex6 value: "+W);
},hexStringToRgb:function(I){if(this.isHex3String(I)){return this.__hw(I);
}
if(this.isHex6String(I)){return this.__hx(I);
}throw new Error("Invalid hex value: "+I);
},rgbToHsb:function(a){var d,e,j;
var s=a[0];
var m=a[1];
var c=a[2];
var o=(s>m)?s:m;

if(c>o){o=c;
}var h=(s<m)?s:m;

if(c<h){h=c;
}j=o/255.0;

if(o!=0){e=(o-h)/o;
}else{e=0;
}
if(e==0){d=0;
}else{var l=(o-s)/(o-h);
var n=(o-m)/(o-h);
var k=(o-c)/(o-h);

if(s==o){d=k-n;
}else if(m==o){d=2.0+l-k;
}else{d=4.0+n-l;
}d=d/6.0;

if(d<0){d=d+1.0;
}}return [Math.round(d*360),Math.round(e*100),Math.round(j*100)];
},hsbToRgb:function(w){var i,f,p,q,t;
var x=w[0]/360;
var y=w[1]/100;
var z=w[2]/100;

if(x>=1.0){x%=1.0;
}
if(y>1.0){y=1.0;
}
if(z>1.0){z=1.0;
}var A=Math.floor(255*z);
var B={};

if(y==0.0){B.red=B.green=B.blue=A;
}else{x*=6.0;
i=Math.floor(x);
f=x-i;
p=Math.floor(A*(1.0-y));
q=Math.floor(A*(1.0-(y*f)));
t=Math.floor(A*(1.0-(y*(1.0-f))));

switch(i){case 0:B.red=A;
B.green=t;
B.blue=p;
break;
case 1:B.red=q;
B.green=A;
B.blue=p;
break;
case 2:B.red=p;
B.green=A;
B.blue=t;
break;
case 3:B.red=p;
B.green=q;
B.blue=A;
break;
case 4:B.red=t;
B.green=p;
B.blue=A;
break;
case 5:B.red=A;
B.green=p;
B.blue=q;
break;
}}return [B.red,B.green,B.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){arguments.callee.base.call(this);
this.__gE={};
this.add(a,h);
},members:{__gE:null,_preprocess:function(n){var q=this._getDynamic();

if(q[n]===false){return n;
}else if(q[n]===undefined){if(n.charAt(0)===j||n.charAt(0)===b||n.indexOf(g)===0||n.indexOf(f)===i||n.indexOf(e)===0){q[n]=false;
return n;
}
if(this.__gE[n]){return this.__gE[n];
}var p=n.substring(0,n.indexOf(j));
var o=this.__gE[p];

if(o!==undefined){q[n]=o+n.substring(p.length);
}}return n;
},add:function(r,s){this.__gE[r]=s;
var u=this._getDynamic();
for(var t in u){if(t.substring(0,t.indexOf(j))===r){u[t]=s+t.substring(r.length);
}}},remove:function(k){delete this.__gE[k];
},resolve:function(l){var m=this._getDynamic();

if(l!==null){l=this._preprocess(l);
}return m[l]||l;
}},destruct:function(){this.__gE=null;
}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(k){var l={};

if(k){var m=k.colors;
var n=qx.util.ColorUtil;
var o;

for(var p in m){o=m[p];

if(typeof o===b){if(!n.isCssString(o)){throw new Error("Could not parse color: "+o);
}}else if(o instanceof Array){o=n.rgbToRgbString(o);
}else{throw new Error("Could not parse color: "+o);
}l[p]=o;
}}this._setDynamic(l);
},resolve:function(g){var j=this._dynamic;
var h=j[g];

if(h){return h;
}var i=this.getTheme();

if(i!==null&&i.colors[g]){return j[g]=i.colors[g];
}return g;
},isDynamic:function(q){var s=this._dynamic;

if(q&&(s[q]!==undefined)){return true;
}var r=this.getTheme();

if(r!==null&&q&&(r.colors[q]!==undefined)){s[q]=r.colors[q];
return true;
}return false;
}}});
})();
(function(){var k="visible",j="scroll",i="borderBottomWidth",h="borderTopWidth",g="left",f="borderLeftWidth",e="bottom",d="top",c="right",b="qx.bom.element.Scroll",a="borderRightWidth";
qx.Class.define(b,{statics:{intoViewX:function(l,stop,m){var parent=l.parentNode;
var r=qx.dom.Node.getDocument(l);
var n=r.body;
var z,x,u;
var B,s,C;
var v,D,G;
var E,p,y,o;
var t,F,w;
var q=m===g;
var A=m===c;
stop=stop?stop.parentNode:r;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===n||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===n){x=parent.scrollLeft;
u=x+qx.bom.Viewport.getWidth();
B=qx.bom.Viewport.getWidth();
s=parent.clientWidth;
C=parent.scrollWidth;
v=0;
D=0;
G=0;
}else{z=qx.bom.element.Location.get(parent);
x=z.left;
u=z.right;
B=parent.offsetWidth;
s=parent.clientWidth;
C=parent.scrollWidth;
v=parseInt(qx.bom.element.Style.get(parent,f),10)||0;
D=parseInt(qx.bom.element.Style.get(parent,a),10)||0;
G=B-s-v-D;
}E=qx.bom.element.Location.get(l);
p=E.left;
y=E.right;
o=l.offsetWidth;
t=p-x-v;
F=y-u+D;
w=0;
if(q){w=t;
}else if(A){w=F+G;
}else if(t<0||o>s){w=t;
}else if(F>0){w=F+G;
}parent.scrollLeft+=w;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===n){break;
}parent=parent.parentNode;
}},intoViewY:function(H,stop,I){var parent=H.parentNode;
var O=qx.dom.Node.getDocument(H);
var J=O.body;
var W,K,S;
var Y,V,Q;
var M,N,L;
var bb,bc,X,R;
var U,P,bd;
var ba=I===d;
var T=I===e;
stop=stop?stop.parentNode:O;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===J||qx.bom.element.Overflow.getY(parent)!=k)){if(parent===J){K=parent.scrollTop;
S=K+qx.bom.Viewport.getHeight();
Y=qx.bom.Viewport.getHeight();
V=parent.clientHeight;
Q=parent.scrollHeight;
M=0;
N=0;
L=0;
}else{W=qx.bom.element.Location.get(parent);
K=W.top;
S=W.bottom;
Y=parent.offsetHeight;
V=parent.clientHeight;
Q=parent.scrollHeight;
M=parseInt(qx.bom.element.Style.get(parent,h),10)||0;
N=parseInt(qx.bom.element.Style.get(parent,i),10)||0;
L=Y-V-M-N;
}bb=qx.bom.element.Location.get(H);
bc=bb.top;
X=bb.bottom;
R=H.offsetHeight;
U=bc-K-M;
P=X-S+N;
bd=0;
if(ba){bd=U;
}else if(T){bd=P+L;
}else if(U<0||R>V){bd=U;
}else if(P>0){bd=P+L;
}parent.scrollTop+=bd;
if(qx.bom.client.Engine.GECKO){qx.event.Registration.fireNonBubblingEvent(parent,j);
}}
if(parent===J){break;
}parent=parent.parentNode;
}},intoView:function(be,stop,bf,bg){this.intoViewX(be,stop,bf);
this.intoViewY(be,stop,bg);
}}});
})();
(function(){var l="",k="g",j="0",h='\\$1',g="%",f='-',e="qx.lang.String",d=' ',c='\n',b="undefined";
qx.Class.define(e,{statics:{camelCase:function(a){return a.replace(/\-([a-z])/g,function(v,w){return w.toUpperCase();
});
},hyphenate:function(P){return P.replace(/[A-Z]/g,function(B){return (f+B.charAt(0).toLowerCase());
});
},capitalize:function(H){return H.replace(/\b[a-z]/g,function(I){return I.toUpperCase();
});
},clean:function(Q){return this.trim(Q.replace(/\s+/g,d));
},trimLeft:function(O){return O.replace(/^\s+/,l);
},trimRight:function(N){return N.replace(/\s+$/,l);
},trim:function(J){return J.replace(/^\s+|\s+$/g,l);
},startsWith:function(C,D){return C.indexOf(D)===0;
},endsWith:function(m,n){return m.substring(m.length-n.length,m.length)===n;
},repeat:function(t,u){return t.length>0?new Array(u+1).join(t):l;
},pad:function(E,length,F){var G=length-E.length;

if(G>0){if(typeof F===b){F=j;
}return this.repeat(F,G)+E;
}else{return E;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(L,M){return L.indexOf(M)!=-1;
},format:function(q,r){var s=q;

for(var i=0;i<r.length;i++){s=s.replace(new RegExp(g+(i+1),k),r[i]);
}return s;
},escapeRegexpChars:function(p){return p.replace(/([.*+?^${}()|[\]\/\\])/g,h);
},toArray:function(o){return o.split(/\B|\b/g);
},stripTags:function(K){return K.replace(/<\/?[^>]+>/gi,l);
},stripScripts:function(x,y){var A=l;
var z=x.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){A+=arguments[1]+c;
return l;
});

if(y===true){qx.lang.Function.globalEval(A);
}return z;
}}});
})();
(function(){var w="auto",v="px",u=",",t="clip:auto;",s="rect(",r=");",q="",p=")",o="qx.bom.element.Clip",n="string",k="rect(auto)",m="clip:rect(",l="clip",j="rect(auto,auto,auto,auto)";
qx.Class.define(o,{statics:{compile:function(F){if(!F){return t;
}var K=F.left;
var top=F.top;
var J=F.width;
var I=F.height;
var G,H;

if(K==null){G=(J==null?w:J+v);
K=w;
}else{G=(J==null?w:K+J+v);
K=K+v;
}
if(top==null){H=(I==null?w:I+v);
top=w;
}else{H=(I==null?w:top+I+v);
top=top+v;
}return m+top+u+G+u+H+u+K+r;
},get:function(a,b){var d=qx.bom.element.Style.get(a,l,b,false);
var i,top,g,f;
var c,e;

if(typeof d===n&&d!==w&&d!==q){d=qx.lang.String.trim(d);
if(/\((.*)\)/.test(d)){var h=RegExp.$1.split(u);
top=qx.lang.String.trim(h[0]);
c=qx.lang.String.trim(h[1]);
e=qx.lang.String.trim(h[2]);
i=qx.lang.String.trim(h[3]);
if(i===w){i=null;
}
if(top===w){top=null;
}
if(c===w){c=null;
}
if(e===w){e=null;
}if(top!=null){top=parseInt(top,10);
}
if(c!=null){c=parseInt(c,10);
}
if(e!=null){e=parseInt(e,10);
}
if(i!=null){i=parseInt(i,10);
}if(c!=null&&i!=null){g=c-i;
}else if(c!=null){g=c;
}
if(e!=null&&top!=null){f=e-top;
}else if(e!=null){f=e;
}}else{throw new Error("Could not parse clip string: "+d);
}}return {left:i||null,top:top||null,width:g||null,height:f||null};
},set:function(x,y){if(!y){x.style.clip=j;
return;
}var D=y.left;
var top=y.top;
var C=y.width;
var B=y.height;
var z,A;

if(D==null){z=(C==null?w:C+v);
D=w;
}else{z=(C==null?w:D+C+v);
D=D+v;
}
if(top==null){A=(B==null?w:B+v);
top=w;
}else{A=(B==null?w:top+B+v);
top=top+v;
}x.style.clip=s+top+u+z+u+A+u+D+p;
},reset:function(E){E.style.clip=qx.bom.client.Engine.MSHTML?k:w;
}}});
})();
(function(){var l="ready",k="qx.client",j="mshtml",i="load",h="unload",g="qx.event.handler.Application",f="complete",d="gecko|opera|webkit",c="left",b="DOMContentLoaded",a="shutdown";
qx.Class.define(g,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(r){arguments.callee.base.call(this);
this._window=r.getWindow();
this.__gt=false;
this.__gu=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,__gv:false,onScriptLoaded:function(){this.__gv=true;
var w=qx.event.handler.Application.$$instance;

if(w){w.__gy();
}}},members:{canHandleEvent:function(y,z){},registerEvent:function(s,t,u){},unregisterEvent:function(o,p,q){},__gw:null,__gt:null,__gu:null,__gx:null,__gy:function(){var x=qx.event.handler.Application;
if(!this.__gw&&this.__gt&&x.__gv){if(qx.core.Variant.isSet(k,j)){if(qx.event.Registration.hasListener(this._window,l)){this.__gw=true;
qx.event.Registration.fireEvent(this._window,l);
}}else{this.__gw=true;
qx.event.Registration.fireEvent(this._window,l);
}}},isApplicationReady:function(){return this.__gw;
},_initObserver:function(){if(qx.$$domReady||document.readyState==f){this.__gt=true;
this.__gy();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Variant.isSet(k,d)){qx.bom.Event.addNativeListener(this._window,b,this._onNativeLoadWrapped);
}else if(qx.core.Variant.isSet(k,j)){var self=this;
var m=function(){try{document.documentElement.doScroll(c);

if(document.body){self._onNativeLoadWrapped();
}}catch(n){window.setTimeout(m,100);
}};
m();
}qx.bom.Event.addNativeListener(this._window,i,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,h,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,i,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,h,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__gt=true;
this.__gy();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__gx){this.__gx=true;

try{qx.event.Registration.fireEvent(this._window,a);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(v){qx.event.Registration.addHandler(v);
}});
})();
(function(){var a="qx.util.placement.DirectAxis";
qx.Class.define(a,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(b,c,d,e,f){return this._moveToEdgeAndAlign(b,c,d,f);
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(x){this._manager=x;
},members:{_getParent:function(u){throw new Error("Missing implementation");
},canDispatchEvent:function(v,event,w){return event.getBubbles();
},dispatchEvent:function(c,event,d){var parent=c;
var o=this._manager;
var l,s;
var h;
var n,q;
var p;
var r=[];
l=o.getListeners(c,d,true);
s=o.getListeners(c,d,false);

if(l){r.push(l);
}
if(s){r.push(s);
}var parent=this._getParent(c);
var f=[];
var e=[];
var g=[];
var m=[];
while(parent!=null){l=o.getListeners(parent,d,true);

if(l){g.push(l);
m.push(parent);
}s=o.getListeners(parent,d,false);

if(s){f.push(s);
e.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=g.length-1;i>=0;i--){p=m[i];
event.setCurrentTarget(p);
h=g[i];

for(var j=0,k=h.length;j<k;j++){n=h[j];
q=n.context||p;
n.handler.call(q,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(c);

for(var i=0,t=r.length;i<t;i++){h=r[i];

for(var j=0,k=h.length;j<k;j++){n=h[j];
q=n.context||c;
n.handler.call(q,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,t=f.length;i<t;i++){p=e[i];
event.setCurrentTarget(p);
h=f[i];

for(var j=0,k=h.length;j<k;j++){n=h[j];
q=n.context||p;
n.handler.call(q,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var h="losecapture",g="qx.client",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(o,p){arguments.callee.base.call(this,o);
this.__fS=o.getWindow();
this.__fT=p;
o.addListener(this.__fS,f,this.releaseCapture,this);
o.addListener(this.__fS,e,this.releaseCapture,this);
o.addListener(this.__fS,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__fT:null,__fU:null,__fV:true,__fS:null,_getParent:function(k){return k.parentNode;
},canDispatchEvent:function(q,event,r){return (this.__fU&&this.__fW[r]);
},dispatchEvent:function(s,event,t){if(t==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__fV||!qx.dom.Hierarchy.contains(this.__fU,s)){s=this.__fU;
}arguments.callee.base.call(this,s,event,t);
},__fW:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(l,m){var m=m!==false;

if(this.__fU===l&&this.__fV==m){return;
}
if(this.__fU){this.releaseCapture();
}this.nativeSetCapture(l,m);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(l,h,function(){qx.bom.Event.removeNativeListener(l,h,arguments.callee);
self.releaseCapture();
});
}this.__fV=m;
this.__fU=l;
this.__fT.fireEvent(l,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__fU;
},releaseCapture:function(){var u=this.__fU;

if(!u){return;
}this.__fU=null;
this.__fT.fireEvent(u,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(u);
},hasNativeCapture:qx.bom.client.Engine.MSHTML,nativeSetCapture:qx.core.Variant.select(g,{"mshtml":function(i,j){i.setCapture(j!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Variant.select(g,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__fU=this.__fS=this.__fT=null;
},defer:function(n){qx.event.Registration.addDispatcher(n);
}});
})();
(function(){var r="qx.client",q="",p="mshtml",o="'",n="SelectionLanguage",m="qx.xml.Document",k=" />",j="MSXML2.DOMDocument.3.0",h='<\?xml version="1.0" encoding="utf-8"?>\n<',g="MSXML2.XMLHTTP.3.0",c="MSXML2.XMLHTTP.6.0",f=" xmlns='",e="text/xml",b="XPath",a="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(m,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(G){if(G.nodeType===9){return G.documentElement.nodeName!==d;
}else if(G.ownerDocument){return this.isXmlDocument(G.ownerDocument);
}else{return false;
}},create:qx.core.Variant.select(r,{"mshtml":function(x,y){var z=new ActiveXObject(this.DOMDOC);
z.setProperty(n,b);

if(y){var A=h;
A+=y;

if(x){A+=f+x+o;
}A+=k;
z.loadXML(A);
}return z;
},"default":function(v,w){return document.implementation.createDocument(v||q,w||q,null);
}}),fromString:qx.core.Variant.select(r,{"mshtml":function(E){var F=qx.xml.Document.create();
F.loadXML(E);
return F;
},"default":function(B){var C=new DOMParser();
return C.parseFromString(B,e);
}})},defer:function(s){if(qx.core.Variant.isSet(r,p)){var t=[a,j];
var u=[c,g];

for(var i=0,l=t.length;i<l;i++){try{new ActiveXObject(t[i]);
new ActiveXObject(u[i]);
}catch(D){continue;
}s.DOMDOC=t[i];
s.XMLHTTP=u[i];
break;
}}}});
})();
(function(){var g="qx.ui.core.queue.Visibility",f="visibility";
qx.Class.define(g,{statics:{__go:{},__gp:{},remove:function(i){var j=i.$$hash;
delete this.__gp[j];
delete this.__go[j];
},isVisible:function(h){return this.__gp[h.$$hash]||false;
},__gq:function(m){var o=this.__gp;
var n=m.$$hash;
var p;
if(m.isExcluded()){p=false;
}else{var parent=m.$$parent;

if(parent){p=this.__gq(parent);
}else{p=m.isRootWidget();
}}return o[n]=p;
},add:function(k){var l=this.__go;

if(l[k.$$hash]){return;
}l[k.$$hash]=k;
qx.ui.core.queue.Manager.scheduleFlush(f);
},flush:function(){var a=this.__go;
var e=this.__gp;
for(var b in a){if(e[b]!=null){a[b].addChildrenToQueue(a);
}}var d={};

for(var b in a){d[b]=e[b];
e[b]=null;
}for(var b in a){var c=a[b];
delete a[b];
if(e[b]==null){this.__gq(c);
}if(e[b]&&e[b]!=d[b]){c.checkAppearanceNeeds();
}}this.__go={};
}}});
})();
(function(){var c="none",b="qx.html.Decorator",a="absolute";
qx.Class.define(b,{extend:qx.html.Element,construct:function(g,h){arguments.callee.base.call(this);
this.__gF=g;
this.__gG=h||g.toHashCode();
this.useMarkup(g.getMarkup());
var i={position:a,top:0,left:0};

if(qx.bom.client.Feature.CSS_POINTER_EVENTS){i.pointerEvents=c;
}this.setStyles(i);
},members:{__gG:null,__gF:null,getId:function(){return this.__gG;
},getDecorator:function(){return this.__gF;
},resize:function(e,f){this.__gF.resize(this.getDomElement(),e,f);
},tint:function(d){this.__gF.tint(this.getDomElement(),d);
},getInsets:function(){return this.__gF.getInsets();
}},destruct:function(){this.__gF=null;
}});
})();
(function(){var u="",r="qx.client",q="hidden",p="-moz-scrollbars-none",o="overflow",n=";",m="overflowY",l=":",k="overflowX",j="overflow:",G="none",F="scroll",E="borderLeftStyle",D="borderRightStyle",C="div",B="borderRightWidth",A="overflow-y",z="borderLeftWidth",y="-moz-scrollbars-vertical",x="100px",v="qx.bom.element.Overflow",w="overflow-x";
qx.Class.define(v,{statics:{__fX:null,getScrollbarWidth:function(){if(this.__fX!==null){return this.__fX;
}var V=qx.bom.element.Style;
var X=function(a,b){return parseInt(V.get(a,b))||0;
};
var Y=function(bE){return (V.get(bE,D)==G?0:X(bE,B));
};
var W=function(bH){return (V.get(bH,E)==G?0:X(bH,z));
};
var bb=qx.core.Variant.select(r,{"mshtml":function(R){if(V.get(R,m)==q||R.clientWidth==0){return Y(R);
}return Math.max(0,R.offsetWidth-R.clientLeft-R.clientWidth);
},"default":function(bh){if(bh.clientWidth==0){var bi=V.get(bh,o);
var bj=(bi==F||bi==y?16:0);
return Math.max(0,Y(bh)+bj);
}return Math.max(0,(bh.offsetWidth-bh.clientWidth-W(bh)));
}});
var ba=function(bL){return bb(bL)-Y(bL);
};
var t=document.createElement(C);
var s=t.style;
s.height=s.width=x;
s.overflow=F;
document.body.appendChild(t);
var c=ba(t);
this.__fX=c?c:16;
document.body.removeChild(t);
return this.__fX;
},_compile:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bk,bl){if(bl==q){bl=p;
}return j+bl+n;
}:
function(T,U){return T+l+U+n;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bc,bd){return j+bd+n;
}:
function(bx,by){return bx+l+by+n;
},"default":function(bU,bV){return bU+l+bV+n;
}}),compileX:function(d){return this._compile(w,d);
},compileY:function(bW){return this._compile(A,bW);
},getX:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(e,f){var g=qx.bom.element.Style.get(e,o,f,false);

if(g===p){g=q;
}return g;
}:
function(h,i){return qx.bom.element.Style.get(h,k,i,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bF,bG){return qx.bom.element.Style.get(bF,o,bG,false);
}:
function(ce,cf){return qx.bom.element.Style.get(ce,k,cf,false);
},"default":function(O,P){return qx.bom.element.Style.get(O,k,P,false);
}}),setX:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bv,bw){if(bw==q){bw=p;
}bv.style.overflow=bw;
}:
function(bO,bP){bO.style.overflowX=bP;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bm,bn){bm.style.overflow=bn;
}:
function(bM,bN){bM.style.overflowX=bN;
},"default":function(br,bs){br.style.overflowX=bs;
}}),resetX:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(L){L.style.overflow=u;
}:
function(Q){Q.style.overflowX=u;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(M,N){M.style.overflow=u;
}:
function(bS,bT){bS.style.overflowX=u;
},"default":function(bq){bq.style.overflowX=u;
}}),getY:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(be,bf){var bg=qx.bom.element.Style.get(be,o,bf,false);

if(bg===p){bg=q;
}return bg;
}:
function(bt,bu){return qx.bom.element.Style.get(bt,m,bu,false);
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bX,bY){return qx.bom.element.Style.get(bX,o,bY,false);
}:
function(bo,bp){return qx.bom.element.Style.get(bo,m,bp,false);
},"default":function(H,I){return qx.bom.element.Style.get(H,m,I,false);
}}),setY:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(bJ,bK){if(bK===q){bK=p;
}bJ.style.overflow=bK;
}:
function(ca,cb){ca.style.overflowY=cb;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(bB,bC){bB.style.overflow=bC;
}:
function(bz,bA){bz.style.overflowY=bA;
},"default":function(J,K){J.style.overflowY=K;
}}),resetY:qx.core.Variant.select(r,{"gecko":qx.bom.client.Engine.VERSION<
1.8?
function(S){S.style.overflow=u;
}:
function(bD){bD.style.overflowY=u;
},"opera":qx.bom.client.Engine.VERSION<
9.5?
function(cc,cd){cc.style.overflow=u;
}:
function(bQ,bR){bQ.style.overflowY=u;
},"default":function(bI){bI.style.overflowY=u;
}})}});
})();
(function(){var m="iPod",l="Win32",k="",j="Win64",i="Linux",h="BSD",g="Macintosh",f="iPhone",e="Windows",d="qx.bom.client.Platform",a="X11",c="MacIntel",b="MacPPC";
qx.Class.define(d,{statics:{NAME:"",WIN:false,MAC:false,UNIX:false,UNKNOWN_PLATFORM:false,__ew:function(){var o=navigator.platform;
if(o==null||o===k){o=navigator.userAgent;
}
if(o.indexOf(e)!=-1||o.indexOf(l)!=-1||o.indexOf(j)!=-1){this.WIN=true;
this.NAME="win";
}else if(o.indexOf(g)!=-1||o.indexOf(b)!=-1||o.indexOf(c)!=-1||o.indexOf(m)!=-1||o.indexOf(f)!=-1){this.MAC=true;
this.NAME="mac";
}else if(o.indexOf(a)!=-1||o.indexOf(i)!=-1||o.indexOf(h)!=-1){this.UNIX=true;
this.NAME="unix";
}else{this.UNKNOWN_PLATFORM=true;
this.WIN=true;
this.NAME="win";
}}},defer:function(n){n.__ew();
}});
})();
(function(){var j="win98",i="osx2",h="osx0",g="osx4",f="win95",e="win2000",d="osx1",c="osx5",b="osx3",a="Windows NT 5.01",H=")",G="winxp",F="freebsd",E="sunos",D="SV1",C="|",B="nintendods",A="winnt4",z="wince",y="winme",q="os9",r="\.",o="osx",p="linux",m="netbsd",n="winvista",k="openbsd",l="(",s="win2003",t="symbian",v="win7",u="g",x="qx.bom.client.System",w=" Mobile/";
qx.Class.define(x,{statics:{NAME:"",SP1:false,SP2:false,WIN95:false,WIN98:false,WINME:false,WINNT4:false,WIN2000:false,WINXP:false,WIN2003:false,WINVISTA:false,WIN7:false,WINCE:false,LINUX:false,SUNOS:false,FREEBSD:false,NETBSD:false,OPENBSD:false,OSX:false,OS9:false,SYMBIAN:false,NINTENDODS:false,PSP:false,IPHONE:false,UNKNOWN_SYSTEM:false,__ex:{"Windows NT 6.1":v,"Windows NT 6.0":n,"Windows NT 5.2":s,"Windows NT 5.1":G,"Windows NT 5.0":e,"Windows 2000":e,"Windows NT 4.0":A,"Win 9x 4.90":y,"Windows CE":z,"Windows 98":j,"Win98":j,"Windows 95":f,"Win95":f,"Linux":p,"FreeBSD":F,"NetBSD":m,"OpenBSD":k,"SunOS":E,"Symbian System":t,"Nitro":B,"PSP":"sonypsp","Mac OS X 10_5":c,"Mac OS X 10.5":c,"Mac OS X 10_4":g,"Mac OS X 10.4":g,"Mac OS X 10_3":b,"Mac OS X 10.3":b,"Mac OS X 10_2":i,"Mac OS X 10.2":i,"Mac OS X 10_1":d,"Mac OS X 10.1":d,"Mac OS X 10_0":h,"Mac OS X 10.0":h,"Mac OS X":o,"Mac OS 9":q},__ey:function(){var L=navigator.userAgent;
var K=[];

for(var J in this.__ex){K.push(J);
}var M=new RegExp(l+K.join(C).replace(/\./g,r)+H,u);

if(!M.test(L)){this.UNKNOWN_SYSTEM=true;

if(!qx.bom.client.Platform.UNKNOWN_PLATFORM){if(qx.bom.client.Platform.UNIX){this.NAME="linux";
this.LINUX=true;
}else if(qx.bom.client.Platform.MAC){this.NAME="osx5";
this.OSX=true;
}else{this.NAME="winxp";
this.WINXP=true;
}}else{this.NAME="winxp";
this.WINXP=true;
}return;
}
if(qx.bom.client.Engine.WEBKIT&&RegExp(w).test(navigator.userAgent)){this.IPHONE=true;
this.NAME="iphone";
}else{this.NAME=this.__ex[RegExp.$1];
this[this.NAME.toUpperCase()]=true;

if(qx.bom.client.Platform.WIN){if(L.indexOf(a)!==-1){this.SP1=true;
}else if(qx.bom.client.Engine.MSHTML&&L.indexOf(D)!==-1){this.SP2=true;
}}}}},defer:function(I){I.__ey();
}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__dd=qx.dev.StackTrace.getStackTrace();
},members:{__dd:null,getStackTrace:function(){return this.__dd;
}}});
})();
(function(){var j="qx.client",i="ie",h="msie",g="android",f="operamini",e="mobile chrome",d=")(/| )([0-9]+\.[0-9])",c="iemobile",b="opera mobi",a="Mobile Safari",x="operamobile",w="mobile safari",v="IEMobile|Maxthon|MSIE",u="qx.bom.client.Browser",t="opera mini",s="(",r="opera",q="mshtml",p="Opera Mini|Opera Mobi|Opera",o="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",m="webkit",n="5.0",k="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox",l="Mobile/";
qx.Bootstrap.define(u,{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",__fP:function(y){var z=navigator.userAgent;
var B=new RegExp(s+y+d);
var C=z.match(B);

if(!C){return;
}var name=C[1].toLowerCase();
var A=C[3];
if(z.match(/Version(\/| )([0-9]+\.[0-9])/)){A=RegExp.$2;
}
if(qx.core.Variant.isSet(j,m)){if(name===g){name=e;
}else if(z.indexOf(a)!==-1||z.indexOf(l)!==-1){name=w;
}}else if(qx.core.Variant.isSet(j,q)){if(name===h){name=i;
if(qx.bom.client.System.WINCE&&name===i){name=c;
A=n;
}}}else if(qx.core.Variant.isSet(j,r)){if(name===b){name=x;
}else if(name===t){name=f;
}}this.NAME=name;
this.FULLVERSION=A;
this.VERSION=parseFloat(A,10);
this.TITLE=name+" "+this.VERSION;
this.UNKNOWN=false;
}},defer:qx.core.Variant.select(j,{"webkit":function(G){G.__fP(o);
},"gecko":function(E){E.__fP(k);
},"mshtml":function(F){F.__fP(v);
},"opera":function(D){D.__fP(p);
}})});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(u){var u=u||t;
this.__gN=u;
this.length=u.length;
},members:{$$isString:true,length:0,__gN:null,toString:function(){return this.__gN;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(y,z){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(v,w){{};
var x=[g,h,q,s,a,n,j,k,r,f,e,b,c,d,p,m];
w.valueOf=w.toString;

if(new v(t).valueOf()==null){delete w.valueOf;
}
for(var i=0,l=x.length;i<l;i++){w[x[i]]=String.prototype[x[i]];
}}});
})();
(function(){var l="indexOf",k="addAfter",j="add",i="addBefore",h="_",g="addAt",f="hasChildren",e="removeAt",d="removeAll",c="getChildren",a="remove",b="qx.ui.core.MRemoteChildrenHandling";
qx.Mixin.define(b,{members:{__mf:function(m,n,o,p){var q=this.getChildrenContainer();

if(q===this){m=h+m;
}return (q[m])(n,o,p);
},getChildren:function(){return this.__mf(c);
},hasChildren:function(){return this.__mf(f);
},add:function(r,s){return this.__mf(j,r,s);
},remove:function(t){return this.__mf(a,t);
},removeAll:function(){return this.__mf(d);
},indexOf:function(u){return this.__mf(l,u);
},addAt:function(v,w,x){this.__mf(g,v,w,x);
},addBefore:function(y,z,A){this.__mf(i,y,z,A);
},addAfter:function(C,D,E){this.__mf(k,C,D,E);
},removeAt:function(B){this.__mf(e,B);
}}});
})();
(function(){var o="top",n="right",m="bottom",l="left",k="align-start",j="qx.util.placement.AbstractAxis",i="edge-start",h="align-end",g="edge-end",f="-",c="best-fit",e="qx.util.placement.Placement",d="keep-align",b='__hV',a="direct";
qx.Class.define(e,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__hV=new qx.util.placement.DirectAxis();
},properties:{axisX:{check:j},axisY:{check:j},edge:{check:[o,n,m,l],init:o},align:{check:[o,n,m,l],init:n}},statics:{__hW:null,compute:function(z,A,B,C,D,E,F){this.__hW=this.__hW||new qx.util.placement.Placement();
var I=D.split(f);
var H=I[0];
var G=I[1];
this.__hW.set({axisX:this.__ib(E),axisY:this.__ib(F),edge:H,align:G});
return this.__hW.compute(z,A,B,C);
},__hX:null,__hY:null,__ia:null,__ib:function(y){switch(y){case a:this.__hX=this.__hX||new qx.util.placement.DirectAxis();
return this.__hX;
case d:this.__hY=this.__hY||new qx.util.placement.KeepAlignAxis();
return this.__hY;
case c:this.__ia=this.__ia||new qx.util.placement.BestFitAxis();
return this.__ia;
default:throw new Error("Invalid 'mode' argument!'");
}}},members:{__hV:null,compute:function(r,s,t,u){{};
var v=this.getAxisX()||this.__hV;
var x=v.computeStart(r.width,{start:t.left,end:t.right},{start:u.left,end:u.right},s.width,this.__ic());
var w=this.getAxisY()||this.__hV;
var top=w.computeStart(r.height,{start:t.top,end:t.bottom},{start:u.top,end:u.bottom},s.height,this.__id());
return {left:x,top:top};
},__ic:function(){var q=this.getEdge();
var p=this.getAlign();

if(q==l){return i;
}else if(q==n){return g;
}else if(p==l){return k;
}else if(p==n){return h;
}},__id:function(){var K=this.getEdge();
var J=this.getAlign();

if(K==o){return i;
}else if(K==m){return g;
}else if(J==o){return k;
}else if(J==m){return h;
}}},destruct:function(){this._disposeObjects(b);
}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="password",h="file",g="submit",f="reset",e="textarea",d="input",c="hidden",a="qx.client",b="body";
qx.Class.define(k,{statics:{get:qx.core.Variant.select(a,{"mshtml":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case d:switch(m.type){case j:case i:case c:case l:case f:case h:case g:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}break;
case e:case b:case l:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}}else{if(m==null){m=window;
}return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}},"default":function(n){var o=qx.dom.Node.getDocument(n);
var p=qx.bom.Selection.getSelectionObject(o);

if(p.rangeCount>0){return p.getRangeAt(0);
}else{return o.createRange();
}}})}});
})();
(function(){var n="execute",m="toolTipText",l="icon",k="label",j="qx.ui.core.MExecutable",h="value",g="qx.event.type.Event",f="_applyCommand",d="enabled",c="menu",a="changeCommand",b="qx.ui.core.Command";
qx.Mixin.define(j,{events:{"execute":g},properties:{command:{check:b,apply:f,event:a,nullable:true}},members:{__jj:null,__jk:false,__jl:null,_bindableProperties:[d,k,l,m,h,c],execute:function(){var o=this.getCommand();

if(o){if(this.__jk){this.__jk=false;
}else{this.__jk=true;
o.execute(this);
}}this.fireEvent(n);
},__jm:function(e){if(this.__jk){this.__jk=false;
return;
}this.__jk=true;
this.execute();
},_applyCommand:function(p,q){if(q!=null){q.removeListenerById(this.__jl);
}
if(p!=null){this.__jl=p.addListener(n,this.__jm,this);
}var t=this.__jj;

if(t==null){this.__jj=t={};
}
for(var i=0;i<this._bindableProperties.length;i++){var s=this._bindableProperties[i];
if(q!=null&&t[s]!=null){q.removeBinding(t[s]);
t[s]=null;
}if(p!=null&&qx.Class.hasProperty(this.constructor,s)){var r=p.get(s);

if(r==null){var u=this.get(s);
}t[s]=p.bind(s,this,s);
if(u){this.set(s,u);
}}}}},destruct:function(){this.__jj=null;
}});
})();
(function(){var j="Integer",i="_applyDimension",h="Boolean",g="_applyStretching",f="_applyMargin",e="shorthand",d="_applyAlign",c="allowShrinkY",b="bottom",a="baseline",x="marginBottom",w="qx.ui.core.LayoutItem",v="center",u="marginTop",t="allowGrowX",s="middle",r="marginLeft",q="allowShrinkX",p="top",o="right",m="marginRight",n="abstract",k="allowGrowY",l="left";
qx.Class.define(w,{type:n,extend:qx.core.Object,properties:{minWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},width:{check:j,nullable:true,apply:i,init:null,themeable:true},maxWidth:{check:j,nullable:true,apply:i,init:null,themeable:true},minHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},height:{check:j,nullable:true,apply:i,init:null,themeable:true},maxHeight:{check:j,nullable:true,apply:i,init:null,themeable:true},allowGrowX:{check:h,apply:g,init:true,themeable:true},allowShrinkX:{check:h,apply:g,init:true,themeable:true},allowGrowY:{check:h,apply:g,init:true,themeable:true},allowShrinkY:{check:h,apply:g,init:true,themeable:true},allowStretchX:{group:[t,q],mode:e,themeable:true},allowStretchY:{group:[k,c],mode:e,themeable:true},marginTop:{check:j,init:0,apply:f,themeable:true},marginRight:{check:j,init:0,apply:f,themeable:true},marginBottom:{check:j,init:0,apply:f,themeable:true},marginLeft:{check:j,init:0,apply:f,themeable:true},margin:{group:[u,m,x,r],mode:e,themeable:true},alignX:{check:[l,v,o],nullable:true,apply:d,themeable:true},alignY:{check:[p,s,b,a],nullable:true,apply:d,themeable:true}},members:{__bJ:null,__bK:null,__bL:null,__bM:null,__bN:null,__bO:null,__bP:null,getBounds:function(){return this.__bO||this.__bK||null;
},clearSeparators:function(){},renderSeparator:function(M,N){},renderLayout:function(W,top,X,Y){var ba;
{};
var bb=null;

if(this.getHeight()==null&&this._hasHeightForWidth()){var bb=this._getHeightForWidth(X);
}
if(bb!=null&&bb!==this.__bJ){this.__bJ=bb;
qx.ui.core.queue.Layout.add(this);
return null;
}var bd=this.__bK;

if(!bd){bd=this.__bK={};
}var bc={};

if(W!==bd.left||top!==bd.top){bc.position=true;
bd.left=W;
bd.top=top;
}
if(X!==bd.width||Y!==bd.height){bc.size=true;
bd.width=X;
bd.height=Y;
}if(this.__bL){bc.local=true;
delete this.__bL;
}
if(this.__bN){bc.margin=true;
delete this.__bN;
}return bc;
},isExcluded:function(){return false;
},hasValidLayout:function(){return !this.__bL;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutCache:function(){this.__bL=true;
this.__bM=null;
},getSizeHint:function(B){var C=this.__bM;

if(C){return C;
}
if(B===false){return null;
}C=this.__bM=this._computeSizeHint();
if(this._hasHeightForWidth()&&this.__bJ&&this.getHeight()==null){C.height=this.__bJ;
}if(C.minWidth>C.width){C.width=C.minWidth;
}
if(C.maxWidth<C.width){C.width=C.maxWidth;
}
if(!this.getAllowGrowX()){C.maxWidth=C.width;
}
if(!this.getAllowShrinkX()){C.minWidth=C.width;
}if(C.minHeight>C.height){C.height=C.minHeight;
}
if(C.maxHeight<C.height){C.height=C.maxHeight;
}
if(!this.getAllowGrowY()){C.maxHeight=C.height;
}
if(!this.getAllowShrinkY()){C.minHeight=C.height;
}return C;
},_computeSizeHint:function(){var S=this.getMinWidth()||0;
var P=this.getMinHeight()||0;
var T=this.getWidth()||S;
var R=this.getHeight()||P;
var O=this.getMaxWidth()||Infinity;
var Q=this.getMaxHeight()||Infinity;
return {minWidth:S,width:T,maxWidth:O,minHeight:P,height:R,maxHeight:Q};
},_hasHeightForWidth:function(){var G=this._getLayout();

if(G){return G.hasHeightForWidth();
}return false;
},_getHeightForWidth:function(K){var L=this._getLayout();

if(L&&L.hasHeightForWidth()){return L.getHeightForWidth(K);
}return null;
},_getLayout:function(){return null;
},_applyMargin:function(){this.__bN=true;
var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyAlign:function(){var parent=this.$$parent;

if(parent){parent.updateLayoutProperties();
}},_applyDimension:function(){qx.ui.core.queue.Layout.add(this);
},_applyStretching:function(){qx.ui.core.queue.Layout.add(this);
},hasUserBounds:function(){return !!this.__bO;
},setUserBounds:function(y,top,z,A){this.__bO={left:y,top:top,width:z,height:A};
qx.ui.core.queue.Layout.add(this);
},resetUserBounds:function(){delete this.__bO;
qx.ui.core.queue.Layout.add(this);
},__bQ:{},setLayoutProperties:function(D){if(D==null){return;
}var E=this.__bP;

if(!E){E=this.__bP={};
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(D);
}for(var F in D){if(D[F]==null){delete E[F];
}else{E[F]=D[F];
}}},getLayoutProperties:function(){return this.__bP||this.__bQ;
},clearLayoutProperties:function(){delete this.__bP;
},updateLayoutProperties:function(H){var I=this._getLayout();

if(I){var J;
{};
I.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},getApplicationRoot:function(){return qx.core.Init.getApplication().getRoot();
},getLayoutParent:function(){return this.$$parent||null;
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}this.$$parent=parent||null;
qx.ui.core.queue.Visibility.add(this);
},isRootWidget:function(){return false;
},_getRoot:function(){var parent=this;

while(parent){if(parent.isRootWidget()){return parent;
}parent=parent.$$parent;
}return null;
},clone:function(){var U=arguments.callee.base.call(this);
var V=this.__bP;

if(V){U.__bP=qx.lang.Object.clone(V);
}return U;
}},destruct:function(){this.$$parent=this.$$subparent=this.__bP=this.__bK=this.__bO=this.__bM=null;
}});
})();
(function(){var fs="px",fr="Boolean",fq="qx.event.type.Mouse",fp="qx.event.type.Drag",fo="visible",fn="qx.event.type.Focus",fm="on",fl="Integer",fk="excluded",fj="qx.event.type.Data",eU="_applyPadding",eT="qx.event.type.Event",eS="hidden",eR="contextmenu",eQ="String",eP="tabIndex",eO="backgroundColor",eN="focused",eM="changeVisibility",eL="mshtml",fz="hovered",fA="qx.event.type.KeySequence",fx="qx.client",fy="absolute",fv="drag",fw="div",ft="disabled",fu="move",fB="dragstart",fC="qx.dynlocale",fc="dragchange",fb="dragend",fe="resize",fd="Decorator",fg="zIndex",ff="$$widget",fi="opacity",fh="default",fa="Color",eY="changeToolTipText",dB="beforeContextmenuOpen",dC="_applyNativeContextMenu",dD="_applyBackgroundColor",dE="_applyFocusable",dF="changeShadow",dG="qx.event.type.KeyInput",dH="__bX",dI="createChildControl",dJ="__bY",dK="Font",fG="_applyShadow",fF="_applyEnabled",fE="_applySelectable",fD="Number",fK="_applyKeepActive",fJ="__bU",fI="_applyVisibility",fH="repeat",fM="qxDraggable",fL="syncAppearance",ek="paddingLeft",em="_applyDroppable",ei="#",ej="qx.event.type.MouseWheel",ep="_applyCursor",eq="_applyDraggable",en="changeTextColor",eo="changeContextMenu",eg="paddingTop",eh="changeSelectable",dS="hideFocus",dR="none",dU="__cd",dT="outline",dO="_applyAppearance",dN="_applyOpacity",dQ="url(",dP=")",dM="qx.ui.core.Widget",dL="__bT",ev="_applyFont",ew="cursor",ex="qxDroppable",ey="changeZIndex",er="changeEnabled",es="changeFont",et="_applyDecorator",eu="_applyZIndex",ez="_applyTextColor",eA="qx.ui.menu.Menu",ed="__cf",ec="_applyToolTipText",eb="true",ea="widget",dY="changeDecorator",dX="_applyTabIndex",dW="__ch",dV="changeAppearance",ef="__ca",ee="shorthand",eB="/",eC="",eD="_applyContextMenu",eE="paddingBottom",eF="changeNativeContextMenu",eG="qx.ui.tooltip.ToolTip",eH="qxKeepActive",eI="_applyKeepFocus",eJ="paddingRight",eK="changeBackgroundColor",eX="changeLocale",eW="qxKeepFocus",eV="qx/static/blank.gif";
qx.Class.define(dM,{extend:qx.ui.core.LayoutItem,include:[qx.locale.MTranslation],construct:function(){arguments.callee.base.call(this);
this.__bT=this._createContainerElement();
this.__bU=this.__cg();
this.__bT.add(this.__bU);
this.initFocusable();
this.initSelectable();
this.initNativeContextMenu();
},events:{appear:eT,disappear:eT,createChildControl:fj,resize:fj,move:fj,syncAppearance:fj,mousemove:fq,mouseover:fq,mouseout:fq,mousedown:fq,mouseup:fq,click:fq,dblclick:fq,contextmenu:fq,beforeContextmenuOpen:fq,mousewheel:ej,keyup:fA,keydown:fA,keypress:fA,keyinput:dG,focus:fn,blur:fn,focusin:fn,focusout:fn,activate:fn,deactivate:fn,capture:eT,losecapture:eT,drop:fp,dragleave:fp,dragover:fp,drag:fp,dragstart:fp,dragend:fp,dragchange:fp,droprequest:fp},properties:{paddingTop:{check:fl,init:0,apply:eU,themeable:true},paddingRight:{check:fl,init:0,apply:eU,themeable:true},paddingBottom:{check:fl,init:0,apply:eU,themeable:true},paddingLeft:{check:fl,init:0,apply:eU,themeable:true},padding:{group:[eg,eJ,eE,ek],mode:ee,themeable:true},zIndex:{nullable:true,init:null,apply:eu,event:ey,check:fl,themeable:true},decorator:{nullable:true,init:null,apply:et,event:dY,check:fd,themeable:true},shadow:{nullable:true,init:null,apply:fG,event:dF,check:fd,themeable:true},backgroundColor:{nullable:true,check:fa,apply:dD,event:eK,themeable:true},textColor:{nullable:true,check:fa,apply:ez,event:en,themeable:true,inheritable:true},font:{nullable:true,apply:ev,check:dK,event:es,themeable:true,inheritable:true,dispose:true},opacity:{check:fD,apply:dN,themeable:true,nullable:true,init:null},cursor:{check:eQ,apply:ep,themeable:true,inheritable:true,nullable:true,init:null},toolTip:{check:eG,nullable:true},toolTipText:{check:eQ,nullable:true,event:eY,apply:ec},toolTipIcon:{check:eQ,nullable:true,event:eY},blockToolTip:{check:fr,init:false},visibility:{check:[fo,eS,fk],init:fo,apply:fI,event:eM},enabled:{init:true,check:fr,inheritable:true,apply:fF,event:er},anonymous:{init:false,check:fr},tabIndex:{check:fl,nullable:true,apply:dX},focusable:{check:fr,init:false,apply:dE},keepFocus:{check:fr,init:false,apply:eI},keepActive:{check:fr,init:false,apply:fK},draggable:{check:fr,init:false,apply:eq},droppable:{check:fr,init:false,apply:em},selectable:{check:fr,init:false,event:eh,apply:fE},contextMenu:{check:eA,apply:eD,nullable:true,event:eo},nativeContextMenu:{check:fr,init:false,themeable:true,event:eF,apply:dC},appearance:{check:eQ,init:ea,apply:dO,event:dV}},statics:{DEBUG:false,getWidgetByElement:function(bR){while(bR){var bS=bR.$$widget;
if(bS!=null){return qx.core.ObjectRegistry.fromHashCode(bS);
}bR=bR.parentNode;
}return null;
},contains:function(parent,ca){while(ca){if(parent==ca){return true;
}ca=ca.getLayoutParent();
}return false;
},__bV:new qx.ui.core.DecoratorFactory(),__bW:new qx.ui.core.DecoratorFactory()},members:{__bT:null,__bU:null,__bX:null,__bY:null,__ca:null,__cb:null,__cc:null,__cd:null,_getLayout:function(){return this.__cd;
},_setLayout:function(gh){{};

if(this.__cd){this.__cd.connectToWidget(null);
}
if(gh){gh.connectToWidget(this);
}this.__cd=gh;
qx.ui.core.queue.Layout.add(this);
},setLayoutParent:function(parent){if(this.$$parent===parent){return;
}var cG=this.getContainerElement();

if(this.$$parent&&!this.$$parent.$$disposed){this.$$parent.getContentElement().remove(cG);
}this.$$parent=parent||null;

if(parent&&!parent.$$disposed){this.$$parent.getContentElement().add(cG);
}qx.core.Property.refresh(this);
qx.ui.core.queue.Visibility.add(this);
},_updateInsets:null,__ce:function(a,b){if(a==b){return false;
}
if(a==null||b==null){return true;
}var fQ=qx.theme.manager.Decoration.getInstance();
var fS=fQ.resolve(a).getInsets();
var fR=fQ.resolve(b).getInsets();

if(fS.top!=fR.top||fS.right!=fR.right||fS.bottom!=fR.bottom||fS.left!=fR.left){return true;
}return false;
},renderLayout:function(fT,top,fU,fV){var gf=arguments.callee.base.call(this,fT,top,fU,fV);
if(!gf){return;
}var fX=this.getContainerElement();
var content=this.getContentElement();
var gc=gf.size||this._updateInsets;
var gg=fs;
var gd={};
if(gf.position){gd.left=fT+gg;
gd.top=top+gg;
}if(gf.size){gd.width=fU+gg;
gd.height=fV+gg;
}
if(gf.position||gf.size){fX.setStyles(gd);
}
if(gc||gf.local||gf.margin){var fW=this.getInsets();
var innerWidth=fU-fW.left-fW.right;
var innerHeight=fV-fW.top-fW.bottom;
innerWidth=innerWidth<0?0:innerWidth;
innerHeight=innerHeight<0?0:innerHeight;
}var ga={};

if(this._updateInsets){ga.left=fW.left+gg;
ga.top=fW.top+gg;
}
if(gc){ga.width=innerWidth+gg;
ga.height=innerHeight+gg;
}
if(gc||this._updateInsets){content.setStyles(ga);
}
if(gf.size){var ge=this.__ca;

if(ge){ge.setStyles({width:fU+fs,height:fV+fs});
}}
if(gf.size||this._updateInsets){if(this.__bX){this.__bX.resize(fU,fV);
}}
if(gf.size){if(this.__bY){var fW=this.__bY.getInsets();
var gb=fU+fW.left+fW.right;
var fY=fV+fW.top+fW.bottom;
this.__bY.resize(gb,fY);
}}
if(gc||gf.local||gf.margin){if(this.__cd&&this.hasLayoutChildren()){this.__cd.renderLayout(innerWidth,innerHeight);
}else if(this.hasLayoutChildren()){throw new Error("At least one child in control "+this._findTopControl()+" requires a layout, but no one was defined!");
}}if(gf.position&&this.hasListener(fu)){this.fireDataEvent(fu,this.getBounds());
}
if(gf.size&&this.hasListener(fe)){this.fireDataEvent(fe,this.getBounds());
}delete this._updateInsets;
return gf;
},__cf:null,clearSeparators:function(){var bF=this.__cf;

if(!bF){return;
}var bG=qx.ui.core.Widget.__bV;
var content=this.getContentElement();
var bE;

for(var i=0,l=bF.length;i<l;i++){bE=bF[i];
bG.poolDecorator(bE);
content.remove(bE);
}bF.length=0;
},renderSeparator:function(bW,bX){var bY=qx.ui.core.Widget.__bV.getDecoratorElement(bW);
this.getContentElement().add(bY);
bY.resize(bX.width,bX.height);
bY.setStyles({left:bX.left+fs,top:bX.top+fs});
if(!this.__cf){this.__cf=[bY];
}else{this.__cf.push(bY);
}},_computeSizeHint:function(){var P=this.getWidth();
var O=this.getMinWidth();
var K=this.getMaxWidth();
var N=this.getHeight();
var L=this.getMinHeight();
var M=this.getMaxHeight();
{};
var Q=this._getContentHint();
var J=this.getInsets();
var S=J.left+J.right;
var R=J.top+J.bottom;

if(P==null){P=Q.width+S;
}
if(N==null){N=Q.height+R;
}
if(O==null){O=S;

if(Q.minWidth!=null){O+=Q.minWidth;
}}
if(L==null){L=R;

if(Q.minHeight!=null){L+=Q.minHeight;
}}
if(K==null){if(Q.maxWidth==null){K=Infinity;
}else{K=Q.maxWidth+S;
}}
if(M==null){if(Q.maxHeight==null){M=Infinity;
}else{M=Q.maxHeight+R;
}}return {width:P,minWidth:O,maxWidth:K,height:N,minHeight:L,maxHeight:M};
},invalidateLayoutCache:function(){arguments.callee.base.call(this);

if(this.__cd){this.__cd.invalidateLayoutCache();
}},_getContentHint:function(){var gE=this.__cd;

if(gE){if(this.hasLayoutChildren()){var gD;
var gF=gE.getSizeHint();
{};
return gF;
}else{return {width:0,height:0};
}}else{return {width:100,height:50};
}},_getHeightForWidth:function(dg){var dk=this.getInsets();
var dn=dk.left+dk.right;
var dm=dk.top+dk.bottom;
var dl=dg-dn;
var di=this._getLayout();

if(di&&di.hasHeightForWidth()){var dh=di.getHeightForWidth(dg);
}else{dh=this._getContentHeightForWidth(dl);
}var dj=dh+dm;
return dj;
},_getContentHeightForWidth:function(gr){throw new Error("Abstract method call: _getContentHeightForWidth()!");
},getInsets:function(){var top=this.getPaddingTop();
var bO=this.getPaddingRight();
var bQ=this.getPaddingBottom();
var bP=this.getPaddingLeft();

if(this.__bX){var bN=this.__bX.getInsets();
{};
top+=bN.top;
bO+=bN.right;
bQ+=bN.bottom;
bP+=bN.left;
}return {"top":top,"right":bO,"bottom":bQ,"left":bP};
},getInnerSize:function(){var gy=this.getBounds();

if(!gy){return null;
}var gx=this.getInsets();
return {width:gy.width-gx.left-gx.right,height:gy.height-gx.top-gx.bottom};
},show:function(){this.setVisibility(fo);
},hide:function(){this.setVisibility(eS);
},exclude:function(){this.setVisibility(fk);
},isVisible:function(){return this.getVisibility()===fo;
},isHidden:function(){return this.getVisibility()!==fo;
},isExcluded:function(){return this.getVisibility()===fk;
},isSeeable:function(){var I=this.getContainerElement().getDomElement();

if(I){return I.offsetWidth>0;
}var H=this;

do{if(!H.isVisible()){return false;
}
if(H.isRootWidget()){return true;
}H=H.getLayoutParent();
}while(H);
return false;
},_createContainerElement:function(){var fN=new qx.html.Element(fw);
{};
fN.setStyles({"position":fy,"zIndex":0});
fN.setAttribute(ff,this.toHashCode());
{};
return fN;
},__cg:function(){var dq=this._createContentElement();
{};
dq.setStyles({"position":fy,"zIndex":10});
return dq;
},_createContentElement:function(){var bb=new qx.html.Element(fw);
bb.setStyles({"overflowX":eS,"overflowY":eS});
return bb;
},getContainerElement:function(){return this.__bT;
},getContentElement:function(){return this.__bU;
},getDecoratorElement:function(){return this.__bX||null;
},getShadowElement:function(){return this.__bY||null;
},__ch:null,getLayoutChildren:function(){var z=this.__ch;

if(!z){return this.__ci;
}var A;

for(var i=0,l=z.length;i<l;i++){var y=z[i];

if(y.hasUserBounds()||y.isExcluded()){if(A==null){A=z.concat();
}qx.lang.Array.remove(A,y);
}}return A||z;
},scheduleLayoutUpdate:function(){qx.ui.core.queue.Layout.add(this);
},invalidateLayoutChildren:function(){var x=this.__cd;

if(x){x.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
},hasLayoutChildren:function(){var cW=this.__ch;

if(!cW){return false;
}var cX;

for(var i=0,l=cW.length;i<l;i++){cX=cW[i];

if(!cX.hasUserBounds()&&!cX.isExcluded()){return true;
}}return false;
},getChildrenContainer:function(){return this;
},__ci:[],_getChildren:function(){return this.__ch||this.__ci;
},_indexOf:function(bI){var bJ=this.__ch;

if(!bJ){return -1;
}return bJ.indexOf(bI);
},_hasChildren:function(){var G=this.__ch;
return G!=null&&(!!G[0]);
},addChildrenToQueue:function(bK){var bL=this.__ch;

if(!bL){return;
}var bM;

for(var i=0,l=bL.length;i<l;i++){bM=bL[i];
bK[bM.$$hash]=bM;
bM.addChildrenToQueue(bK);
}},_add:function(gW,gX){if(gW.getLayoutParent()==this){qx.lang.Array.remove(this.__ch,gW);
}
if(this.__ch){this.__ch.push(gW);
}else{this.__ch=[gW];
}this.__cj(gW,gX);
},_addAt:function(cK,cL,cM){if(!this.__ch){this.__ch=[];
}if(cK.getLayoutParent()==this){qx.lang.Array.remove(this.__ch,cK);
}var cN=this.__ch[cL];

if(cN===cK){return cK.setLayoutProperties(cM);
}
if(cN){qx.lang.Array.insertBefore(this.__ch,cK,cN);
}else{this.__ch.push(cK);
}this.__cj(cK,cM);
},_addBefore:function(bh,bi,bj){{};

if(bh==bi){return;
}
if(!this.__ch){this.__ch=[];
}if(bh.getLayoutParent()==this){qx.lang.Array.remove(this.__ch,bh);
}qx.lang.Array.insertBefore(this.__ch,bh,bi);
this.__cj(bh,bj);
},_addAfter:function(cr,cs,ct){{};

if(cr==cs){return;
}
if(!this.__ch){this.__ch=[];
}if(cr.getLayoutParent()==this){qx.lang.Array.remove(this.__ch,cr);
}qx.lang.Array.insertAfter(this.__ch,cr,cs);
this.__cj(cr,ct);
},_remove:function(dp){if(!this.__ch){throw new Error("This widget has no children!");
}qx.lang.Array.remove(this.__ch,dp);
this.__ck(dp);
},_removeAt:function(bv){if(!this.__ch){throw new Error("This widget has no children!");
}var bw=this.__ch[bv];
qx.lang.Array.removeAt(this.__ch,bv);
this.__ck(bw);
return bw;
},_removeAll:function(){if(!this.__ch){return;
}var gI=this.__ch.concat();
this.__ch.length=0;

for(var i=gI.length-1;i>=0;i--){this.__ck(gI[i]);
}qx.ui.core.queue.Layout.add(this);
},_afterAddChild:null,_afterRemoveChild:null,__cj:function(bx,by){{};
var parent=bx.getLayoutParent();

if(parent&&parent!=this){parent._remove(bx);
}bx.setLayoutParent(this);
if(by){bx.setLayoutProperties(by);
}else{this.updateLayoutProperties();
}if(this._afterAddChild){this._afterAddChild(bx);
}},__ck:function(F){{};

if(F.getLayoutParent()!==this){throw new Error("Remove Error: "+F+" is not a child of this widget!");
}F.setLayoutParent(null);
if(this.__cd){this.__cd.invalidateChildrenCache();
}qx.ui.core.queue.Layout.add(this);
if(this._afterRemoveChild){this._afterRemoveChild(F);
}},capture:function(bB){this.getContainerElement().capture(bB);
},releaseCapture:function(){this.getContainerElement().releaseCapture();
},_applyPadding:function(cT,cU,name){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
},_createProtectorElement:function(){if(this.__ca){return;
}var bn=this.__ca=new qx.html.Element;
{};
bn.setStyles({position:fy,top:0,left:0,zIndex:7});
var bo=this.getBounds();

if(bo){this.__ca.setStyles({width:bo.width+fs,height:bo.height+fs});
}if(qx.core.Variant.isSet(fx,eL)){bn.setStyles({backgroundImage:dQ+qx.util.ResourceManager.getInstance().toUri(eV)+dP,backgroundRepeat:fH});
}this.getContainerElement().add(bn);
},_applyDecorator:function(T,U){{};
var Y=qx.ui.core.Widget.__bV;
var W=this.getContainerElement();
if(!this.__ca&&!qx.bom.client.Feature.CSS_POINTER_EVENTS){this._createProtectorElement();
}if(U){W.remove(this.__bX);
Y.poolDecorator(this.__bX);
}if(T){var X=this.__bX=Y.getDecoratorElement(T);
X.setStyle(fg,5);
var V=this.getBackgroundColor();
X.tint(V);
W.add(X);
}else{delete this.__bX;
this._applyBackgroundColor(this.getBackgroundColor());
}if(T&&!U&&V){this.getContainerElement().setStyle(eO,null);
}if(this.__ce(U,T)){this._updateInsets=true;
qx.ui.core.queue.Layout.add(this);
}else if(T){var ba=this.getBounds();

if(ba){X.resize(ba.width,ba.height);
this.__ca&&
this.__ca.setStyles({width:ba.width+fs,height:ba.height+fs});
}}},_applyShadow:function(cg,ch){var co=qx.ui.core.Widget.__bW;
var cj=this.getContainerElement();
if(ch){cj.remove(this.__bY);
co.poolDecorator(this.__bY);
}if(cg){var cl=this.__bY=co.getDecoratorElement(cg);
cj.add(cl);
var cn=cl.getInsets();
cl.setStyles({left:(-cn.left)+fs,top:(-cn.top)+fs});
var cm=this.getBounds();

if(cm){var ck=cm.width+cn.left+cn.right;
var ci=cm.height+cn.top+cn.bottom;
cl.resize(ck,ci);
}cl.tint(null);
}else{delete this.__bY;
}},_applyToolTipText:function(bk,bl){if(qx.core.Variant.isSet(fC,fm)){if(this.__cc){return;
}var bm=qx.locale.Manager.getInstance();
this.__cc=bm.addListener(eX,function(){if(bk&&bk.translate){this.setToolTipText(bk.translate());
}},this);
}},_applyTextColor:function(gz,gA){},_applyZIndex:function(bT,bU){this.getContainerElement().setStyle(fg,bT==null?0:bT);
},_applyVisibility:function(bp,bq){var br=this.getContainerElement();

if(bp===fo){br.show();
}else{br.hide();
}var parent=this.$$parent;

if(parent&&(bq==null||bp==null||bq===fk||bp===fk)){parent.invalidateLayoutChildren();
}qx.ui.core.queue.Visibility.add(this);
},_applyOpacity:function(gs,gt){this.getContainerElement().setStyle(fi,gs==1?null:gs);
if(qx.core.Variant.isSet(fx,eL)){if(!qx.Class.isSubClassOf(this.getContentElement().constructor,qx.html.Image)){var gu=(gs==1||gs==null)?null:0.99;
this.getContentElement().setStyle(fi,gu);
}}},_applyCursor:function(bz,bA){if(bz==null&&!this.isSelectable()){bz=fh;
}this.getContainerElement().setStyle(ew,bz,qx.bom.client.Engine.OPERA);
},_applyBackgroundColor:function(q,r){var s=this.getBackgroundColor();
var u=this.getContainerElement();

if(this.__bX){this.__bX.tint(s);
u.setStyle(eO,null);
}else{var t=qx.theme.manager.Color.getInstance().resolve(s);
u.setStyle(eO,t);
}},_applyFont:function(bs,bt){},__cl:null,$$stateChanges:null,_forwardStates:null,hasState:function(cp){var cq=this.__cl;
return cq&&cq[cp];
},addState:function(bc){var bd=this.__cl;

if(!bd){bd=this.__cl={};
}
if(bd[bc]){return;
}this.__cl[bc]=true;
if(bc===fz){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var bg=this.__co;

if(forward&&forward[bc]&&bg){var be;

for(var bf in bg){be=bg[bf];

if(be instanceof qx.ui.core.Widget){bg[bf].addState(bc);
}}}},removeState:function(cv){var cw=this.__cl;

if(!cw||!cw[cv]){return;
}delete this.__cl[cv];
if(cv===fz){this.syncAppearance();
}else if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var cz=this.__co;

if(forward&&forward[cv]&&cz){for(var cy in cz){var cx=cz[cy];

if(cx instanceof qx.ui.core.Widget){cx.removeState(cv);
}}}},replaceState:function(c,d){var f=this.__cl;

if(!f){f=this.__cl={};
}
if(!f[d]){f[d]=true;
}
if(f[c]){delete f[c];
}
if(!qx.ui.core.queue.Visibility.isVisible(this)){this.$$stateChanges=true;
}else{qx.ui.core.queue.Appearance.add(this);
}var forward=this._forwardStates;
var j=this.__co;

if(forward&&forward[d]&&j){for(var h in j){var g=j[h];

if(g instanceof qx.ui.core.Widget){g.replaceState(c,d);
}}}},__cm:null,__cn:null,syncAppearance:function(){var dv=this.__cl;
var du=this.__cm;
var dw=qx.theme.manager.Appearance.getInstance();
var ds=qx.core.Property.$$method.setThemed;
var dA=qx.core.Property.$$method.resetThemed;
if(this.__cn){delete this.__cn;
if(du){var dr=dw.styleFrom(du,dv,null,this.getAppearance());
if(dr){du=null;
}}}if(!du){var dt=this;
var dz=[];

do{dz.push(dt.$$subcontrol||dt.getAppearance());
}while(dt=dt.$$subparent);
du=this.__cm=dz.reverse().join(eB).replace(/#[0-9]+/g,eC);
}var dx=dw.styleFrom(du,dv,null,this.getAppearance());

if(dx){var dy;

if(dr){for(var dy in dr){if(dx[dy]===undefined){this[dA[dy]]();
}}}{};
for(var dy in dx){dx[dy]===undefined?this[dA[dy]]():this[ds[dy]](dx[dy]);
}}else if(dr){for(var dy in dr){this[dA[dy]]();
}}this.fireDataEvent(fL,this.__cl);
},_applyAppearance:function(gB,gC){this.updateAppearance();
},checkAppearanceNeeds:function(){if(!this.__cb){qx.ui.core.queue.Appearance.add(this);
this.__cb=true;
}else if(this.$$stateChanges){qx.ui.core.queue.Appearance.add(this);
delete this.$$stateChanges;
}},updateAppearance:function(){this.__cn=true;
qx.ui.core.queue.Appearance.add(this);
var cf=this.__co;

if(cf){var cd;

for(var ce in cf){cd=cf[ce];

if(cd instanceof qx.ui.core.Widget){cd.updateAppearance();
}}}},syncWidget:function(){},getEventTarget:function(){var bH=this;

while(bH.getAnonymous()){bH=bH.getLayoutParent();

if(!bH){return null;
}}return bH;
},getFocusTarget:function(){var bV=this;

if(!bV.getEnabled()){return null;
}
while(bV.getAnonymous()||!bV.getFocusable()){bV=bV.getLayoutParent();

if(!bV||!bV.getEnabled()){return null;
}}return bV;
},getFocusElement:function(){return this.getContainerElement();
},isTabable:function(){return (!!this.getContainerElement().getDomElement())&&this.isFocusable();
},_applyFocusable:function(gk,gl){var gm=this.getFocusElement();
if(gk){var gn=this.getTabIndex();

if(gn==null){gn=1;
}gm.setAttribute(eP,gn);
if(qx.core.Variant.isSet(fx,eL)){gm.setAttribute(dS,eb);
}else{gm.setStyle(dT,dR);
}}else{if(gm.isNativelyFocusable()){gm.setAttribute(eP,-1);
}else if(gl){gm.setAttribute(eP,null);
}}},_applyKeepFocus:function(gv){var gw=this.getFocusElement();
gw.setAttribute(eW,gv?fm:null);
},_applyKeepActive:function(gU){var gV=this.getContainerElement();
gV.setAttribute(eH,gU?fm:null);
},_applyTabIndex:function(cV){if(cV==null){cV=1;
}else if(cV<1||cV>32000){throw new Error("TabIndex property must be between 1 and 32000");
}
if(this.getFocusable()&&cV!=null){this.getFocusElement().setAttribute(eP,cV);
}},_applySelectable:function(bu){this._applyCursor(this.getCursor());
this.getContainerElement().setSelectable(bu);
this.getContentElement().setSelectable(bu);
},_applyEnabled:function(gQ,gR){if(gQ===false){this.addState(ft);
this.removeState(fz);
if(this.isFocusable()){this.removeState(eN);
this._applyFocusable(false,true);
}if(this.isDraggable()){this._applyDraggable(false,true);
}if(this.isDroppable()){this._applyDroppable(false,true);
}}else{this.removeState(ft);
if(this.isFocusable()){this._applyFocusable(true,false);
}if(this.isDraggable()){this._applyDraggable(true,false);
}if(this.isDroppable()){this._applyDroppable(true,false);
}}},_applyNativeContextMenu:function(gS,gT,name){},_applyContextMenu:function(gO,gP){if(gP){gP.removeState(eR);

if(gP.getOpener()==this){gP.resetOpener();
}
if(!gO){this.removeListener(eR,this._onContextMenuOpen);
gP.removeListener(eM,this._onBeforeContextMenuOpen,this);
}}
if(gO){gO.setOpener(this);
gO.addState(eR);

if(!gP){this.addListener(eR,this._onContextMenuOpen);
gO.addListener(eM,this._onBeforeContextMenuOpen,this);
}}},_onContextMenuOpen:function(e){this.getContextMenu().openAtMouse(e);
e.stop();
},_onBeforeContextMenuOpen:function(e){if(e.getData()==fo&&this.hasListener(dB)){this.fireDataEvent(dB,e);
}},_onStopEvent:function(e){e.stopPropagation();
},_applyDraggable:function(cE,cF){if(!this.isEnabled()&&cE===true){cE=false;
}qx.ui.core.DragDropCursor.getInstance();
if(cE){this.addListener(fB,this._onDragStart);
this.addListener(fv,this._onDrag);
this.addListener(fb,this._onDragEnd);
this.addListener(fc,this._onDragChange);
}else{this.removeListener(fB,this._onDragStart);
this.removeListener(fv,this._onDrag);
this.removeListener(fb,this._onDragEnd);
this.removeListener(fc,this._onDragChange);
}this.getContainerElement().setAttribute(fM,cE?fm:null);
},_applyDroppable:function(v,w){if(!this.isEnabled()&&v===true){v=false;
}this.getContainerElement().setAttribute(ex,v?fm:null);
},_onDragStart:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
this.getApplicationRoot().setGlobalCursor(fh);
},_onDrag:function(e){qx.ui.core.DragDropCursor.getInstance().placeToMouse(e);
},_onDragEnd:function(e){qx.ui.core.DragDropCursor.getInstance().moveTo(-1000,-1000);
this.getApplicationRoot().resetGlobalCursor();
},_onDragChange:function(e){var D=qx.ui.core.DragDropCursor.getInstance();
var E=e.getCurrentAction();
E?D.setAction(E):D.resetAction();
},visualizeFocus:function(){this.addState(eN);
},visualizeBlur:function(){this.removeState(eN);
},scrollChildIntoView:function(cY,da,db,dc){this.scrollChildIntoViewX(cY,da,dc);
this.scrollChildIntoViewY(cY,db,dc);
},scrollChildIntoViewX:function(go,gp,gq){this.getContentElement().scrollChildIntoViewX(go.getContainerElement(),gp,gq);
},scrollChildIntoViewY:function(cQ,cR,cS){this.getContentElement().scrollChildIntoViewY(cQ.getContainerElement(),cR,cS);
},focus:function(){if(this.isFocusable()){this.getFocusElement().focus();
}else{throw new Error("Widget is not focusable!");
}},blur:function(){if(this.isFocusable()){this.getFocusElement().blur();
}else{throw new Error("Widget is not focusable!");
}},activate:function(){this.getContainerElement().activate();
},deactivate:function(){this.getContainerElement().deactivate();
},tabFocus:function(){this.getFocusElement().focus();
},hasChildControl:function(df){if(!this.__co){return false;
}return !!this.__co[df];
},__co:null,_getCreatedChildControls:function(){return this.__co;
},getChildControl:function(k,m){if(!this.__co){if(m){return null;
}this.__co={};
}var n=this.__co[k];

if(n){return n;
}
if(m===true){return null;
}return this._createChildControl(k);
},_showChildControl:function(o){var p=this.getChildControl(o);
p.show();
return p;
},_excludeChildControl:function(bC){var bD=this.getChildControl(bC,true);

if(bD){bD.exclude();
}},_isChildControlVisible:function(cH){var cI=this.getChildControl(cH,true);

if(cI){return cI.isVisible();
}return false;
},_createChildControl:function(gJ){if(!this.__co){this.__co={};
}else if(this.__co[gJ]){throw new Error("Child control '"+gJ+"' already created!");
}var gN=gJ.indexOf(ei);

if(gN==-1){var gK=this._createChildControlImpl(gJ);
}else{var gK=this._createChildControlImpl(gJ.substring(0,gN));
}
if(!gK){throw new Error("Unsupported control: "+gJ);
}gK.$$subcontrol=gJ;
gK.$$subparent=this;
var gL=this.__cl;
var forward=this._forwardStates;

if(gL&&forward&&gK instanceof qx.ui.core.Widget){for(var gM in gL){if(forward[gM]){gK.addState(gM);
}}}this.fireDataEvent(dI,gK);
return this.__co[gJ]=gK;
},_createChildControlImpl:function(cJ){return null;
},_disposeChildControls:function(){var cD=this.__co;

if(!cD){return;
}var cB=qx.ui.core.Widget;

for(var cC in cD){var cA=cD[cC];

if(!cB.contains(this,cA)){cA.destroy();
}else{cA.dispose();
}}delete this.__co;
},_findTopControl:function(){var cu=this;

while(cu){if(!cu.$$subparent){return cu;
}cu=cu.$$subparent;
}return null;
},getContainerLocation:function(gG){var gH=this.getContainerElement().getDomElement();
return gH?qx.bom.element.Location.get(gH,gG):null;
},getContentLocation:function(fO){var fP=this.getContentElement().getDomElement();
return fP?qx.bom.element.Location.get(fP,fO):null;
},setDomLeft:function(cO){var cP=this.getContainerElement().getDomElement();

if(cP){cP.style.left=cO+fs;
}else{throw new Error("DOM element is not yet created!");
}},setDomTop:function(gi){var gj=this.getContainerElement().getDomElement();

if(gj){gj.style.top=gi+fs;
}else{throw new Error("DOM element is not yet created!");
}},setDomPosition:function(B,top){var C=this.getContainerElement().getDomElement();

if(C){C.style.left=B+fs;
C.style.top=top+fs;
}else{throw new Error("DOM element is not yet created!");
}},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
},clone:function(){var dd=arguments.callee.base.call(this);

if(this.getChildren){var de=this.getChildren();

for(var i=0,l=de.length;i<l;i++){dd.add(de[i].clone());
}}return dd;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){if(qx.core.Variant.isSet(fC,fm)){if(this.__cc){qx.locale.Manager.getInstance().removeListenerById(this.__cc);
}}this.getContainerElement().setAttribute(ff,null,true);
this._disposeChildControls();
qx.ui.core.queue.Appearance.remove(this);
qx.ui.core.queue.Layout.remove(this);
qx.ui.core.queue.Visibility.remove(this);
qx.ui.core.queue.Widget.remove(this);
}if(!qx.core.ObjectRegistry.inShutDown){var cc=qx.ui.core.Widget;
var cb=this.getContainerElement();

if(this.__bX){cb.remove(this.__bX);
cc.__bV.poolDecorator(this.__bX);
}
if(this.__bY){cb.remove(this.__bY);
cc.__bW.poolDecorator(this.__bY);
}this.clearSeparators();
this.__bX=this.__bY=this.__cf=null;
}else{this._disposeArray(ed);
this._disposeObjects(dH,dJ);
}this._disposeArray(dW);
this.__cl=this.__co=null;
this._disposeObjects(dU,dL,fJ,ef);
}});
})();
(function(){var j="label",i="icon",h="Boolean",g="both",f="String",e="left",d="changeGap",c="changeShow",b="bottom",a="_applyCenter",w="changeIcon",v="qx.ui.basic.Atom",u="changeLabel",t="Integer",s="_applyIconPosition",r="top",q="right",p="_applyRich",o="_applyIcon",n="_applyShow",l="_applyLabel",m="_applyGap",k="atom";
qx.Class.define(v,{extend:qx.ui.core.Widget,construct:function(L,M){{};
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Atom());

if(L!=null){this.setLabel(L);
}
if(M!=null){this.setIcon(M);
}},properties:{appearance:{refine:true,init:k},label:{apply:l,nullable:true,check:f,event:u},rich:{check:h,init:false,apply:p},icon:{check:f,apply:o,nullable:true,themeable:true,event:w},gap:{check:t,nullable:false,event:d,apply:m,themeable:true,init:4},show:{init:g,check:[g,j,i],themeable:true,inheritable:true,apply:n,event:c},iconPosition:{init:e,check:[r,q,b,e],themeable:true,apply:s},center:{init:false,check:h,themeable:true,apply:a}},members:{_createChildControlImpl:function(F){var G;

switch(F){case j:G=new qx.ui.basic.Label(this.getLabel());
G.setAnonymous(true);
G.setRich(this.getRich());
this._add(G);

if(this.getLabel()==null||this.getShow()===i){G.exclude();
}break;
case i:G=new qx.ui.basic.Image(this.getIcon());
G.setAnonymous(true);
this._addAt(G,0);

if(this.getIcon()==null||this.getShow()===j){G.exclude();
}break;
}return G||arguments.callee.base.call(this,F);
},_forwardStates:{focused:true,hovered:true},_handleLabel:function(){if(this.getLabel()==null||this.getShow()===i){this._excludeChildControl(j);
}else{this._showChildControl(j);
}},_handleIcon:function(){if(this.getIcon()==null||this.getShow()===j){this._excludeChildControl(i);
}else{this._showChildControl(i);
}},_applyLabel:function(P,Q){var R=this.getChildControl(j,true);

if(R){R.setValue(P);
}this._handleLabel();
},_applyRich:function(x,y){var z=this.getChildControl(j,true);

if(z){z.setRich(x);
}},_applyIcon:function(A,B){var C=this.getChildControl(i,true);

if(C){C.setSource(A);
}this._handleIcon();
},_applyGap:function(J,K){this._getLayout().setGap(J);
},_applyShow:function(D,E){this._handleLabel();
this._handleIcon();
},_applyIconPosition:function(N,O){this._getLayout().setIconPosition(N);
},_applyCenter:function(H,I){this._getLayout().setCenter(H);
}}});
})();
(function(){var m="middle",k="qx.ui.layout.Util",j="left",h="center",g="top",f="bottom",e="right";
qx.Class.define(k,{statics:{PERCENT_VALUE:/[0-9]+(?:\.[0-9]+)?%/,computeFlexOffsets:function(x,y,z){var B,F,A,G;
var C=y>z;
var H=Math.abs(y-z);
var I,D;
var E={};

for(F in x){B=x[F];
E[F]={potential:C?B.max-B.value:B.value-B.min,flex:C?B.flex:1/B.flex,offset:0};
}while(H!=0){G=Infinity;
A=0;

for(F in E){B=E[F];

if(B.potential>0){A+=B.flex;
G=Math.min(G,B.potential/B.flex);
}}if(A==0){break;
}G=Math.min(H,G*A)/A;
I=0;

for(F in E){B=E[F];

if(B.potential>0){D=Math.min(H,B.potential,Math.ceil(G*B.flex));
I+=D-G*B.flex;

if(I>=1){I-=1;
D-=1;
}B.potential-=D;

if(C){B.offset+=D;
}else{B.offset-=D;
}H-=D;
}}}return E;
},computeHorizontalAlignOffset:function(r,s,t,u,v){if(u==null){u=0;
}
if(v==null){v=0;
}var w=0;

switch(r){case j:w=u;
break;
case e:w=t-s-v;
break;
case h:w=Math.round((t-s)/2);
if(w<u){w=u;
}else if(w<v){w=Math.max(u,t-s-v);
}break;
}return w;
},computeVerticalAlignOffset:function(R,S,T,U,V){if(U==null){U=0;
}
if(V==null){V=0;
}var W=0;

switch(R){case g:W=U;
break;
case f:W=T-S-V;
break;
case m:W=Math.round((T-S)/2);
if(W<U){W=U;
}else if(W<V){W=Math.max(U,T-S-V);
}break;
}return W;
},collapseMargins:function(a){var b=0,d=0;

for(var i=0,l=arguments.length;i<l;i++){var c=arguments[i];

if(c<0){d=Math.min(d,c);
}else if(c>0){b=Math.max(b,c);
}}return b+d;
},computeHorizontalGaps:function(n,o,p){if(o==null){o=0;
}var q=0;

if(p){q+=n[0].getMarginLeft();

for(var i=1,l=n.length;i<l;i+=1){q+=this.collapseMargins(o,n[i-1].getMarginRight(),n[i].getMarginLeft());
}q+=n[l-1].getMarginRight();
}else{for(var i=1,l=n.length;i<l;i+=1){q+=n[i].getMarginLeft()+n[i].getMarginRight();
}q+=(o*(l-1));
}return q;
},computeVerticalGaps:function(bm,bn,bo){if(bn==null){bn=0;
}var bp=0;

if(bo){bp+=bm[0].getMarginTop();

for(var i=1,l=bm.length;i<l;i+=1){bp+=this.collapseMargins(bn,bm[i-1].getMarginBottom(),bm[i].getMarginTop());
}bp+=bm[l-1].getMarginBottom();
}else{for(var i=1,l=bm.length;i<l;i+=1){bp+=bm[i].getMarginTop()+bm[i].getMarginBottom();
}bp+=(bn*(l-1));
}return bp;
},computeHorizontalSeparatorGaps:function(J,K,L){var O=qx.theme.manager.Decoration.getInstance().resolve(L);
var N=O.getInsets();
var M=N.left+N.right;
var P=0;

for(var i=0,l=J.length;i<l;i++){var Q=J[i];
P+=Q.getMarginLeft()+Q.getMarginRight();
}P+=(K+M+K)*(l-1);
return P;
},computeVerticalSeparatorGaps:function(be,bf,bg){var bj=qx.theme.manager.Decoration.getInstance().resolve(bg);
var bi=bj.getInsets();
var bh=bi.top+bi.bottom;
var bk=0;

for(var i=0,l=be.length;i<l;i++){var bl=be[i];
bk+=bl.getMarginTop()+bl.getMarginBottom();
}bk+=(bf+bh+bf)*(l-1);
return bk;
},arrangeIdeals:function(X,Y,ba,bb,bc,bd){if(Y<X||bc<bb){if(Y<X&&bc<bb){Y=X;
bc=bb;
}else if(Y<X){bc-=(X-Y);
Y=X;
if(bc<bb){bc=bb;
}}else if(bc<bb){Y-=(bb-bc);
bc=bb;
if(Y<X){Y=X;
}}}
if(Y>ba||bc>bd){if(Y>ba&&bc>bd){Y=ba;
bc=bd;
}else if(Y>ba){bc+=(Y-ba);
Y=ba;
if(bc>bd){bc=bd;
}}else if(bc>bd){Y+=(bc-bd);
bc=bd;
if(Y>ba){Y=ba;
}}}return {begin:Y,end:bc};
}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(d){return d.parentNode;
},canDispatchEvent:function(b,event,c){return b.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(i,j){return qx.Class.supportsEvent(i.constructor,j);
},registerEvent:function(e,f,g){},unregisterEvent:function(b,c,d){}},defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var i="interval",h="qx.event.Timer",g="_applyInterval",f="_applyEnabled",d="Boolean",c="qx.event.type.Event",b="Integer";
qx.Class.define(h,{extend:qx.core.Object,construct:function(a){arguments.callee.base.call(this);
this.setEnabled(false);

if(a!=null){this.setInterval(a);
}var self=this;
this.__fQ=function(){self._oninterval.call(self);
};
},events:{"interval":c},statics:{once:function(l,m,n){var o=new qx.event.Timer(n);
o.addListener(i,function(e){o.stop();
l.call(m,e);
o.dispose();
m=null;
},m);
o.start();
return o;
}},properties:{enabled:{init:true,check:d,apply:f},interval:{check:b,init:1000,apply:g}},members:{__fR:null,__fQ:null,_applyInterval:function(r,s){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__fR);
this.__fR=null;
}else if(p){this.__fR=window.setInterval(this.__fQ,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(j){this.setInterval(j);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(k){this.stop();
this.startWith(k);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(i);
}})},destruct:function(){if(this.__fR){window.clearInterval(this.__fR);
}this.__fR=this.__fQ=null;
}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(g){arguments.callee.base.call(this);
this.__dj=g;
this.__dk=g.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__dj:null,__dk:null,canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(i,j,k){}},destruct:function(){this.__dj=this.__dk=null;
},defer:function(h){qx.event.Registration.addHandler(h);
}});
})();
(function(){var O="qx.client",N="mouseup",M="click",L="mousedown",K="contextmenu",J="mousewheel",I="dblclick",H="mshtml",G="mouseover",F="mouseout",A="DOMMouseScroll",E="mousemove",D="on",z="mshtml|webkit|opera",y="useraction",C="gecko|webkit",B="qx.event.handler.Mouse";
qx.Class.define(B,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(T){arguments.callee.base.call(this);
this.__ez=T;
this.__eA=T.getWindow();
this.__eB=this.__eA.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{__eC:null,__eD:null,__eE:null,__eF:null,__eG:null,__ez:null,__eA:null,__eB:null,canHandleEvent:function(R,S){},registerEvent:qx.bom.client.System.IPHONE?
function(g,h,i){g[D+h]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.bom.client.System.IPHONE?
function(s,t,u){s[D+t]=undefined;
}:qx.lang.Function.returnNull,__eH:function(n,o,p){if(!p){p=n.target||n.srcElement;
}if(p&&p.nodeType){qx.event.Registration.fireEvent(p,o||n.type,o==J?qx.event.type.MouseWheel:qx.event.type.Mouse,[n,p,null,true,true]);
}qx.event.Registration.fireEvent(this.__eA,y,qx.event.type.Data,[o||n.type]);
},_initButtonObserver:function(){this.__eC=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__eB,L,this.__eC);
Event.addNativeListener(this.__eB,N,this.__eC);
Event.addNativeListener(this.__eB,M,this.__eC);
Event.addNativeListener(this.__eB,I,this.__eC);
Event.addNativeListener(this.__eB,K,this.__eC);
},_initMoveObserver:function(){this.__eD=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__eB,E,this.__eD);
Event.addNativeListener(this.__eB,G,this.__eD);
Event.addNativeListener(this.__eB,F,this.__eD);
},_initWheelObserver:function(){this.__eE=qx.lang.Function.listener(this._onWheelEvent,this);
var Event=qx.bom.Event;
var v=qx.core.Variant.isSet(O,z)?J:A;
var w=qx.core.Variant.isSet(O,H)?this.__eB:this.__eA;
Event.addNativeListener(w,v,this.__eE);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__eB,L,this.__eC);
Event.removeNativeListener(this.__eB,N,this.__eC);
Event.removeNativeListener(this.__eB,M,this.__eC);
Event.removeNativeListener(this.__eB,I,this.__eC);
Event.removeNativeListener(this.__eB,K,this.__eC);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__eB,E,this.__eD);
Event.removeNativeListener(this.__eB,G,this.__eD);
Event.removeNativeListener(this.__eB,F,this.__eD);
},_stopWheelObserver:function(){var Event=qx.bom.Event;
var q=qx.core.Variant.isSet(O,z)?J:A;
var r=qx.core.Variant.isSet(O,H)?this.__eB:this.__eA;
Event.removeNativeListener(r,q,this.__eE);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(P){this.__eH(P);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(d){var e=d.type;
var f=d.target||d.srcElement;
if(qx.core.Variant.isSet(O,C)){if(f&&f.nodeType==3){f=f.parentNode;
}}
if(this.__eI){this.__eI(d,e,f);
}
if(this.__eK){this.__eK(d,e,f);
}this.__eH(d,e,f);

if(this.__eJ){this.__eJ(d,e,f);
}
if(this.__eL){this.__eL(d,e,f);
}this.__eF=e;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(Q){this.__eH(Q,J);
}),__eI:qx.core.Variant.select(O,{"webkit":function(a,b,c){if(qx.bom.client.Engine.VERSION<530){if(b==K){this.__eH(a,N,c);
}}},"default":null}),__eJ:qx.core.Variant.select(O,{"opera":function(U,V,W){if(V==N&&U.button==2){this.__eH(U,K,W);
}},"default":null}),__eK:qx.core.Variant.select(O,{"mshtml":function(X,Y,ba){if(Y==N&&this.__eF==M){this.__eH(X,L,ba);
}else if(Y==I){this.__eH(X,M,ba);
}},"default":null}),__eL:qx.core.Variant.select(O,{"mshtml":null,"default":function(j,k,l){switch(k){case L:this.__eG=l;
break;
case N:if(l!==this.__eG){var m=qx.dom.Hierarchy.getCommonParent(l,this.__eG);
this.__eH(j,M,m);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__ez=this.__eA=this.__eB=this.__eG=null;
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var d="qx.client",c="qx.bom.Viewport";
qx.Class.define(c,{statics:{getWidth:qx.core.Variant.select(d,{"opera":function(g){if(qx.bom.client.Engine.VERSION<9.5){return (g||window).document.body.clientWidth;
}else{var h=(g||window).document;
return qx.bom.Document.isStandardMode(g)?h.documentElement.clientWidth:h.body.clientWidth;
}},"webkit":function(i){if(qx.bom.client.Engine.VERSION<523.15){return (i||window).innerWidth;
}else{var j=(i||window).document;
return qx.bom.Document.isStandardMode(i)?j.documentElement.clientWidth:j.body.clientWidth;
}},"default":function(n){var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientWidth:o.body.clientWidth;
}}),getHeight:qx.core.Variant.select(d,{"opera":function(p){if(qx.bom.client.Engine.VERSION<9.5){return (p||window).document.body.clientHeight;
}else{var q=(p||window).document;
return qx.bom.Document.isStandardMode(p)?q.documentElement.clientHeight:q.body.clientHeight;
}},"webkit":function(k){if(qx.bom.client.Engine.VERSION<523.15){return (k||window).innerHeight;
}else{var l=(k||window).document;
return qx.bom.Document.isStandardMode(k)?l.documentElement.clientHeight:l.body.clientHeight;
}},"default":function(e){var f=(e||window).document;
return qx.bom.Document.isStandardMode(e)?f.documentElement.clientHeight:f.body.clientHeight;
}}),getScrollLeft:qx.core.Variant.select(d,{"mshtml":function(a){var b=(a||window).document;
return b.documentElement.scrollLeft||b.body.scrollLeft;
},"default":function(t){return (t||window).pageXOffset;
}}),getScrollTop:qx.core.Variant.select(d,{"mshtml":function(r){var s=(r||window).document;
return s.documentElement.scrollTop||s.body.scrollTop;
},"default":function(m){return (m||window).pageYOffset;
}})}});
})();
(function(){var j="",i="undefined",h="qx.client",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",y="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",n="dateTime",o="maxLength",l="mshtml",m="cellPadding",k="colSpan";
qx.Class.define(e,{statics:{__fN:{names:{"class":b,"for":x,html:q,text:qx.core.Variant.isSet(h,l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Variant.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(A){var B=[];
var D=this.__fN.runtime;

for(var C in A){if(!D[C]){B.push(C,t,A[C],y);
}}return B.join(j);
},get:qx.core.Variant.select(h,{"mshtml":function(H,name){var J=this.__fN;
var I;
name=J.names[name]||name;
if(J.original[name]){I=H.getAttribute(name,2);
}else if(J.property[name]){I=H[name];

if(typeof J.propertyDefault[name]!==i&&I==J.propertyDefault[name]){if(typeof J.bools[name]===i){return null;
}else{return I;
}}}else{I=H.getAttribute(name);
}if(J.bools[name]){return !!I;
}return I;
},"default":function(K,name){var M=this.__fN;
var L;
name=M.names[name]||name;
if(M.property[name]){L=K[name];

if(typeof M.propertyDefault[name]!==i&&L==M.propertyDefault[name]){if(typeof M.bools[name]===i){return null;
}else{return L;
}}}else{L=K.getAttribute(name);
}if(M.bools[name]){return !!L;
}return L;
}}),set:function(E,name,F){var G=this.__fN;
name=G.names[name]||name;
if(G.bools[name]){F=!!F;
}if(G.property[name]&&(!(E[name]===undefined)||G.qxProperties[name])){if(F==null){if(G.removeableProperties[name]){E.removeAttribute(name);
return;
}else if(typeof G.propertyDefault[name]!==i){F=G.propertyDefault[name];
}}E[name]=F;
}else{if(F===true){E.setAttribute(name,name);
}else if(F===false||F===null){E.removeAttribute(name);
}else{E.setAttribute(name,F);
}}},reset:function(z,name){this.set(z,name,null);
}}});
})();
(function(){var d="qx.ui.core.MChildrenHandling";
qx.Mixin.define(d,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(p){return this._indexOf(p);
},add:function(j,k){this._add(j,k);
},addAt:function(a,b,c){this._addAt(a,b,c);
},addBefore:function(l,m,n){this._addBefore(l,m,n);
},addAfter:function(e,f,g){this._addAfter(e,f,g);
},remove:function(h){this._remove(h);
},removeAt:function(o){return this._removeAt(o);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(i){i.getChildren=i._getChildren;
i.hasChildren=i._hasChildren;
i.indexOf=i._indexOf;
i.add=i._add;
i.addAt=i._addAt;
i.addBefore=i._addBefore;
i.addAfter=i._addAfter;
i.remove=i._remove;
i.removeAt=i._removeAt;
i.removeAll=i._removeAll;
}}});
})();
(function(){var a="qx.ui.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(c){return this._setLayout(c);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(b){b.getLayout=b._getLayout;
b.setLayout=b._setLayout;
}}});
})();
(function(){var d="qx.event.type.Data",c="qx.ui.container.Composite",b="addChildWidget",a="removeChildWidget";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MLayoutHandling],construct:function(i){arguments.callee.base.call(this);

if(i!=null){this._setLayout(i);
}},events:{addChildWidget:d,removeChildWidget:d},members:{_afterAddChild:function(h){this.fireNonBubblingEvent(b,qx.event.type.Data,[h]);
},_afterRemoveChild:function(e){this.fireNonBubblingEvent(a,qx.event.type.Data,[e]);
}},defer:function(f,g){qx.ui.core.MChildrenHandling.remap(g);
qx.ui.core.MLayoutHandling.remap(g);
}});
})();
(function(){var b="appearance",a="qx.ui.core.queue.Appearance";
qx.Class.define(a,{statics:{__gr:{},remove:function(c){delete this.__gr[c.$$hash];
},add:function(i){var j=this.__gr;

if(j[i.$$hash]){return;
}j[i.$$hash]=i;
qx.ui.core.queue.Manager.scheduleFlush(b);
},has:function(d){return !!this.__gr[d.$$hash];
},flush:function(){var h=qx.ui.core.queue.Visibility;
var e=this.__gr;
var g;

for(var f in e){g=e[f];
delete e[f];
if(h.isVisible(g)){g.syncAppearance();
}else{g.$$stateChanges=true;
}}}}});
})();
(function(){var b="qx.ui.core.queue.Manager",a="useraction";
qx.Class.define(b,{statics:{__ee:false,__ef:{},__eg:0,MAX_RETRIES:10,scheduleFlush:function(c){var self=qx.ui.core.queue.Manager;
self.__ef[c]=true;

if(!self.__ee){self.__ej.schedule();
self.__ee=true;
}},flush:function(){var self=qx.ui.core.queue.Manager;
if(self.__eh){return;
}self.__eh=true;
self.__ej.cancel();
var f=self.__ef;
self.__ei(function(){while(f.visibility||f.widget||f.appearance||f.layout||f.element){if(f.widget){delete f.widget;
qx.ui.core.queue.Widget.flush();
}
if(f.visibility){delete f.visibility;
qx.ui.core.queue.Visibility.flush();
}
if(f.appearance){delete f.appearance;
qx.ui.core.queue.Appearance.flush();
}if(f.widget||f.visibility||f.appearance){continue;
}
if(f.layout){delete f.layout;
qx.ui.core.queue.Layout.flush();
}if(f.widget||f.visibility||f.appearance||f.layout){continue;
}
if(f.element){delete f.element;
qx.html.Element.flush();
}}},function(){self.__ee=false;
});
self.__ei(function(){if(f.dispose){delete f.dispose;
qx.ui.core.queue.Dispose.flush();
}},function(){self.__eh=false;
});
self.__eg=0;
},__ei:function(g,h){var self=qx.ui.core.queue.Manager;

try{g();
}catch(e){{};
self.__ee=false;
self.__eh=false;
self.__eg+=1;

if(self.__eg<=self.MAX_RETRIES){self.scheduleFlush();
}else{throw new Error("Fatal Error: Flush terminated "+(self.__eg-1)+" times in a row"+" due to exceptions in user code. The application has to be reloaded!");
}throw e;
}finally{h();
}}},defer:function(d){d.__ej=new qx.util.DeferredCall(d.flush);
qx.html.Element._scheduleFlush=d.scheduleFlush;
qx.event.Registration.addListener(window,a,d.flush);
}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){arguments.callee.base.call(this);
this.__de={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__de:null,getObject:function(d){if(this.$$disposed){return;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__de[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__de){return;
}var h=g.classname;
var j=this.__de[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__de[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__de;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__de;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){arguments.callee.base.call(this,30);
}});
})();
(function(){var j="qx.client",i="gecko",h="div",g="inherit",f="text",e="value",d="",c="hidden",b="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",a="nowrap",B="auto",A="0",z="ellipsis",y="normal",x="label",w="px",v="crop",u="end",t="100%",s="visible",q="qx.bom.Label",r="Please use the setValue() method instead.",o="opera",p="Please use the getValue() method instead.",m="block",n="none",k="-1000px",l="absolute";
qx.Class.define(q,{statics:{__jy:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__jz:function(){var K=this.__jB(false);
document.body.insertBefore(K,document.body.firstChild);
return this._textElement=K;
},__jA:function(){var Q=this.__jB(true);
document.body.insertBefore(Q,document.body.firstChild);
return this._htmlElement=Q;
},__jB:function(F){var G=qx.bom.Element.create(h);
var H=G.style;
H.width=H.height=B;
H.left=H.top=k;
H.visibility=c;
H.position=l;
H.overflow=s;

if(F){H.whiteSpace=y;
}else{H.whiteSpace=a;

if(qx.core.Variant.isSet(j,i)){var I=document.createElementNS(b,x);
var H=I.style;
H.padding=A;

for(var J in this.__jy){H[J]=g;
}G.appendChild(I);
}}return G;
},__jC:function(bh){var bi={};

if(bh){bi.whiteSpace=y;
}else if(qx.core.Variant.isSet(j,i)){bi.display=m;
}else{bi.overflow=c;
bi.whiteSpace=a;
bi.textOverflow=z;
bi.userSelect=n;
if(qx.core.Variant.isSet(j,o)){bi.OTextOverflow=z;
}}return bi;
},create:function(content,V,W){if(!W){W=window;
}
if(V){var X=W.document.createElement(h);
X.useHtml=true;
}else if(qx.core.Variant.isSet(j,i)){var X=W.document.createElement(h);
var ba=W.document.createElementNS(b,x);
var Y=ba.style;
Y.cursor=g;
Y.color=g;
Y.overflow=c;
Y.maxWidth=t;
Y.padding=A;
for(var bb in this.__jy){ba.style[bb]=g;
}ba.setAttribute(v,u);
X.appendChild(ba);
}else{var X=W.document.createElement(h);
qx.bom.element.Style.setStyles(X,this.__jC(V));
}
if(content){this.setValue(X,content);
}return X;
},setValue:function(D,E){E=E||d;

if(D.useHtml){D.innerHTML=E;
}else if(qx.core.Variant.isSet(j,i)){D.firstChild.setAttribute(e,E);
}else{qx.bom.element.Attribute.set(D,f,E);
}},getValue:function(C){if(C.useHtml){return C.innerHTML;
}else if(qx.core.Variant.isSet(j,i)){return C.firstChild.getAttribute(e)||d;
}else{return qx.bom.element.Attribute.get(C,f);
}},getHtmlSize:function(content,R,S){var T=this._htmlElement||this.__jA();
T.style.width=S!==undefined?S+w:B;
T.innerHTML=content;
return this.__jD(T,R);
},getTextSize:function(N,O){var P=this._textElement||this.__jz();

if(qx.core.Variant.isSet(j,i)){P.firstChild.setAttribute(e,N);
}else{qx.bom.element.Attribute.set(P,f,N);
}return this.__jD(P,O);
},__jD:function(bc,bd){var be=this.__jy;

if(!bd){bd={};
}
for(var bf in be){bc.style[bf]=bd[bf]||d;
}var bg=qx.bom.element.Dimension.getSize(bc);

if(qx.core.Variant.isSet(j,i)){if(!qx.bom.client.Platform.WIN){bg.width++;
}}return bg;
},setContent:function(L,M){qx.log.Logger.deprecatedMethodWarning(arguments.callee,r);
this.setValue(L,M);
},getContent:function(U){qx.log.Logger.deprecatedMethodWarning(arguments.callee,p);
return this.getValue(U);
}}});
})();
(function(){var S="qx.client",R="blur",Q="focus",P="mousedown",O="on",N="mouseup",M="DOMFocusOut",L="DOMFocusIn",K="selectstart",J="onmousedown",bn="onfocusout",bm="onfocusin",bl="onmouseup",bk="onselectstart",bj="draggesture",bi="qx.event.handler.Focus",bh="_applyFocus",bg="deactivate",bf="textarea",be="_applyActive",ba="input",bb="focusin",X="qxSelectable",Y="tabIndex",V="off",W="activate",T="mshtml",U="focusout",bc="qxKeepFocus",bd="qxKeepActive";
qx.Class.define(bi,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bH){arguments.callee.base.call(this);
this._manager=bH;
this._window=bH.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:be,nullable:true},focus:{apply:bh,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Variant.select("qx.client",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__fm:null,__fn:null,__fo:null,__fp:null,__fq:null,__fr:null,__fs:null,__ft:null,__fu:null,__fv:null,canHandleEvent:function(bq,br){},registerEvent:function(h,i,j){},unregisterEvent:function(C,D,E){},focus:function(I){if(qx.core.Variant.isSet(S,T)){window.setTimeout(function(){try{I.focus();
}catch(bL){}},0);
}else{try{I.focus();
}catch(bG){}}this.setFocus(I);
this.setActive(I);
},activate:function(x){this.setActive(x);
},blur:function(g){try{g.blur();
}catch(l){}
if(this.getActive()===g){this.resetActive();
}
if(this.getFocus()===g){this.resetFocus();
}},deactivate:function(z){if(this.getActive()===z){this.resetActive();
}},tryActivate:function(bo){var bp=this.__fK(bo);

if(bp){this.setActive(bp);
}},__fw:function(bs,bt,bu,bv){var bx=qx.event.Registration;
var bw=bx.createEvent(bu,qx.event.type.Focus,[bs,bt,bv]);
bx.dispatchEvent(bs,bw);
},_windowFocused:true,__fx:function(){if(this._windowFocused){this._windowFocused=false;
this.__fw(this._window,null,R,false);
}},__fy:function(){if(!this._windowFocused){this._windowFocused=true;
this.__fw(this._window,null,Q,false);
}},_initObserver:qx.core.Variant.select(S,{"gecko":function(){this.__fm=qx.lang.Function.listener(this.__fE,this);
this.__fn=qx.lang.Function.listener(this.__fF,this);
this.__fo=qx.lang.Function.listener(this.__fD,this);
this.__fp=qx.lang.Function.listener(this.__fC,this);
this.__fq=qx.lang.Function.listener(this.__fz,this);
this._document.addEventListener(P,this.__fm,true);
this._document.addEventListener(N,this.__fn,true);
this._window.addEventListener(Q,this.__fo,true);
this._window.addEventListener(R,this.__fp,true);
this._window.addEventListener(bj,this.__fq,true);
},"mshtml":function(){this.__fm=qx.lang.Function.listener(this.__fE,this);
this.__fn=qx.lang.Function.listener(this.__fF,this);
this.__fs=qx.lang.Function.listener(this.__fA,this);
this.__ft=qx.lang.Function.listener(this.__fB,this);
this.__fr=qx.lang.Function.listener(this.__fH,this);
this._document.attachEvent(J,this.__fm);
this._document.attachEvent(bl,this.__fn);
this._document.attachEvent(bm,this.__fs);
this._document.attachEvent(bn,this.__ft);
this._document.attachEvent(bk,this.__fr);
},"webkit":function(){this.__fm=qx.lang.Function.listener(this.__fE,this);
this.__fn=qx.lang.Function.listener(this.__fF,this);
this.__ft=qx.lang.Function.listener(this.__fB,this);
this.__fo=qx.lang.Function.listener(this.__fD,this);
this.__fp=qx.lang.Function.listener(this.__fC,this);
this.__fr=qx.lang.Function.listener(this.__fH,this);
this._document.addEventListener(P,this.__fm,true);
this._document.addEventListener(N,this.__fn,true);
this._document.addEventListener(K,this.__fr,false);
this._window.addEventListener(M,this.__ft,true);
this._window.addEventListener(Q,this.__fo,true);
this._window.addEventListener(R,this.__fp,true);
},"opera":function(){this.__fm=qx.lang.Function.listener(this.__fE,this);
this.__fn=qx.lang.Function.listener(this.__fF,this);
this.__fs=qx.lang.Function.listener(this.__fA,this);
this.__ft=qx.lang.Function.listener(this.__fB,this);
this._document.addEventListener(P,this.__fm,true);
this._document.addEventListener(N,this.__fn,true);
this._window.addEventListener(L,this.__fs,true);
this._window.addEventListener(M,this.__ft,true);
}}),_stopObserver:qx.core.Variant.select(S,{"gecko":function(){this._document.removeEventListener(P,this.__fm,true);
this._document.removeEventListener(N,this.__fn,true);
this._window.removeEventListener(Q,this.__fo,true);
this._window.removeEventListener(R,this.__fp,true);
this._window.removeEventListener(bj,this.__fq,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,J,this.__fm);
qx.bom.Event.removeNativeListener(this._document,bl,this.__fn);
qx.bom.Event.removeNativeListener(this._document,bm,this.__fs);
qx.bom.Event.removeNativeListener(this._document,bn,this.__ft);
qx.bom.Event.removeNativeListener(this._document,bk,this.__fr);
},"webkit":function(){this._document.removeEventListener(P,this.__fm,true);
this._document.removeEventListener(K,this.__fr,false);
this._window.removeEventListener(L,this.__fs,true);
this._window.removeEventListener(M,this.__ft,true);
this._window.removeEventListener(Q,this.__fo,true);
this._window.removeEventListener(R,this.__fp,true);
},"opera":function(){this._document.removeEventListener(P,this.__fm,true);
this._window.removeEventListener(L,this.__fs,true);
this._window.removeEventListener(M,this.__ft,true);
this._window.removeEventListener(Q,this.__fo,true);
this._window.removeEventListener(R,this.__fp,true);
}}),__fz:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"gecko":function(e){if(!this.__fL(e.target)){qx.bom.Event.preventDefault(e);
}},"default":null})),__fA:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"mshtml":function(e){this.__fy();
var n=e.srcElement;
var m=this.__fJ(n);

if(m){this.setFocus(m);
}this.tryActivate(n);
},"opera":function(e){var bC=e.target;

if(bC==this._document||bC==this._window){this.__fy();

if(this.__fu){this.setFocus(this.__fu);
delete this.__fu;
}
if(this.__fv){this.setActive(this.__fv);
delete this.__fv;
}}else{this.setFocus(bC);
this.tryActivate(bC);
if(!this.__fL(bC)){bC.selectionStart=0;
bC.selectionEnd=0;
}}},"default":null})),__fB:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"mshtml":function(e){if(!e.toElement){this.__fx();
this.resetFocus();
this.resetActive();
}},"webkit":function(e){var F=e.target;

if(F===this.getFocus()){this.resetFocus();
}
if(F===this.getActive()){this.resetActive();
}},"opera":function(e){var by=e.target;

if(by==this._document){this.__fx();
this.__fu=this.getFocus();
this.__fv=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(by===this.getFocus()){this.resetFocus();
}
if(by===this.getActive()){this.resetActive();
}}},"default":null})),__fC:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"gecko":function(e){if(e.target===this._window||e.target===this._document){this.__fx();
this.resetActive();
this.resetFocus();
}},"webkit":function(e){if(e.target===this._window||e.target===this._document){this.__fx();
this.__fu=this.getFocus();
this.__fv=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__fD:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"gecko":function(e){var bE=e.target;

if(bE===this._window||bE===this._document){this.__fy();
bE=this._body;
}this.setFocus(bE);
this.tryActivate(bE);
},"webkit":function(e){var bA=e.target;

if(bA===this._window||bA===this._document){this.__fy();

if(this.__fu){this.setFocus(this.__fu);
delete this.__fu;
}
if(this.__fv){this.setActive(this.__fv);
delete this.__fv;
}}else{this.setFocus(bA);
this.tryActivate(bA);
}},"default":null})),__fE:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"gecko":function(e){var bB=this.__fJ(e.target);

if(!bB){qx.bom.Event.preventDefault(e);
}},"mshtml":function(e){var B=e.srcElement;
var A=this.__fJ(B);

if(A){if(!this.__fL(B)){B.unselectable=O;
try{document.selection.empty();
}catch(e){}try{A.focus();
}catch(e){}}}else{qx.bom.Event.preventDefault(e);
if(!this.__fL(B)){B.unselectable=O;
}}},"webkit":function(e){var f=e.target;
var d=this.__fJ(f);

if(d){this.setFocus(d);
}else{qx.bom.Event.preventDefault(e);
}},"opera":function(e){var w=e.target;
var u=this.__fJ(w);

if(!this.__fL(w)){qx.bom.Event.preventDefault(e);
if(u){var v=this.getFocus();

if(v&&v.selectionEnd){v.selectionStart=0;
v.selectionEnd=0;
v.blur();
}if(u){this.setFocus(u);
}}}else if(u){this.setFocus(u);
}},"default":null})),__fF:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"mshtml":function(e){var bz=e.srcElement;

if(bz.unselectable){bz.unselectable=V;
}this.tryActivate(this.__fG(bz));
},"gecko":function(e){var bF=e.target;

while(bF&&bF.offsetWidth===undefined){bF=bF.parentNode;
}
if(bF){this.tryActivate(bF);
}},"webkit|opera":function(e){this.tryActivate(this.__fG(e.target));
},"default":null})),__fG:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"mshtml|webkit":function(o){var p=this.getFocus();

if(p&&o!=p&&(p.nodeName.toLowerCase()===ba||p.nodeName.toLowerCase()===bf)){o=p;
}return o;
},"default":function(bD){return bD;
}})),__fH:qx.event.GlobalError.observeMethod(qx.core.Variant.select(S,{"mshtml|webkit":function(e){var y=qx.bom.client.Engine.MSHTML?e.srcElement:e.target;

if(!this.__fL(y)){qx.bom.Event.preventDefault(e);
}},"default":null})),__fI:function(a){var b=qx.bom.element.Attribute.get(a,Y);

if(b>=1){return true;
}var c=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(b>=0&&c[a.tagName]){return true;
}return false;
},__fJ:function(k){while(k&&k.nodeType===1){if(k.getAttribute(bc)==O){return null;
}
if(this.__fI(k)){return k;
}k=k.parentNode;
}return this._body;
},__fK:function(q){var r=q;

while(q&&q.nodeType===1){if(q.getAttribute(bd)==O){return null;
}q=q.parentNode;
}return r;
},__fL:function(s){while(s&&s.nodeType===1){var t=s.getAttribute(X);

if(t!=null){return t===O;
}s=s.parentNode;
}return true;
},_applyActive:function(G,H){if(H){this.__fw(H,G,bg,true);
}
if(G){this.__fw(G,H,W,true);
}},_applyFocus:function(bM,bN){if(bN){this.__fw(bN,bM,U,true);
}
if(bM){this.__fw(bM,bN,bb,true);
}if(bN){this.__fw(bN,bM,R,false);
}
if(bM){this.__fw(bM,bN,Q,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__fM=null;
},defer:function(bI){qx.event.Registration.addHandler(bI);
var bJ=bI.FOCUSABLE_ELEMENTS;

for(var bK in bJ){bJ[bK.toUpperCase()]=1;
}}});
})();
(function(){var c="qx.event.handler.Window";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){arguments.callee.base.call(this);
this._manager=o;
this._window=o.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(g,h,i){},unregisterEvent:function(j,k,l){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var n=qx.event.handler.Window.SUPPORTED_TYPES;

for(var m in n){qx.bom.Event.addNativeListener(this._window,m,this._onNativeWrapper);
}},_stopWindowObserver:function(){var f=qx.event.handler.Window.SUPPORTED_TYPES;

for(var d in f){qx.bom.Event.removeNativeListener(this._window,d,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var r=this._window;

try{var u=r.document;
}catch(e){return ;
}var s=u.documentElement;
var q=e.target||e.srcElement;

if(q==null||q===r||q===u||q===s){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,r]);
qx.event.Registration.dispatchEvent(r,event);
var t=event.getReturnValue();

if(t!=null){e.returnValue=t;
return t;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(p){qx.event.Registration.addHandler(p);
}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(c){this._manager=c;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(k,event,m){return !event.getBubbles();
},dispatchEvent:function(d,event,e){var h,f;
{};
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var j=this._manager.getListeners(d,e,false);

if(j){for(var i=0,l=j.length;i<l;i++){var g=j[i].context||d;
j[i].handler.call(g,event);
}}}},defer:function(b){qx.event.Registration.addDispatcher(b);
}});
})();
(function(){var f="ready",d="qx.application",c="beforeunload",b="qx.core.Init",a="shutdown";
qx.Class.define(b,{statics:{getApplication:function(){return this.__gA||null;
},__gz:function(){if(qx.bom.client.Engine.UNKNOWN_ENGINE){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.bom.client.Engine.UNKNOWN_VERSION){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.bom.client.Platform.UNKNOWN_PLATFORM){qx.log.Logger.warn("Could not detect platform!");
}
if(qx.bom.client.System.UNKNOWN_SYSTEM){qx.log.Logger.warn("Could not detect system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=qx.core.Setting.get(d);
var j=qx.Class.getByName(i);

if(j){this.__gA=new j;
var h=new Date;
this.__gA.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__gA.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__gB:function(e){var g=this.__gA;

if(g){e.setReturnValue(g.close());
}},__gC:function(){var l=this.__gA;

if(l){l.terminate();
}}},defer:function(k){qx.event.Registration.addListener(window,f,k.__gz,k);
qx.event.Registration.addListener(window,a,k.__gC,k);
qx.event.Registration.addListener(window,c,k.__gB,k);
}});
})();
(function(){var l="qx.client",k="character",j="EndToEnd",i="input",h="textarea",g="StartToStart",f='character',e="qx.bom.Selection",d="button",c="#text",b="body";
qx.Class.define(e,{statics:{getSelectionObject:qx.core.Variant.select(l,{"mshtml":function(bx){return bx.selection;
},"default":function(bi){return qx.dom.Node.getWindow(bi).getSelection();
}}),get:qx.core.Variant.select(l,{"mshtml":function(G){var H=qx.bom.Range.get(qx.dom.Node.getDocument(G));
return H.text;
},"default":function(a){if(this.__gm(a)){return a.value.substring(a.selectionStart,a.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(a)).toString();
}}}),getLength:qx.core.Variant.select(l,{"mshtml":function(m){var o=this.get(m);
var n=qx.util.StringSplit.split(o,/\r\n/);
return o.length-(n.length-1);
},"opera":function(A){var F,D,B;

if(this.__gm(A)){var E=A.selectionStart;
var C=A.selectionEnd;
F=A.value.substring(E,C);
D=C-E;
}else{F=qx.bom.Selection.get(A);
D=F.length;
}B=qx.util.StringSplit.split(F,/\r\n/);
return D-(B.length-1);
},"default":function(v){if(this.__gm(v)){return v.selectionEnd-v.selectionStart;
}else{return this.get(v).length;
}}}),getStart:qx.core.Variant.select(l,{"mshtml":function(J){if(this.__gm(J)){var O=qx.bom.Range.get();
if(!J.contains(O.parentElement())){return -1;
}var P=qx.bom.Range.get(J);
var N=J.value.length;
P.moveToBookmark(O.getBookmark());
P.moveEnd(f,N);
return N-P.text.length;
}else{var P=qx.bom.Range.get(J);
var L=P.parentElement();
var Q=qx.bom.Range.get();
Q.moveToElementText(L);
var K=qx.bom.Range.get(qx.dom.Node.getBodyElement(J));
K.setEndPoint(g,P);
K.setEndPoint(j,Q);
if(Q.compareEndPoints(g,K)==0){return 0;
}var M;
var R=0;

while(true){M=K.moveStart(k,-1);
if(Q.compareEndPoints(g,K)==0){break;
}if(M==0){break;
}else{R++;
}}return ++R;
}},"gecko|webkit":function(ba){if(this.__gm(ba)){return ba.selectionStart;
}else{var bc=qx.dom.Node.getDocument(ba);
var bb=this.getSelectionObject(bc);
if(bb.anchorOffset<bb.focusOffset){return bb.anchorOffset;
}else{return bb.focusOffset;
}}},"default":function(by){if(this.__gm(by)){return by.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(by)).anchorOffset;
}}}),getEnd:qx.core.Variant.select(l,{"mshtml":function(bn){if(this.__gm(bn)){var bs=qx.bom.Range.get();
if(!bn.contains(bs.parentElement())){return -1;
}var bt=qx.bom.Range.get(bn);
var br=bn.value.length;
bt.moveToBookmark(bs.getBookmark());
bt.moveStart(f,-br);
return bt.text.length;
}else{var bt=qx.bom.Range.get(bn);
var bp=bt.parentElement();
var bu=qx.bom.Range.get();
bu.moveToElementText(bp);
var br=bu.text.length;
var bo=qx.bom.Range.get(qx.dom.Node.getBodyElement(bn));
bo.setEndPoint(j,bt);
bo.setEndPoint(g,bu);
if(bu.compareEndPoints(j,bo)==0){return br-1;
}var bq;
var bv=0;

while(true){bq=bo.moveEnd(k,1);
if(bu.compareEndPoints(j,bo)==0){break;
}if(bq==0){break;
}else{bv++;
}}return br-(++bv);
}},"gecko|webkit":function(bj){if(this.__gm(bj)){return bj.selectionEnd;
}else{var bl=qx.dom.Node.getDocument(bj);
var bk=this.getSelectionObject(bl);
if(bk.focusOffset>bk.anchorOffset){return bk.focusOffset;
}else{return bk.anchorOffset;
}}},"default":function(bm){if(this.__gm(bm)){return bm.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bm)).focusOffset;
}}}),__gm:function(I){return qx.dom.Node.isElement(I)&&(I.nodeName.toLowerCase()==i||I.nodeName.toLowerCase()==h);
},set:qx.core.Variant.select(l,{"mshtml":function(bd,be,bf){var bg;
if(qx.dom.Node.isDocument(bd)){bd=bd.body;
}
if(qx.dom.Node.isElement(bd)||qx.dom.Node.isText(bd)){switch(bd.nodeName.toLowerCase()){case i:case h:case d:if(bf===undefined){bf=bd.value.length;
}
if(be>=0&&be<=bd.value.length&&bf>=0&&bf<=bd.value.length){bg=qx.bom.Range.get(bd);
bg.collapse(true);
bg.moveStart(k,be);
bg.moveEnd(k,bf-be);
bg.select();
return true;
}break;
case c:if(bf===undefined){bf=bd.nodeValue.length;
}
if(be>=0&&be<=bd.nodeValue.length&&bf>=0&&bf<=bd.nodeValue.length){bg=qx.bom.Range.get(qx.dom.Node.getBodyElement(bd));
bg.moveToElementText(bd.parentNode);
bg.collapse(true);
bg.moveStart(k,be);
bg.moveEnd(k,bf-be);
bg.select();
return true;
}break;
default:if(bf===undefined){bf=bd.childNodes.length-1;
}if(bd.childNodes[be]&&bd.childNodes[bf]){bg=qx.bom.Range.get(qx.dom.Node.getBodyElement(bd));
bg.moveToElementText(bd.childNodes[be]);
bg.collapse(true);
var bh=qx.bom.Range.get(qx.dom.Node.getBodyElement(bd));
bh.moveToElementText(bd.childNodes[bf]);
bg.setEndPoint(j,bh);
bg.select();
return true;
}}}return false;
},"default":function(S,T,U){var Y=S.nodeName.toLowerCase();

if(qx.dom.Node.isElement(S)&&(Y==i||Y==h)){if(U===undefined){U=S.value.length;
}if(T>=0&&T<=S.value.length&&U>=0&&U<=S.value.length){S.focus();
S.select();
S.setSelectionRange(T,U);
return true;
}}else{var W=false;
var X=qx.dom.Node.getWindow(S).getSelection();
var V=qx.bom.Range.get(S);
if(qx.dom.Node.isText(S)){if(U===undefined){U=S.length;
}
if(T>=0&&T<S.length&&U>=0&&U<=S.length){W=true;
}}else if(qx.dom.Node.isElement(S)){if(U===undefined){U=S.childNodes.length-1;
}
if(T>=0&&S.childNodes[T]&&U>=0&&S.childNodes[U]){W=true;
}}else if(qx.dom.Node.isDocument(S)){S=S.body;

if(U===undefined){U=S.childNodes.length-1;
}
if(T>=0&&S.childNodes[T]&&U>=0&&S.childNodes[U]){W=true;
}}
if(W){if(!X.isCollapsed){X.collapseToStart();
}V.setStart(S,T);
if(qx.dom.Node.isText(S)){V.setEnd(S,U);
}else{V.setEndAfter(S.childNodes[U]);
}if(X.rangeCount>0){X.removeAllRanges();
}X.addRange(V);
return true;
}}return false;
}}),setAll:function(bw){return qx.bom.Selection.set(bw,0);
},clear:qx.core.Variant.select(l,{"mshtml":function(w){var x=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(w));
var y=qx.bom.Range.get(w);
var parent=y.parentElement();
var z=qx.bom.Range.get(qx.dom.Node.getDocument(w));
if(parent==z.parentElement()&&parent==w){x.empty();
}},"default":function(p){var r=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(p));
var t=p.nodeName.toLowerCase();
if(qx.dom.Node.isElement(p)&&(t==i||t==h)){p.setSelectionRange(0,0);
qx.bom.Element.blur(p);
}else if(qx.dom.Node.isDocument(p)||t==b){r.collapse(p.body?p.body:p,0);
}else{var s=qx.bom.Range.get(p);

if(!s.collapsed){var u;
var q=s.commonAncestorContainer;
if(qx.dom.Node.isElement(p)&&qx.dom.Node.isText(q)){u=q.parentNode;
}else{u=q;
}
if(u==p){r.collapse(p,0);
}}}}})}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(m){arguments.callee.base.call(this);
this.__fi=m;
this.__fj={};
qx.event.handler.Appear.__fk[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__fk:{},refresh:function(){var k=this.__fk;

for(var l in k){k[l].refresh();
}}},members:{__fi:null,__fj:null,canHandleEvent:function(d,e){},registerEvent:function(s,t,u){var v=qx.core.ObjectRegistry.toHashCode(s)+t;
var w=this.__fj;

if(w&&!w[v]){w[v]=s;
s.$$displayed=s.offsetWidth>0;
}},unregisterEvent:function(f,g,h){var i=qx.core.ObjectRegistry.toHashCode(f)+g;
var j=this.__fj;

if(!j){return;
}
if(j[i]){delete j[i];
}},refresh:function(){var q=this.__fj;
var r;

for(var p in q){r=q[p];
var n=r.offsetWidth>0;

if((!!r.$$displayed)!==n){r.$$displayed=n;
var o=qx.event.Registration.createEvent(n?a:b);
this.__fi.dispatchEvent(r,o);
}}}},destruct:function(){this.__fi=this.__fj=null;
delete qx.event.handler.Appear.__fk[this.$$hash];
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var k="",j="underline",h="Boolean",g="px",f='"',e="italic",d="normal",c="bold",b="_applyItalic",a="_applyBold",x="Integer",w="_applyFamily",v="_applyLineHeight",u="Array",t="overline",s="line-through",r="qx.bom.Font",q="Number",p="_applyDecoration",o=" ",m="_applySize",n=",";
qx.Class.define(r,{extend:qx.core.Object,construct:function(Q,R){arguments.callee.base.call(this);

if(Q!==undefined){this.setSize(Q);
}
if(R!==undefined){this.setFamily(R);
}},statics:{fromString:function(y){var C=new qx.bom.Font();
var A=y.split(/\s+/);
var name=[];
var B;

for(var i=0;i<A.length;i++){switch(B=A[i]){case c:C.setBold(true);
break;
case e:C.setItalic(true);
break;
case j:C.setDecoration(j);
break;
default:var z=parseInt(B,10);

if(z==B||qx.lang.String.contains(B,g)){C.setSize(z);
}else{name.push(B);
}break;
}}
if(name.length>0){C.setFamily(name);
}return C;
},fromConfig:function(K){var L=new qx.bom.Font;
L.set(K);
return L;
},__jF:{fontFamily:k,fontSize:k,fontWeight:k,fontStyle:k,textDecoration:k,lineHeight:1.2},getDefaultStyles:function(){return this.__jF;
}},properties:{size:{check:x,nullable:true,apply:m},lineHeight:{check:q,nullable:true,apply:v},family:{check:u,nullable:true,apply:w},bold:{check:h,nullable:true,apply:a},italic:{check:h,nullable:true,apply:b},decoration:{check:[j,s,t],nullable:true,apply:p}},members:{__jG:null,__jH:null,__jI:null,__jJ:null,__jK:null,__jL:null,_applySize:function(S,T){this.__jG=S===null?null:S+g;
},_applyLineHeight:function(G,H){this.__jL=G===null?null:G;
},_applyFamily:function(D,E){var F=k;

for(var i=0,l=D.length;i<l;i++){if(D[i].indexOf(o)>0){F+=f+D[i]+f;
}else{F+=D[i];
}
if(i!==l-1){F+=n;
}}this.__jH=F;
},_applyBold:function(O,P){this.__jI=O===null?null:O?c:d;
},_applyItalic:function(M,N){this.__jJ=M===null?null:M?e:d;
},_applyDecoration:function(I,J){this.__jK=I===null?null:I;
},getStyles:function(){return {fontFamily:this.__jH,fontSize:this.__jG,fontWeight:this.__jI,fontStyle:this.__jJ,textDecoration:this.__jK,lineHeight:this.__jL};
}}});
})();
(function(){var h="string",g="_applyTheme",f="qx.theme.manager.Appearance",e=":",d="Theme",c="changeTheme",b="/",a="singleton";
qx.Class.define(f,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__hy={};
this.__hz={};
},properties:{theme:{check:d,nullable:true,event:c,apply:g}},members:{__hA:{},__hy:null,__hz:null,_applyTheme:function(i,j){this.__hz={};
this.__hy={};
},__hB:function(k,l,m){var q=l.appearances;
var t=q[k];

if(!t){var u=b;
var n=[];
var s=k.split(u);
var r;

while(!t&&s.length>0){n.unshift(s.pop());
var o=s.join(u);
t=q[o];

if(t){r=t.alias||t;

if(typeof r===h){var p=r+u+n.join(u);
return this.__hB(p,l,m);
}}}if(m!=null){return this.__hB(m,l);
}return null;
}else if(typeof t===h){return this.__hB(t,l,m);
}else if(t.include&&!t.style){return this.__hB(t.include,l,m);
}return k;
},styleFrom:function(v,w,x,y){if(!x){x=this.getTheme();
}var E=this.__hz;
var z=E[v];

if(!z){z=E[v]=this.__hB(v,x,y);
}var J=x.appearances[z];

if(!J){this.warn("Missing appearance: "+v);
return null;
}if(!J.style){return null;
}var K=z;

if(w){var L=J.$$bits;

if(!L){L=J.$$bits={};
J.$$length=0;
}var C=0;

for(var F in w){if(!w[F]){continue;
}
if(L[F]==null){L[F]=1<<J.$$length++;
}C+=L[F];
}if(C>0){K+=e+C;
}}var D=this.__hy;

if(D[K]!==undefined){return D[K];
}if(!w){w=this.__hA;
}var H;
if(J.include||J.base){var B=J.style(w);
var A;

if(J.include){A=this.styleFrom(J.include,w,x,y);
}H={};
if(J.base){var G=this.styleFrom(z,w,J.base,y);

if(J.include){for(var I in G){if(!A.hasOwnProperty(I)&&!B.hasOwnProperty(I)){H[I]=G[I];
}}}else{for(var I in G){if(!B.hasOwnProperty(I)){H[I]=G[I];
}}}}if(J.include){for(var I in A){if(!B.hasOwnProperty(I)){H[I]=A[I];
}}}for(var I in B){H[I]=B[I];
}}else{H=J.style(w);
}return D[K]=H||null;
}},destruct:function(){this.__hy=this.__hz=null;
}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(j){},setItem:function(h,i){},splice:function(e,f,g){},contains:function(d){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){arguments.callee.base.call(this,b);
this.__gO=c;
this.__gP=d;
},members:{__gO:null,__gP:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__gO,this.__gP);
}}});
})();
(function(){var b="CSS1Compat",a="qx.bom.client.Feature";
qx.Class.define(a,{statics:{STANDARD_MODE:false,QUIRKS_MODE:false,CONTENT_BOX:false,BORDER_BOX:false,SVG:false,CANVAS:!!window.CanvasRenderingContext2D,VML:false,XPATH:!!document.evaluate,AIR:navigator.userAgent.indexOf("adobeair")!==-1,GEARS:!!(window.google&&window.google.gears),SSL:window.location.protocol==="https:",ECMA_OBJECT_COUNT:(({}).__count__==0),CSS_POINTER_EVENTS:"pointerEvents" in document.documentElement.style,__cw:function(){this.QUIRKS_MODE=this.__cx();
this.STANDARD_MODE=!this.QUIRKS_MODE;
this.CONTENT_BOX=!qx.bom.client.Engine.MSHTML||this.STANDARD_MODE;
this.BORDER_BOX=!this.CONTENT_BOX;
this.SVG=document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
this.VML=qx.bom.client.Engine.MSHTML;
},__cx:function(){if(qx.bom.client.Engine.MSHTML&&qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==b;
}}},defer:function(c){c.__cw();
}});
})();
(function(){var b="qx.lang.Object";
qx.Class.define(b,{statics:{empty:function(F){{};

for(var G in F){if(F.hasOwnProperty(G)){delete F[G];
}}},isEmpty:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(a){{};
return a.__count__===0;
}:
function(e){{};

for(var f in e){return false;
}return true;
},hasMinLength:(qx.bom.client.Feature.ECMA_OBJECT_COUNT)?
function(z,A){{};
return z.__count__>=A;
}:
function(k,m){{};

if(m<=0){return true;
}var length=0;

for(var n in k){if((++length)>=m){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(t){{};
var v=[];
var u=this.getKeys(t);

for(var i=0,l=u.length;i<l;i++){v.push(t[u[i]]);
}return v;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(B,C){{};
return qx.lang.Object.mergeWith(B,C,false);
},merge:function(w,x){{};
var y=arguments.length;

for(var i=1;i<y;i++){qx.lang.Object.mergeWith(w,arguments[i]);
}return w;
},clone:function(H){{};
var I={};

for(var J in H){I[J]=H[J];
}return I;
},invert:function(g){{};
var h={};

for(var j in g){h[g[j].toString()]=j;
}return h;
},getKeyFromValue:function(q,r){{};

for(var s in q){if(q.hasOwnProperty(s)&&q[s]===r){return s;
}}return null;
},contains:function(c,d){{};
return this.getKeyFromValue(c,d)!==null;
},select:function(o,p){{};
return p[o];
},fromArray:function(D){{};
var E={};

for(var i=0,l=D.length;i<l;i++){{};
E[D[i].toString()]=true;
}return E;
}}});
})();
(function(){var b="qx.ui.form.IExecutable",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"execute":a},members:{setCommand:function(c){return arguments.length==1;
},getCommand:function(){},execute:function(){}}});
})();
(function(){var o="pressed",n="abandoned",m="hovered",l="Enter",k="Space",j="dblclick",i="qx.ui.form.Button",h="mouseup",g="mousedown",f="mouseover",b="mouseout",d="keydown",c="button",a="keyup";
qx.Class.define(i,{extend:qx.ui.basic.Atom,include:[qx.ui.core.MExecutable],implement:[qx.ui.form.IExecutable],construct:function(r,s,t){arguments.callee.base.call(this,r,s);

if(t!=null){this.setCommand(t);
}this.addListener(f,this._onMouseOver);
this.addListener(b,this._onMouseOut);
this.addListener(g,this._onMouseDown);
this.addListener(h,this._onMouseUp);
this.addListener(d,this._onKeyDown);
this.addListener(a,this._onKeyUp);
this.addListener(j,this._onStopEvent);
},properties:{appearance:{refine:true,init:c},focusable:{refine:true,init:true}},members:{_forwardStates:{focused:true,hovered:true,pressed:true,disabled:true},press:function(){if(this.hasState(n)){return;
}this.addState(o);
},release:function(){if(this.hasState(o)){this.removeState(o);
}},reset:function(){this.removeState(o);
this.removeState(n);
this.removeState(m);
},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(n)){this.removeState(n);
this.addState(o);
}this.addState(m);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(m);

if(this.hasState(o)){this.removeState(o);
this.addState(n);
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}e.stopPropagation();
this.capture();
this.removeState(n);
this.addState(o);
},_onMouseUp:function(e){this.releaseCapture();
var p=this.hasState(o);
var q=this.hasState(n);

if(p){this.removeState(o);
}
if(q){this.removeState(n);
}else{this.addState(m);

if(p){this.execute();
}}e.stopPropagation();
},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case l:case k:this.removeState(n);
this.addState(o);
e.stopPropagation();
}},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case l:case k:if(this.hasState(o)){this.removeState(n);
this.removeState(o);
this.execute();
e.stopPropagation();
}}}}});
})();
(function(){var y="nonScaled",x="scaled",w="alphaScaled",v=".png",u="replacement",t="hidden",s="div",r="Boolean",q="_applyScale",p="px",j="_applySource",o="-disabled.$1",m="img",i="changeSource",h="qx.client",l="__hC",k="String",n="image",g="qx.ui.basic.Image";
qx.Class.define(g,{extend:qx.ui.core.Widget,construct:function(f){this.__hC={};
arguments.callee.base.call(this);

if(f){this.setSource(f);
}},properties:{source:{check:k,init:null,nullable:true,event:i,apply:j,themeable:true},scale:{check:r,init:false,themeable:true,apply:q},appearance:{refine:true,init:n},allowShrinkX:{refine:true,init:false},allowShrinkY:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false}},members:{__hD:null,__hE:null,__hF:null,__hC:null,getContentElement:function(){return this.__hJ();
},_createContentElement:function(){return this.__hJ();
},_getContentHint:function(){return {width:this.__hD||0,height:this.__hE||0};
},_applyEnabled:function(Q,R){arguments.callee.base.call(this,Q,R);

if(this.getSource()){this._styleSource();
}},_applySource:function(C){this._styleSource();
},_applyScale:function(ba){this._styleSource();
},__hG:function(D){this.__hF=D;
},__hH:function(){if(this.__hF==null){var T=this.getSource();
var S=false;

if(T!=null){S=qx.lang.String.endsWith(T,v);
}
if(this.getScale()&&S&&qx.bom.element.Decoration.isAlphaImageLoaderEnabled()){this.__hF=w;
}else if(this.getScale()){this.__hF=x;
}else{this.__hF=y;
}}return this.__hF;
},__hI:function(bf){var bg;
var bh;

if(bf==w){bg=true;
bh=s;
}else if(bf==y){bg=false;
bh=s;
}else{bg=true;
bh=m;
}var bi=new qx.html.Image(bh);
bi.setScale(bg);
bi.setStyles({"overflowX":t,"overflowY":t});
return bi;
},__hJ:function(){var P=this.__hH();

if(this.__hC[P]==null){this.__hC[P]=this.__hI(P);
}return this.__hC[P];
},_styleSource:function(){var bb=qx.util.AliasManager.getInstance().resolve(this.getSource());

if(!bb){this.getContentElement().resetSource();
return;
}this.__hK(bb);
if(qx.util.ResourceManager.getInstance().has(bb)){this.__hM(this.getContentElement(),bb);
}else if(qx.io.ImageLoader.isLoaded(bb)){this.__hN(this.getContentElement(),bb);
}else{this.__hO(this.getContentElement(),bb);
}},__hK:qx.core.Variant.select(h,{"mshtml":function(z){var B=qx.bom.element.Decoration.isAlphaImageLoaderEnabled();
var A=qx.lang.String.endsWith(z,v);

if(B&&A){if(this.getScale()&&this.__hH()!=w){this.__hG(w);
}else if(!this.getScale()&&this.__hH()!=y){this.__hG(y);
}}else{if(this.getScale()&&this.__hH()!=x){this.__hG(x);
}else if(!this.getScale()&&this.__hH()!=y){this.__hG(y);
}}this.__hL(this.__hJ());
},"default":function(bc){if(this.getScale()&&this.__hH()!=x){this.__hG(x);
}else if(!this.getScale()&&this.__hH(y)){this.__hG(y);
}this.__hL(this.__hJ());
}}),__hL:function(E){var H=this.getContainerElement();
var I=H.getChild(0);

if(I!=E){if(I!=null){var K=p;
var F={};
var G=this.getInnerSize();

if(G!=null){F.width=G.width+K;
F.height=G.height+K;
}var J=this.getInsets();
F.left=J.left+K;
F.top=J.top+K;
F.zIndex=10;
E.setStyles(F,true);
E.setSelectable(this.getSelectable());
}H.removeAt(0);
H.addAt(E,0);
}},__hM:function(L,M){var O=qx.util.ResourceManager.getInstance();
if(!this.getEnabled()){var N=M.replace(/\.([a-z]+)$/,o);

if(O.has(N)){M=N;
this.addState(u);
}else{this.removeState(u);
}}if(L.getSource()===M){return;
}L.setSource(M);
this.__hQ(O.getImageWidth(M),O.getImageHeight(M));
},__hN:function(U,V){var X=qx.io.ImageLoader;
U.setSource(V);
var W=X.getWidth(V);
var Y=X.getHeight(V);
this.__hQ(W,Y);
},__hO:function(c,d){var self;
var e=qx.io.ImageLoader;
{};
if(!e.isFailed(d)){e.load(d,this.__hP,this);
}else{if(c!=null){c.resetSource();
}}},__hP:function(bd,be){if(bd!==qx.util.AliasManager.getInstance().resolve(this.getSource())){return;
}if(be.failed){this.warn("Image could not be loaded: "+bd);
}this._styleSource();
},__hQ:function(a,b){if(a!==this.__hD||b!==this.__hE){this.__hD=a;
this.__hE=b;
qx.ui.core.queue.Layout.add(this);
}}},destruct:function(){this._disposeMap(l);
}});
})();
(function(){var j="keep-align",i="interval",h="Integer",g="direct",f="best-fit",e="mouse",d="bottom-left",c="disappear",b="Boolean",a="bottom-right",x="widget",w="qx.ui.core.MPlacement",v="left-top",u="offsetRight",t="shorthand",s="offsetLeft",r="top-left",q="appear",p="offsetBottom",o="top-right",m="offsetTop",n="right-bottom",k="right-top",l="left-bottom";
qx.Mixin.define(w,{properties:{position:{check:[r,o,d,a,v,l,k,n],init:d,themeable:true},placeMethod:{check:[x,e],init:e,themeable:true},domMove:{check:b,init:false},placementModeX:{check:[g,j,f],init:j,themeable:true},placementModeY:{check:[g,j,f],init:j,themeable:true},offsetLeft:{check:h,init:0,themeable:true},offsetTop:{check:h,init:0,themeable:true},offsetRight:{check:h,init:0,themeable:true},offsetBottom:{check:h,init:0,themeable:true},offset:{group:[m,u,p,s],mode:t,themeable:true}},members:{__hR:null,getLayoutLocation:function(K){var N,M,O,top;
M=K.getBounds();
O=M.left;
top=M.top;
var P=M;
K=K.getLayoutParent();

while(K&&!K.isRootWidget()){M=K.getBounds();
O+=M.left;
top+=M.top;
N=K.getInsets();
O+=N.left;
top+=N.top;
K=K.getLayoutParent();
}if(K.isRootWidget()){var L=K.getContainerLocation();

if(L){O+=L.left;
top+=L.top;
}}return {left:O,top:top,right:O+P.width,bottom:top+P.height};
},moveTo:function(E,top){if(this.getDomMove()){this.setDomPosition(E,top);
}else{this.setLayoutProperties({left:E,top:top});
}},placeToWidget:function(y,z){if(z){this.__hR=qx.lang.Function.bind(this.placeToWidget,this,y,false);
qx.event.Idle.getInstance().addListener(i,this.__hR);
this.addListener(c,function(){if(this.__hR){qx.event.Idle.getInstance().removeListener(i,this.__hR);
this.__hR=null;
}},this);
}var A=y.getContainerLocation()||this.getLayoutLocation(y);
this.__hT(A);
},placeToMouse:function(event){var X=event.getDocumentLeft();
var top=event.getDocumentTop();
var W={left:X,top:top,right:X,bottom:top};
this.__hT(W);
},placeToElement:function(H,I){var location=qx.bom.element.Location.get(H);
var J={left:location.left,top:location.top,right:location.left+H.offsetWidth,bottom:location.top+H.offsetHeight};
if(I){this.__hR=qx.lang.Function.bind(this.placeToElement,this,H,false);
qx.event.Idle.getInstance().addListener(i,this.__hR);
this.addListener(c,function(){if(this.__hR){qx.event.Idle.getInstance().removeListener(i,this.__hR);
this.__hR=null;
}},this);
}this.__hT(J);
},placeToPoint:function(S){var T={left:S.left,top:S.top,right:S.left,bottom:S.top};
this.__hT(T);
},_getPlacementOffsets:function(){return {left:this.getOffsetLeft(),top:this.getOffsetTop(),right:this.getOffsetRight(),bottom:this.getOffsetBottom()};
},__hS:function(Q){var R=null;

if(this._computePlacementSize){var R=this._computePlacementSize();
}else if(this.isVisible()){var R=this.getBounds();
}
if(R==null){this.addListenerOnce(q,function(){this.__hS(Q);
},this);
}else{Q.call(this,R);
}},__hT:function(D){this.__hS(function(F){var G=qx.util.placement.Placement.compute(F,this.getLayoutParent().getBounds(),D,this._getPlacementOffsets(),this.getPosition(),this.getPlacementModeX(),this.getPlacementModeY());
this.moveTo(G.left,G.top);
});
},setSmart:function(B){{};
var C=B?j:g;
this.set({placementModeX:C,placementModeY:C});
},getSmart:function(){{};
var U=this.getPlacementModeX()==j?true:false;
var V=this.getPlacementModeY()==j?true:false;
return U&&V;
},resetSmart:function(){{};
this.resetPlacementModeX();
this.resetPlacementModeY();
},isSmart:function(){{};
return this.getSmart();
},toggleSmart:function(){{};
this.setSmart(!this.getSmart());
}},destruct:function(){if(this.__hR){qx.event.Idle.getInstance().removeListener(i,this.__hR);
}}});
})();
(function(){var g="dragdrop-cursor",f="_applyAction",e="alias",d="qx.ui.core.DragDropCursor",c="move",b="singleton",a="copy";
qx.Class.define(d,{extend:qx.ui.basic.Image,include:qx.ui.core.MPlacement,type:b,construct:function(){arguments.callee.base.call(this);
this.setZIndex(1e8);
this.setDomMove(true);
var h=this.getApplicationRoot();
h.add(this,{left:-1000,top:-1000});
},properties:{appearance:{refine:true,init:g},action:{check:[e,a,c],apply:f,nullable:true}},members:{_applyAction:function(i,j){if(j){this.removeState(j);
}
if(i){this.addState(i);
}}}});
})();
(function(){var j="emulated",h="native",g='"',f="qx.lang.Core",e="\\\\",d="\\\"",c="[object Error]";
qx.Class.define(f,{statics:{errorToString:qx.lang.Object.select((!Error.prototype.toString||Error.prototype.toString()==c)?j:h,{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}),arrayIndexOf:qx.lang.Object.select(Array.prototype.indexOf?h:j,{"native":Array.prototype.indexOf,"emulated":function(k,m){if(m==null){m=0;
}else if(m<0){m=Math.max(0,this.length+m);
}
for(var i=m;i<this.length;i++){if(this[i]===k){return i;
}}return -1;
}}),arrayLastIndexOf:qx.lang.Object.select(Array.prototype.lastIndexOf?h:j,{"native":Array.prototype.lastIndexOf,"emulated":function(a,b){if(b==null){b=this.length-1;
}else if(b<0){b=Math.max(0,this.length+b);
}
for(var i=b;i>=0;i--){if(this[i]===a){return i;
}}return -1;
}}),arrayForEach:qx.lang.Object.select(Array.prototype.forEach?h:j,{"native":Array.prototype.forEach,"emulated":function(n,o){var l=this.length;

for(var i=0;i<l;i++){var p=this[i];

if(p!==undefined){n.call(o||window,p,i,this);
}}}}),arrayFilter:qx.lang.Object.select(Array.prototype.filter?h:j,{"native":Array.prototype.filter,"emulated":function(A,B){var C=[];
var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){if(A.call(B||window,D,i,this)){C.push(this[i]);
}}}return C;
}}),arrayMap:qx.lang.Object.select(Array.prototype.map?h:j,{"native":Array.prototype.map,"emulated":function(q,r){var s=[];
var l=this.length;

for(var i=0;i<l;i++){var t=this[i];

if(t!==undefined){s[i]=q.call(r||window,t,i,this);
}}return s;
}}),arraySome:qx.lang.Object.select(Array.prototype.some?h:j,{"native":Array.prototype.some,"emulated":function(x,y){var l=this.length;

for(var i=0;i<l;i++){var z=this[i];

if(z!==undefined){if(x.call(y||window,z,i,this)){return true;
}}}return false;
}}),arrayEvery:qx.lang.Object.select(Array.prototype.every?h:j,{"native":Array.prototype.every,"emulated":function(u,v){var l=this.length;

for(var i=0;i<l;i++){var w=this[i];

if(w!==undefined){if(!u.call(v||window,w,i,this)){return false;
}}}return true;
}}),stringQuote:qx.lang.Object.select(String.prototype.quote?h:j,{"native":String.prototype.quote,"emulated":function(){return g+this.replace(/\\/g,e).replace(/\"/g,d)+g;
}})}});
Error.prototype.toString=qx.lang.Core.errorToString;
Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
Array.prototype.forEach=qx.lang.Core.arrayForEach;
Array.prototype.filter=qx.lang.Core.arrayFilter;
Array.prototype.map=qx.lang.Core.arrayMap;
Array.prototype.some=qx.lang.Core.arraySome;
Array.prototype.every=qx.lang.Core.arrayEvery;
String.prototype.quote=qx.lang.Core.stringQuote;
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__cy:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__cz:function(O,P){return function(s){return O.prototype[P].apply(s,Array.prototype.slice.call(arguments,1));
};
},__cA:function(){var J=qx.lang.Generics.__cy;

for(var N in J){var L=window[N];
var K=J[N];

for(var i=0,l=K.length;i<l;i++){var M=K[i];

if(!L[M]){L[M]=qx.lang.Generics.__cz(L,M);
}}}}},defer:function(Q){Q.__cA();
}});
})();
(function(){var b="qx.ui.core.queue.Widget",a="widget";
qx.Class.define(b,{statics:{__gn:{},remove:function(e){delete this.__gn[e.$$hash];
},add:function(c){var d=this.__gn;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(a);
},flush:function(){var f=this.__gn;
var h;

for(var g in f){h=f[g];
delete f[g];
h.syncWidget();
}for(var g in f){return;
}this.__gn={};
}}});
})();
(function(){var e="qx.theme.manager.Font",d="Theme",c="changeTheme",b="_applyTheme",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:b,event:c}},members:{resolveDynamic:function(i){var j=this._dynamic;
return i instanceof qx.bom.Font?i:j[i];
},resolve:function(k){var n=this._dynamic;
var l=n[k];

if(l){return l;
}var m=this.getTheme();

if(m!==null&&m.fonts[k]){return n[k]=(new qx.bom.Font).set(m.fonts[k]);
}return k;
},isDynamic:function(f){var h=this._dynamic;

if(f&&(f instanceof qx.bom.Font||h[f]!==undefined)){return true;
}var g=this.getTheme();

if(g!==null&&f&&g.fonts[f]){h[f]=(new qx.bom.Font).set(g.fonts[f]);
return true;
}return false;
},_applyTheme:function(o){var p=this._getDynamic();

for(var s in p){if(p[s].themed){p[s].dispose();
delete p[s];
}}
if(o){var q=o.fonts;
var r=qx.bom.Font;

for(var s in q){p[s]=(new r).set(q[s]);
p[s].themed=true;
}}this._setDynamic(p);
}}});
})();
(function(){var j="source",i="scale",h="no-repeat",g="qx.client",f="mshtml",e="webkit",d="backgroundImage",c="div",b="qx.html.Image",a="qx/static/blank.gif";
qx.Class.define(b,{extend:qx.html.Element,members:{_applyProperty:function(name,q){arguments.callee.base.call(this,name,q);

if(name===j){var u=this.getDomElement();
var r=this.getAllStyles();

if(this.getNodeName()==c&&this.getStyle(d)){r.backgroundPosition=null;
r.backgroundRepeat=null;
}var s=this._getProperty(j);
var t=this._getProperty(i);
var v=t?i:h;
qx.bom.element.Decoration.update(u,s,v,r);
}},_createDomElement:function(){var n=this._getProperty(i);
var o=n?i:h;

if(qx.core.Variant.isSet(g,f)){var m=this._getProperty(j);
this.setNodeName(qx.bom.element.Decoration.getTagName(o,m));
}else{this.setNodeName(qx.bom.element.Decoration.getTagName(o));
}return arguments.callee.base.call(this);
},_copyData:function(k){return arguments.callee.base.call(this,true);
},setSource:function(l){this._setProperty(j,l);
return this;
},getSource:function(){return this._getProperty(j);
},resetSource:function(){if(qx.core.Variant.isSet(g,e)){this._setProperty(j,qx.util.ResourceManager.getInstance().toUri(a));
}else{this._removeProperty(j,true);
}return this;
},setScale:function(p){this._setProperty(i,p);
return this;
},getScale:function(){return this._getProperty(i);
}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){arguments.callee.base.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var O="left",N="top",M="_applyLayoutChange",L="hAlign",K="flex",J="vAlign",I="Integer",H="minWidth",G="width",F="minHeight",C="qx.ui.layout.Grid",E="height",D="maxHeight",B="maxWidth";
qx.Class.define(C,{extend:qx.ui.layout.Abstract,construct:function(bD,bE){arguments.callee.base.call(this);
this.__jT=[];
this.__jU=[];

if(bD){this.setSpacingX(bD);
}
if(bE){this.setSpacingY(bE);
}},properties:{spacingX:{check:I,init:0,apply:M},spacingY:{check:I,init:0,apply:M}},members:{__jV:null,__jT:null,__jU:null,__jW:null,__jX:null,__jY:null,__ka:null,__kb:null,__kc:null,verifyLayoutProperty:null,__kd:function(){var df=[];
var de=[];
var dg=[];
var dc=-1;
var db=-1;
var di=this._getLayoutChildren();

for(var i=0,l=di.length;i<l;i++){var dd=di[i];
var dh=dd.getLayoutProperties();
var dj=dh.row;
var da=dh.column;
dh.colSpan=dh.colSpan||1;
dh.rowSpan=dh.rowSpan||1;
if(dj==null||da==null){throw new Error("The layout properties 'row' and 'column' of the child widget '"+dd+"' must be defined!");
}
if(df[dj]&&df[dj][da]){throw new Error("Cannot add widget '"+dd+"'!. "+"There is already a widget '"+df[dj][da]+"' in this cell ("+dj+", "+da+")");
}
for(var x=da;x<da+dh.colSpan;x++){for(var y=dj;y<dj+dh.rowSpan;y++){if(df[y]==undefined){df[y]=[];
}df[y][x]=dd;
db=Math.max(db,x);
dc=Math.max(dc,y);
}}
if(dh.rowSpan>1){dg.push(dd);
}
if(dh.colSpan>1){de.push(dd);
}}for(var y=0;y<=dc;y++){if(df[y]==undefined){df[y]=[];
}}this.__jV=df;
this.__jW=de;
this.__jX=dg;
this.__jY=dc;
this.__ka=db;
this.__kb=null;
this.__kc=null;
delete this._invalidChildrenCache;
},_setRowData:function(bS,bT,bU){var bV=this.__jT[bS];

if(!bV){this.__jT[bS]={};
this.__jT[bS][bT]=bU;
}else{bV[bT]=bU;
}},_setColumnData:function(P,Q,R){var S=this.__jU[P];

if(!S){this.__jU[P]={};
this.__jU[P][Q]=R;
}else{S[Q]=R;
}},setSpacing:function(dv){this.setSpacingY(dv);
this.setSpacingX(dv);
return this;
},setColumnAlign:function(dA,dB,dC){{};
this._setColumnData(dA,L,dB);
this._setColumnData(dA,J,dC);
this._applyLayoutChange();
return this;
},getColumnAlign:function(bn){var bo=this.__jU[bn]||{};
return {vAlign:bo.vAlign||N,hAlign:bo.hAlign||O};
},setRowAlign:function(dD,dE,dF){{};
this._setRowData(dD,L,dE);
this._setRowData(dD,J,dF);
this._applyLayoutChange();
return this;
},getRowAlign:function(bl){var bm=this.__jT[bl]||{};
return {vAlign:bm.vAlign||N,hAlign:bm.hAlign||O};
},getCellWidget:function(X,Y){if(this._invalidChildrenCache){this.__kd();
}var X=this.__jV[X]||{};
return X[Y]||null;
},getRowCount:function(){if(this._invalidChildrenCache){this.__kd();
}return this.__jY+1;
},getColumnCount:function(){if(this._invalidChildrenCache){this.__kd();
}return this.__ka+1;
},getCellAlign:function(dm,dn){var du=N;
var ds=O;
var dt=this.__jT[dm];
var dq=this.__jU[dn];
var dp=this.__jV[dm][dn];

if(dp){var dr={vAlign:dp.getAlignY(),hAlign:dp.getAlignX()};
}else{dr={};
}if(dr.vAlign){du=dr.vAlign;
}else if(dt&&dt.vAlign){du=dt.vAlign;
}else if(dq&&dq.vAlign){du=dq.vAlign;
}if(dr.hAlign){ds=dr.hAlign;
}else if(dq&&dq.hAlign){ds=dq.hAlign;
}else if(dt&&dt.hAlign){ds=dt.hAlign;
}return {vAlign:du,hAlign:ds};
},setColumnFlex:function(dw,dx){this._setColumnData(dw,K,dx);
this._applyLayoutChange();
return this;
},getColumnFlex:function(T){var U=this.__jU[T]||{};
return U.flex!==undefined?U.flex:0;
},setRowFlex:function(dG,dH){this._setRowData(dG,K,dH);
this._applyLayoutChange();
return this;
},getRowFlex:function(k){var m=this.__jT[k]||{};
var n=m.flex!==undefined?m.flex:0;
return n;
},setColumnMaxWidth:function(bQ,bR){this._setColumnData(bQ,B,bR);
this._applyLayoutChange();
return this;
},getColumnMaxWidth:function(dK){var dL=this.__jU[dK]||{};
return dL.maxWidth!==undefined?dL.maxWidth:Infinity;
},setColumnWidth:function(a,b){this._setColumnData(a,G,b);
this._applyLayoutChange();
return this;
},getColumnWidth:function(g){var h=this.__jU[g]||{};
return h.width!==undefined?h.width:null;
},setColumnMinWidth:function(bF,bG){this._setColumnData(bF,H,bG);
this._applyLayoutChange();
return this;
},getColumnMinWidth:function(e){var f=this.__jU[e]||{};
return f.minWidth||0;
},setRowMaxHeight:function(dk,dl){this._setRowData(dk,D,dl);
this._applyLayoutChange();
return this;
},getRowMaxHeight:function(dy){var dz=this.__jT[dy]||{};
return dz.maxHeight||Infinity;
},setRowHeight:function(c,d){this._setRowData(c,E,d);
this._applyLayoutChange();
return this;
},getRowHeight:function(bH){var bI=this.__jT[bH]||{};
return bI.height!==undefined?bI.height:null;
},setRowMinHeight:function(dI,dJ){this._setRowData(dI,F,dJ);
this._applyLayoutChange();
return this;
},getRowMinHeight:function(V){var W=this.__jT[V]||{};
return W.minHeight||0;
},__ke:function(bW){var cb=bW.getSizeHint();
var ca=bW.getMarginLeft()+bW.getMarginRight();
var bY=bW.getMarginTop()+bW.getMarginBottom();
var bX={height:cb.height+bY,width:cb.width+ca,minHeight:cb.minHeight+bY,minWidth:cb.minWidth+ca,maxHeight:cb.maxHeight+bY,maxWidth:cb.maxWidth+ca};
return bX;
},_fixHeightsRowSpan:function(dM){var dX=this.getSpacingY();

for(var i=0,l=this.__jX.length;i<l;i++){var dP=this.__jX[i];
var dR=this.__ke(dP);
var dS=dP.getLayoutProperties();
var dO=dS.row;
var dV=dX*(dS.rowSpan-1);
var dN=dV;
var dU={};

for(var j=0;j<dS.rowSpan;j++){var ea=dS.row+j;
var dQ=dM[ea];
var dY=this.getRowFlex(ea);

if(dY>0){dU[ea]={min:dQ.minHeight,value:dQ.height,max:dQ.maxHeight,flex:dY};
}dV+=dQ.height;
dN+=dQ.minHeight;
}if(dV<dR.height){var dW=qx.ui.layout.Util.computeFlexOffsets(dU,dR.height,dV);

for(var j=0;j<dS.rowSpan;j++){var dT=dW[dO+j]?dW[dO+j].offset:0;
dM[dO+j].height+=dT;
}}if(dN<dR.minHeight){var dW=qx.ui.layout.Util.computeFlexOffsets(dU,dR.minHeight,dN);

for(var j=0;j<dS.rowSpan;j++){var dT=dW[dO+j]?dW[dO+j].offset:0;
dM[dO+j].minHeight+=dT;
}}}},_fixWidthsColSpan:function(bp){var bt=this.getSpacingX();

for(var i=0,l=this.__jW.length;i<l;i++){var bq=this.__jW[i];
var bs=this.__ke(bq);
var bv=bq.getLayoutProperties();
var br=bv.column;
var bB=bt*(bv.colSpan-1);
var bu=bB;
var bw={};
var by;

for(var j=0;j<bv.colSpan;j++){var bC=bv.column+j;
var bA=bp[bC];
var bz=this.getColumnFlex(bC);
if(bz>0){bw[bC]={min:bA.minWidth,value:bA.width,max:bA.maxWidth,flex:bz};
}bB+=bA.width;
bu+=bA.minWidth;
}if(bB<bs.width){var bx=qx.ui.layout.Util.computeFlexOffsets(bw,bs.width,bB);

for(var j=0;j<bv.colSpan;j++){by=bx[br+j]?bx[br+j].offset:0;
bp[br+j].width+=by;
}}if(bu<bs.minWidth){var bx=qx.ui.layout.Util.computeFlexOffsets(bw,bs.minWidth,bu);

for(var j=0;j<bv.colSpan;j++){by=bx[br+j]?bx[br+j].offset:0;
bp[br+j].minWidth+=by;
}}}},_getRowHeights:function(){if(this.__kb!=null){return this.__kb;
}var bj=[];
var bc=this.__jY;
var bb=this.__ka;

for(var bk=0;bk<=bc;bk++){var bd=0;
var bf=0;
var be=0;

for(var bi=0;bi<=bb;bi++){var ba=this.__jV[bk][bi];

if(!ba){continue;
}var bg=ba.getLayoutProperties().rowSpan||0;

if(bg>1){continue;
}var bh=this.__ke(ba);

if(this.getRowFlex(bk)>0){bd=Math.max(bd,bh.minHeight);
}else{bd=Math.max(bd,bh.height);
}bf=Math.max(bf,bh.height);
}var bd=Math.max(bd,this.getRowMinHeight(bk));
var be=this.getRowMaxHeight(bk);

if(this.getRowHeight(bk)!==null){var bf=this.getRowHeight(bk);
}else{var bf=Math.max(bd,Math.min(bf,be));
}bj[bk]={minHeight:bd,height:bf,maxHeight:be};
}
if(this.__jX.length>0){this._fixHeightsRowSpan(bj);
}this.__kb=bj;
return bj;
},_getColWidths:function(){if(this.__kc!=null){return this.__kc;
}var s=[];
var p=this.__ka;
var r=this.__jY;

for(var z=0;z<=p;z++){var v=0;
var u=0;
var q=Infinity;

for(var A=0;A<=r;A++){var o=this.__jV[A][z];

if(!o){continue;
}var t=o.getLayoutProperties().colSpan||0;

if(t>1){continue;
}var w=this.__ke(o);

if(this.getColumnFlex(z)>0){u=Math.max(u,w.minWidth);
}else{u=Math.max(u,w.width);
}v=Math.max(v,w.width);
}var u=Math.max(u,this.getColumnMinWidth(z));
var q=this.getColumnMaxWidth(z);

if(this.getColumnWidth(z)!==null){var v=this.getColumnWidth(z);
}else{var v=Math.max(u,Math.min(v,q));
}s[z]={minWidth:u,width:v,maxWidth:q};
}
if(this.__jW.length>0){this._fixWidthsColSpan(s);
}this.__kc=s;
return s;
},_getColumnFlexOffsets:function(bJ){var bK=this.getSizeHint();
var bO=bJ-bK.width;

if(bO==0){return {};
}var bM=this._getColWidths();
var bL={};

for(var i=0,l=bM.length;i<l;i++){var bP=bM[i];
var bN=this.getColumnFlex(i);

if((bN<=0)||(bP.width==bP.maxWidth&&bO>0)||(bP.width==bP.minWidth&&bO<0)){continue;
}bL[i]={min:bP.minWidth,value:bP.width,max:bP.maxWidth,flex:bN};
}return qx.ui.layout.Util.computeFlexOffsets(bL,bJ,bK.width);
},_getRowFlexOffsets:function(cH){var cI=this.getSizeHint();
var cL=cH-cI.height;

if(cL==0){return {};
}var cM=this._getRowHeights();
var cJ={};

for(var i=0,l=cM.length;i<l;i++){var cN=cM[i];
var cK=this.getRowFlex(i);

if((cK<=0)||(cN.height==cN.maxHeight&&cL>0)||(cN.height==cN.minHeight&&cL<0)){continue;
}cJ[i]={min:cN.minHeight,value:cN.height,max:cN.maxHeight,flex:cK};
}return qx.ui.layout.Util.computeFlexOffsets(cJ,cH,cI.height);
},renderLayout:function(cc,cd){if(this._invalidChildrenCache){this.__kd();
}var cr=qx.ui.layout.Util;
var cf=this.getSpacingX();
var cl=this.getSpacingY();
var cw=this._getColWidths();
var cv=this._getColumnFlexOffsets(cc);
var cg=[];
var cy=this.__ka;
var ce=this.__jY;
var cx;

for(var cz=0;cz<=cy;cz++){cx=cv[cz]?cv[cz].offset:0;
cg[cz]=cw[cz].width+cx;
}var co=this._getRowHeights();
var cq=this._getRowFlexOffsets(cd);
var cF=[];

for(var cm=0;cm<=ce;cm++){cx=cq[cm]?cq[cm].offset:0;
cF[cm]=co[cm].height+cx;
}var cG=0;

for(var cz=0;cz<=cy;cz++){var top=0;

for(var cm=0;cm<=ce;cm++){var ct=this.__jV[cm][cz];
if(!ct){top+=cF[cm]+cl;
continue;
}var ch=ct.getLayoutProperties();
if(ch.row!==cm||ch.column!==cz){top+=cF[cm]+cl;
continue;
}var cE=cf*(ch.colSpan-1);

for(var i=0;i<ch.colSpan;i++){cE+=cg[cz+i];
}var cu=cl*(ch.rowSpan-1);

for(var i=0;i<ch.rowSpan;i++){cu+=cF[cm+i];
}var ci=ct.getSizeHint();
var cC=ct.getMarginTop();
var cs=ct.getMarginLeft();
var cp=ct.getMarginBottom();
var ck=ct.getMarginRight();
var cn=Math.max(ci.minWidth,Math.min(cE-cs-ck,ci.maxWidth));
var cD=Math.max(ci.minHeight,Math.min(cu-cC-cp,ci.maxHeight));
var cA=this.getCellAlign(cm,cz);
var cB=cG+cr.computeHorizontalAlignOffset(cA.hAlign,cn,cE,cs,ck);
var cj=top+cr.computeVerticalAlignOffset(cA.vAlign,cD,cu,cC,cp);
ct.renderLayout(cB,cj,cn,cD);
top+=cF[cm]+cl;
}cG+=cg[cz]+cf;
}},invalidateLayoutCache:function(){arguments.callee.base.call(this);
this.__kc=null;
this.__kb=null;
},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__kd();
}var cS=this._getColWidths();
var cU=0,cV=0;

for(var i=0,l=cS.length;i<l;i++){var cW=cS[i];

if(this.getColumnFlex(i)>0){cU+=cW.minWidth;
}else{cU+=cW.width;
}cV+=cW.width;
}var cX=this._getRowHeights();
var cQ=0,cT=0;

for(var i=0,l=cX.length;i<l;i++){var cY=cX[i];

if(this.getRowFlex(i)>0){cQ+=cY.minHeight;
}else{cQ+=cY.height;
}cT+=cY.height;
}var cP=this.getSpacingX()*(cS.length-1);
var cO=this.getSpacingY()*(cX.length-1);
var cR={minWidth:cU+cP,width:cV+cP,minHeight:cQ+cO,height:cT+cO};
return cR;
}},destruct:function(){this.__jV=this.__jT=this.__jU=this.__jW=this.__jX=this.__kc=this.__kb=null;
}});
})();
(function(){var c="qx.bom.client.Locale",b="-",a="";
qx.Class.define(c,{statics:{LOCALE:"",VARIANT:"",__gM:function(){var e=(qx.bom.client.Engine.MSHTML?navigator.userLanguage:navigator.language).toLowerCase();
var g=a;
var f=e.indexOf(b);

if(f!=-1){g=e.substr(f+1);
e=e.substr(0,f);
}this.LOCALE=e;
this.VARIANT=g;
}},defer:function(d){d.__gM();
}});
})();
(function(){var k="_",j="",h="qx.dynlocale",g="on",f="_applyLocale",e="changeLocale",d="C",c="qx.locale.Manager",b="String",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__gQ=qx.$$translations||{};
this.__gR=qx.$$locales||{};
var n=qx.bom.client.Locale;
var l=n.LOCALE;
var m=n.VARIANT;

if(m!==j){l+=k+m;
}this.setLocale(l||this.__gS);
},statics:{tr:function(o,p){var q=qx.lang.Array.fromArguments(arguments);
q.splice(0,1);
return qx.locale.Manager.getInstance().translate(o,q);
},trn:function(r,s,t,u){var v=qx.lang.Array.fromArguments(arguments);
v.splice(0,3);
if(t!=1){return qx.locale.Manager.getInstance().translate(s,v);
}else{return qx.locale.Manager.getInstance().translate(r,v);
}},trc:function(bd,be,bf){var bg=qx.lang.Array.fromArguments(arguments);
bg.splice(0,2);
return qx.locale.Manager.getInstance().translate(be,bg);
},marktr:function(w){return w;
}},properties:{locale:{check:b,nullable:true,apply:f,event:e}},members:{__gS:d,__gT:null,__gU:null,__gQ:null,__gR:null,getLanguage:function(){return this.__gU;
},getTerritory:function(){return this.getLocale().split(k)[1]||j;
},getAvailableLocales:function(){var X=[];

for(var W in this.__gR){if(W!=this.__gS){X.push(W);
}}return X;
},__gV:function(P){var R;
var Q=P.indexOf(k);

if(Q==-1){R=P;
}else{R=P.substring(0,Q);
}return R;
},_applyLocale:function(x,y){this.__gT=x;
this.__gU=this.__gV(x);
},addTranslation:function(S,T){var U=this.__gQ;

if(U[S]){for(var V in T){U[S][V]=T[V];
}}else{U[S]=T;
}},addLocale:function(Y,ba){var bb=this.__gR;

if(bb[Y]){for(var bc in ba){bb[Y][bc]=ba[bc];
}}else{bb[Y]=ba;
}},translate:function(H,I,J){var O;
var M=this.__gQ;

if(!M){return H;
}
if(J){var L=this.__gV(J);
}else{J=this.__gT;
L=this.__gU;
}
if(!O&&M[J]){O=M[J][H];
}
if(!O&&M[L]){O=M[L][H];
}
if(!O&&M[this.__gS]){O=M[this.__gS][H];
}
if(!O){O=H;
}
if(I.length>0){var K=[];

for(var i=0;i<I.length;i++){var N=I[i];

if(N&&N.translate){K[i]=N.translate();
}else{K[i]=N;
}}O=qx.lang.String.format(O,K);
}
if(qx.core.Variant.isSet(h,g)){O=new qx.locale.LocalizedString(O,H,I);
}return O;
},localize:function(z,A,B){var G;
var E=this.__gR;

if(!E){return z;
}
if(B){var D=this.__gV(B);
}else{B=this.__gT;
D=this.__gU;
}
if(!G&&E[B]){G=E[B][z];
}
if(!G&&E[D]){G=E[D][z];
}
if(!G&&E[this.__gS]){G=E[this.__gS][z];
}
if(!G){G=z;
}
if(A.length>0){var C=[];

for(var i=0;i<A.length;i++){var F=A[i];

if(F.translate){C[i]=F.translate();
}else{C[i]=F;
}}G=qx.lang.String.format(G,C);
}
if(qx.core.Variant.isSet(h,g)){G=new qx.locale.LocalizedString(G,z,A);
}return G;
}},destruct:function(){this.__gQ=this.__gR=null;
}});
})();
(function(){var o="keydown",n="qx.client",m="keypress",l="NumLock",k="keyup",j="Enter",i="0",h="9",g="-",f="PageUp",bv="+",bu="PrintScreen",bt="gecko",bs="A",br="Z",bq="Left",bp="F5",bo="Down",bn="Up",bm="F11",v="F6",w="useraction",t="F3",u="keyinput",r="Insert",s="F8",p="End",q="/",D="Delete",E="*",Q="F1",M="F4",Y="Home",T="F2",bi="F12",be="PageDown",I="F7",bl="F9",bk="F10",bj="Right",H="text",K="Escape",L="webkit",O="5",R="3",U="Meta",bb="7",bg="CapsLock",x="input",y="Control",J="Space",X="Tab",W="Shift",V="Pause",bd="Unidentified",bc="qx.event.handler.Keyboard",S="mshtml",ba="mshtml|webkit",c="6",bf="off",z="Apps",A="4",N="Alt",d="2",e="Scroll",G="1",B="8",C="Win",F="autoComplete",P=",",bh="Backspace";
qx.Class.define(bc,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(bY){arguments.callee.base.call(this);
this.__ek=bY;
this.__el=bY.getWindow();
if(qx.core.Variant.isSet(n,bt)){this.__em=this.__el;
}else{this.__em=this.__el.document.documentElement;
}this.__en={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(cp){if(this._identifierToKeyCodeMap[cp]){return true;
}
if(cp.length!=1){return false;
}
if(cp>=i&&cp<=h){return true;
}
if(cp>=bs&&cp<=br){return true;
}
switch(cp){case bv:case g:case E:case q:return true;
default:return false;
}}},members:{__eo:null,__ek:null,__el:null,__em:null,__en:null,__ep:null,__eq:null,__er:null,canHandleEvent:function(ca,cb){},registerEvent:function(ct,cu,cv){},unregisterEvent:function(bJ,bK,bL){},_fireInputEvent:function(bw,bx){var by=this.__es();
if(by&&by.offsetWidth!=0){var event=qx.event.Registration.createEvent(u,qx.event.type.KeyInput,[bw,by,bx]);
this.__ek.dispatchEvent(by,event);
}if(this.__el){qx.event.Registration.fireEvent(this.__el,w,qx.event.type.Data,[u]);
}},_fireSequenceEvent:function(cH,cI,cJ){var cK=this.__es();
var cL=cH.keyCode;
var event=qx.event.Registration.createEvent(cI,qx.event.type.KeySequence,[cH,cK,cJ]);
this.__ek.dispatchEvent(cK,event);
if(qx.core.Variant.isSet(n,ba)){if(cI==o&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(cL)&&!this._emulateKeyPress[cL]){this._fireSequenceEvent(cH,m,cJ);
}}}if(this.__el){qx.event.Registration.fireEvent(this.__el,w,qx.event.type.Data,[cI]);
}},__es:function(){var cw=this.__ek.getHandler(qx.event.handler.Focus);
var cx=cw.getActive();
if(!cx||cx.offsetWidth==0){cx=cw.getFocus();
}if(!cx||cx.offsetWidth==0){cx=this.__ek.getWindow().document.body;
}return cx;
},_initKeyObserver:function(){this.__eo=qx.lang.Function.listener(this.__et,this);
this.__er=qx.lang.Function.listener(this.__ev,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__em,k,this.__eo);
Event.addNativeListener(this.__em,o,this.__eo);
Event.addNativeListener(this.__em,m,this.__er);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__em,k,this.__eo);
Event.removeNativeListener(this.__em,o,this.__eo);
Event.removeNativeListener(this.__em,m,this.__er);

for(var ck in (this.__eq||{})){var cj=this.__eq[ck];
Event.removeNativeListener(cj.target,m,cj.callback);
}delete (this.__eq);
},__et:qx.event.GlobalError.observeMethod(qx.core.Variant.select(n,{"mshtml":function(bU){bU=window.event||bU;
var bX=bU.keyCode;
var bV=0;
var bW=bU.type;
if(!(this.__en[bX]==o&&bW==o)){this._idealKeyHandler(bX,bV,bW,bU);
}if(bW==o){if(this._isNonPrintableKeyCode(bX)||this._emulateKeyPress[bX]){this._idealKeyHandler(bX,bV,m,bU);
}}this.__en[bX]=bW;
},"gecko":function(cc){var cg=this._keyCodeFix[cc.keyCode]||cc.keyCode;
var ce=0;
var cf=cc.type;
if(qx.bom.client.Platform.WIN){var cd=cg?this._keyCodeToIdentifier(cg):this._charCodeToIdentifier(ce);

if(!(this.__en[cd]==o&&cf==o)){this._idealKeyHandler(cg,ce,cf,cc);
}this.__en[cd]=cf;
}else{this._idealKeyHandler(cg,ce,cf,cc);
}this.__eu(cc.target,cf,cg);
},"webkit":function(bQ){var bT=0;
var bR=0;
var bS=bQ.type;
if(qx.bom.client.Engine.VERSION<525.13){if(bS==k||bS==o){bT=this._charCode2KeyCode[bQ.charCode]||bQ.keyCode;
}else{if(this._charCode2KeyCode[bQ.charCode]){bT=this._charCode2KeyCode[bQ.charCode];
}else{bR=bQ.charCode;
}}this._idealKeyHandler(bT,bR,bS,bQ);
}else{bT=bQ.keyCode;
if(!(this.__en[bT]==o&&bS==o)){this._idealKeyHandler(bT,bR,bS,bQ);
}if(bS==o){if(this._isNonPrintableKeyCode(bT)||this._emulateKeyPress[bT]){this._idealKeyHandler(bT,bR,m,bQ);
}}this.__en[bT]=bS;
}},"opera":function(cq){this.__ep=cq.keyCode;
this._idealKeyHandler(cq.keyCode,0,cq.type,cq);
}})),__eu:qx.core.Variant.select(n,{"gecko":function(cC,cD,cE){if(cD===o&&(cE==33||cE==34||cE==38||cE==40)&&cC.type==H&&cC.tagName.toLowerCase()===x&&cC.getAttribute(F)!==bf){if(!this.__eq){this.__eq={};
}var cG=qx.core.ObjectRegistry.toHashCode(cC);

if(this.__eq[cG]){return;
}var self=this;
this.__eq[cG]={target:cC,callback:function(cy){qx.bom.Event.stopPropagation(cy);
self.__ev(cy);
}};
var cF=qx.event.GlobalError.observeMethod(this.__eq[cG].callback);
qx.bom.Event.addNativeListener(cC,m,cF);
}},"default":null}),__ev:qx.event.GlobalError.observeMethod(qx.core.Variant.select(n,{"mshtml":function(cs){cs=window.event||cs;

if(this._charCode2KeyCode[cs.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cs.keyCode],0,cs.type,cs);
}else{this._idealKeyHandler(0,cs.keyCode,cs.type,cs);
}},"gecko":function(bM){var bP=this._keyCodeFix[bM.keyCode]||bM.keyCode;
var bN=bM.charCode;
var bO=bM.type;
this._idealKeyHandler(bP,bN,bO,bM);
},"webkit":function(bz){if(qx.bom.client.Engine.VERSION<525.13){var bC=0;
var bA=0;
var bB=bz.type;

if(bB==k||bB==o){bC=this._charCode2KeyCode[bz.charCode]||bz.keyCode;
}else{if(this._charCode2KeyCode[bz.charCode]){bC=this._charCode2KeyCode[bz.charCode];
}else{bA=bz.charCode;
}}this._idealKeyHandler(bC,bA,bB,bz);
}else{if(this._charCode2KeyCode[bz.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[bz.keyCode],0,bz.type,bz);
}else{this._idealKeyHandler(0,bz.keyCode,bz.type,bz);
}}},"opera":function(cz){var cB=cz.keyCode;
var cA=cz.type;
if(cB!=this.__ep){this._idealKeyHandler(0,this.__ep,cA,cz);
}else{if(this._keyCodeToIdentifierMap[cz.keyCode]){this._idealKeyHandler(cz.keyCode,0,cz.type,cz);
}else{this._idealKeyHandler(0,cz.keyCode,cz.type,cz);
}}}})),_idealKeyHandler:function(bE,bF,bG,bH){var bI;
if(bE||(!bE&&!bF)){bI=this._keyCodeToIdentifier(bE);
this._fireSequenceEvent(bH,bG,bI);
}else{bI=this._charCodeToIdentifier(bF);
this._fireSequenceEvent(bH,m,bI);
this._fireInputEvent(bH,bF);
}},_specialCharCodeMap:{8:bh,9:X,13:j,27:K,32:J},_emulateKeyPress:qx.core.Variant.select(n,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:W,17:y,18:N,20:bg,224:U,37:bq,38:bn,39:bj,40:bo,33:f,34:be,35:p,36:Y,45:r,46:D,112:Q,113:T,114:t,115:M,116:bp,117:v,118:I,119:s,120:bl,121:bk,122:bm,123:bi,144:l,44:bu,145:e,19:V,91:C,93:z},_numpadToCharCode:{96:i.charCodeAt(0),97:G.charCodeAt(0),98:d.charCodeAt(0),99:R.charCodeAt(0),100:A.charCodeAt(0),101:O.charCodeAt(0),102:c.charCodeAt(0),103:bb.charCodeAt(0),104:B.charCodeAt(0),105:h.charCodeAt(0),106:E.charCodeAt(0),107:bv.charCodeAt(0),109:g.charCodeAt(0),110:P.charCodeAt(0),111:q.charCodeAt(0)},_charCodeA:bs.charCodeAt(0),_charCodeZ:br.charCodeAt(0),_charCode0:i.charCodeAt(0),_charCode9:h.charCodeAt(0),_isNonPrintableKeyCode:function(bD){return this._keyCodeToIdentifierMap[bD]?true:false;
},_isIdentifiableKeyCode:function(ch){if(ch>=this._charCodeA&&ch<=this._charCodeZ){return true;
}if(ch>=this._charCode0&&ch<=this._charCode9){return true;
}if(this._specialCharCodeMap[ch]){return true;
}if(this._numpadToCharCode[ch]){return true;
}if(this._isNonPrintableKeyCode(ch)){return true;
}return false;
},_keyCodeToIdentifier:function(a){if(this._isIdentifiableKeyCode(a)){var b=this._numpadToCharCode[a];

if(b){return String.fromCharCode(b);
}return (this._keyCodeToIdentifierMap[a]||this._specialCharCodeMap[a]||String.fromCharCode(a));
}else{return bd;
}},_charCodeToIdentifier:function(cr){return this._specialCharCodeMap[cr]||String.fromCharCode(cr).toUpperCase();
},_identifierToKeyCode:function(ci){return qx.event.handler.Keyboard._identifierToKeyCodeMap[ci]||ci.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__ep=this.__ek=this.__el=this.__em=this.__en=null;
},defer:function(cl,cm,cn){qx.event.Registration.addHandler(cl);
if(!cl._identifierToKeyCodeMap){cl._identifierToKeyCodeMap={};

for(var co in cm._keyCodeToIdentifierMap){cl._identifierToKeyCodeMap[cm._keyCodeToIdentifierMap[co]]=parseInt(co,10);
}
for(var co in cm._specialCharCodeMap){cl._identifierToKeyCodeMap[cm._specialCharCodeMap[co]]=parseInt(co,10);
}}
if(qx.core.Variant.isSet(n,S)){cm._charCode2KeyCode={13:13,27:27};
}else if(qx.core.Variant.isSet(n,bt)){cm._keyCodeFix={12:cm._identifierToKeyCode(l)};
}else if(qx.core.Variant.isSet(n,L)){if(qx.bom.client.Engine.VERSION<525.13){cm._charCode2KeyCode={63289:cm._identifierToKeyCode(l),63276:cm._identifierToKeyCode(f),63277:cm._identifierToKeyCode(be),63275:cm._identifierToKeyCode(p),63273:cm._identifierToKeyCode(Y),63234:cm._identifierToKeyCode(bq),63232:cm._identifierToKeyCode(bn),63235:cm._identifierToKeyCode(bj),63233:cm._identifierToKeyCode(bo),63272:cm._identifierToKeyCode(D),63302:cm._identifierToKeyCode(r),63236:cm._identifierToKeyCode(Q),63237:cm._identifierToKeyCode(T),63238:cm._identifierToKeyCode(t),63239:cm._identifierToKeyCode(M),63240:cm._identifierToKeyCode(bp),63241:cm._identifierToKeyCode(v),63242:cm._identifierToKeyCode(I),63243:cm._identifierToKeyCode(s),63244:cm._identifierToKeyCode(bl),63245:cm._identifierToKeyCode(bk),63246:cm._identifierToKeyCode(bm),63247:cm._identifierToKeyCode(bi),63248:cm._identifierToKeyCode(bu),3:cm._identifierToKeyCode(j),12:cm._identifierToKeyCode(l),13:cm._identifierToKeyCode(j)};
}else{cm._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var c="qx.event.handler.Capture";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(h,i,j){},unregisterEvent:function(d,e,f){}},defer:function(g){qx.event.Registration.addHandler(g);
}});
})();
(function(){var R="alias",Q="copy",P="blur",O="mouseout",N="keydown",M="Ctrl",L="Shift",K="mousemove",J="move",I="mouseover",bi="Alt",bh="keyup",bg="mouseup",bf="dragend",be="on",bd="mousedown",bc="qxDraggable",bb="drag",ba="drop",Y="qxDroppable",W="qx.event.handler.DragDrop",X="droprequest",U="dragstart",V="dragchange",S="dragleave",T="dragover";
qx.Class.define(W,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(F){arguments.callee.base.call(this);
this.__eM=F;
this.__eN=F.getWindow().document.documentElement;
this.__eM.addListener(this.__eN,bd,this._onMouseDown,this);
this.__fa();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__eM:null,__eN:null,__eO:null,__eP:null,__eQ:null,__eR:null,__eS:null,__eT:null,__eU:null,__eV:null,__eW:false,__eX:0,__eY:0,canHandleEvent:function(g,h){},registerEvent:function(k,l,m){},unregisterEvent:function(n,o,p){},addType:function(bj){this.__eQ[bj]=true;
},addAction:function(i){this.__eR[i]=true;
},supportsType:function(D){return !!this.__eQ[D];
},supportsAction:function(G){return !!this.__eR[G];
},getData:function(f){if(!this.__fh||!this.__eO){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__eQ[f]){throw new Error("Unsupported data type: "+f+"!");
}
if(!this.__eT[f]){this.__eU=f;
this.__fc(X,this.__eP,this.__eO,false);
}
if(!this.__eT[f]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__eT[f]||null;
},getCurrentAction:function(){return this.__eV;
},addData:function(bk,bl){this.__eT[bk]=bl;
},getCurrentType:function(){return this.__eU;
},__fa:function(){this.__eQ={};
this.__eR={};
this.__eS={};
this.__eT={};
},__fb:function(){if(this.__eP==null){return;
}var C=this.__eR;
var A=this.__eS;
var B=null;

if(this.__fh){if(A.Shift&&A.Ctrl&&C.alias){B=R;
}else if(A.Shift&&A.Alt&&C.copy){B=Q;
}else if(A.Shift&&C.move){B=J;
}else if(A.Alt&&C.alias){B=R;
}else if(A.Ctrl&&C.copy){B=Q;
}else if(C.move){B=J;
}else if(C.copy){B=Q;
}else if(C.alias){B=R;
}}
if(B!=this.__eV){this.__eV=B;
this.__fc(V,this.__eP,this.__eO,false);
}},__fc:function(s,t,u,v,w){var y=qx.event.Registration;
var x=y.createEvent(s,qx.event.type.Drag,[v,w]);

if(t!==u){x.setRelatedTarget(u);
}return y.dispatchEvent(t,x);
},__fd:function(a){while(a&&a.nodeType==1){if(a.getAttribute(bc)==be){return a;
}a=a.parentNode;
}return null;
},__fe:function(H){while(H&&H.nodeType==1){if(H.getAttribute(Y)==be){return H;
}H=H.parentNode;
}return null;
},__ff:function(){this.__eP=null;
this.__eM.removeListener(this.__eN,K,this._onMouseMove,this,true);
this.__eM.removeListener(this.__eN,bg,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,P,this._onWindowBlur,this);
this.__fa();
},__fg:function(){if(this.__eW){this.__eM.removeListener(this.__eN,I,this._onMouseOver,this,true);
this.__eM.removeListener(this.__eN,O,this._onMouseOut,this,true);
this.__eM.removeListener(this.__eN,N,this._onKeyDown,this,true);
this.__eM.removeListener(this.__eN,bh,this._onKeyUp,this,true);
this.__fc(bf,this.__eP,this.__eO,false);
this.__eW=false;
}this.__fh=false;
this.__eO=null;
this.__ff();
},__fh:false,_onWindowBlur:function(e){this.__fg();
},_onKeyDown:function(e){var bm=e.getKeyIdentifier();

switch(bm){case bi:case M:case L:if(!this.__eS[bm]){this.__eS[bm]=true;
this.__fb();
}}},_onKeyUp:function(e){var j=e.getKeyIdentifier();

switch(j){case bi:case M:case L:if(this.__eS[j]){this.__eS[j]=false;
this.__fb();
}}},_onMouseDown:function(e){if(this.__eW){return;
}var z=this.__fd(e.getTarget());

if(z){this.__eX=e.getDocumentLeft();
this.__eY=e.getDocumentTop();
this.__eP=z;
this.__eM.addListener(this.__eN,K,this._onMouseMove,this,true);
this.__eM.addListener(this.__eN,bg,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,P,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__fh){this.__fc(ba,this.__eO,this.__eP,false,e);
}if(this.__eW){e.stopPropagation();
}this.__fg();
},_onMouseMove:function(e){if(this.__eW){if(!this.__fc(bb,this.__eP,this.__eO,true,e)){this.__fg();
}}else{if(Math.abs(e.getDocumentLeft()-this.__eX)>3||Math.abs(e.getDocumentTop()-this.__eY)>3){if(this.__fc(U,this.__eP,this.__eO,true,e)){this.__eW=true;
this.__eM.addListener(this.__eN,I,this._onMouseOver,this,true);
this.__eM.addListener(this.__eN,O,this._onMouseOut,this,true);
this.__eM.addListener(this.__eN,N,this._onKeyDown,this,true);
this.__eM.addListener(this.__eN,bh,this._onKeyUp,this,true);
var b=this.__eS;
b.Ctrl=e.isCtrlPressed();
b.Shift=e.isShiftPressed();
b.Alt=e.isAltPressed();
this.__fb();
}else{this.__fc(bf,this.__eP,this.__eO,false);
this.__ff();
}}}},_onMouseOver:function(e){var q=e.getTarget();
var r=this.__fe(q);

if(r&&r!=this.__eO){this.__fh=this.__fc(T,r,this.__eP,true,e);
this.__eO=r;
this.__fb();
}},_onMouseOut:function(e){var d=this.__fe(e.getTarget());
var c=this.__fe(e.getRelatedTarget());

if(d&&d!==c&&d==this.__eO){this.__fc(S,this.__eO,c,false,e);
this.__eO=null;
this.__fh=false;
qx.event.Timer.once(this.__fb,this,0);
}}},destruct:function(){this.__eP=this.__eO=this.__eM=this.__eN=this.__eQ=this.__eR=this.__eS=this.__eT=null;
},defer:function(E){qx.event.Registration.addHandler(E);
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__cB:null,__cC:null,init:function(d,e,f){arguments.callee.base.call(this,false,f);
this.__cB=d;
this.__cC=e;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c.__cB=this.__cB;
c.__cC=this.__cC;
return c;
},getData:function(){return this.__cB;
},getOldData:function(){return this.__cC;
}},destruct:function(){this.__cB=this.__cC=null;
}});
})();
(function(){var g="mshtml",f="qx.client",e="qx.bom.element.Dimension",d="paddingRight",c="paddingLeft",b="paddingTop",a="paddingBottom";
qx.Class.define(e,{statics:{getWidth:qx.core.Variant.select(f,{"gecko":function(i){if(i.getBoundingClientRect){var j=i.getBoundingClientRect();
return Math.round(j.right)-Math.round(j.left);
}else{return i.offsetWidth;
}},"default":function(v){return v.offsetWidth;
}}),getHeight:qx.core.Variant.select(f,{"gecko":function(l){if(l.getBoundingClientRect){var m=l.getBoundingClientRect();
return Math.round(m.bottom)-Math.round(m.top);
}else{return l.offsetHeight;
}},"default":function(h){return h.offsetHeight;
}}),getSize:function(n){return {width:this.getWidth(n),height:this.getHeight(n)};
},__jE:{visible:true,hidden:true},getContentWidth:function(o){var q=qx.bom.element.Style;
var r=qx.bom.element.Overflow.getX(o);
var s=parseInt(q.get(o,c),10);
var u=parseInt(q.get(o,d),10);

if(this.__jE[r]){return o.clientWidth-s-u;
}else{if(o.clientWidth>=o.scrollWidth){return Math.max(o.clientWidth,o.scrollWidth)-s-u;
}else{var t=o.scrollWidth-s;
var p=qx.bom.client.Engine;

if(p.NAME===g&&p.VERSION==6){t-=u;
}return t;
}}},getContentHeight:function(w){var y=qx.bom.element.Style;
var A=qx.bom.element.Overflow.getY(w);
var B=parseInt(y.get(w,b),10);
var z=parseInt(y.get(w,a),10);

if(this.__jE[A]){return w.clientHeight-B-z;
}else{if(w.clientHeight>=w.scrollHeight){return Math.max(w.clientHeight,w.scrollHeight)-B-z;
}else{var C=w.scrollHeight-B;
var x=qx.bom.client.Engine;

if(x.NAME===g&&x.VERSION==6){C-=z;
}return C;
}}},getContentSize:function(k){return {width:this.getContentWidth(k),height:this.getContentHeight(k)};
}}});
})();
(function(){var e="qx.client",d="load",c="qx.io.ImageLoader";
qx.Bootstrap.define(c,{statics:{__hl:{},__hm:{width:null,height:null},__hn:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(s){var t=this.__hl[s];
return !!(t&&t.loaded);
},isFailed:function(f){var g=this.__hl[f];
return !!(g&&g.failed);
},isLoading:function(h){var j=this.__hl[h];
return !!(j&&j.loading);
},getFormat:function(a){var b=this.__hl[a];
return b?b.format:null;
},getSize:function(k){var m=this.__hl[k];
return m?
{width:m.width,height:m.height}:this.__hm;
},getWidth:function(v){var w=this.__hl[v];
return w?w.width:null;
},getHeight:function(p){var q=this.__hl[p];
return q?q.height:null;
},load:function(C,D,E){var F=this.__hl[C];

if(!F){F=this.__hl[C]={};
}if(D&&!E){E=window;
}if(F.loaded||F.loading||F.failed){if(D){if(F.loading){F.callbacks.push(D,E);
}else{D.call(E,C,F);
}}}else{F.loading=true;
F.callbacks=[];

if(D){F.callbacks.push(D,E);
}var H=new Image();
var G=qx.lang.Function.listener(this.__ho,this,H,C);
H.onload=G;
H.onerror=G;
H.src=C;
}},__ho:qx.event.GlobalError.observeMethod(function(event,x,y){var z=this.__hl[y];
if(event.type===d){z.loaded=true;
z.width=this.__hp(x);
z.height=this.__hq(x);
var A=this.__hn.exec(y);

if(A!=null){z.format=A[1];
}}else{z.failed=true;
}x.onload=x.onerror=null;
var B=z.callbacks;
delete z.loading;
delete z.callbacks;
for(var i=0,l=B.length;i<l;i+=2){B[i].call(B[i+1],y,z);
}}),__hp:qx.core.Variant.select(e,{"gecko":function(n){return n.naturalWidth;
},"default":function(o){return o.width;
}}),__hq:qx.core.Variant.select(e,{"gecko":function(u){return u.naturalHeight;
},"default":function(r){return r.height;
}})}});
})();
(function(){var b="qx.client",a="qx.event.type.Drag";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(g,h){arguments.callee.base.call(this,true,g);

if(h){this._native=h.getNativeEvent()||null;
this._originalTarget=h.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(c){var d=arguments.callee.base.call(this,c);
d._native=this._native;
return d;
},getDocumentLeft:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var f=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(f);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageX;
}}),getDocumentTop:qx.core.Variant.select(b,{"mshtml":function(){if(this._native==null){return 0;
}var m=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(m);
},"default":function(){if(this._native==null){return 0;
}return this._native.pageY;
}}),getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(j){this.getManager().addType(j);
},addAction:function(o){this.getManager().addAction(o);
},supportsType:function(i){return this.getManager().supportsType(i);
},supportsAction:function(n){return this.getManager().supportsAction(n);
},addData:function(k,l){this.getManager().addData(k,l);
},getData:function(e){return this.getManager().getData(e);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var h="/",g="mshtml",f="",e="qx.client",d="?",c="string",b="qx.util.ResourceManager",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,statics:{__gK:qx.$$resources||{},__gL:{}},members:{has:function(y){return !!arguments.callee.self.__gK[y];
},getData:function(B){return arguments.callee.self.__gK[B]||null;
},getImageWidth:function(w){var x=arguments.callee.self.__gK[w];
return x?x[0]:null;
},getImageHeight:function(z){var A=arguments.callee.self.__gK[z];
return A?A[1]:null;
},getImageFormat:function(k){var l=arguments.callee.self.__gK[k];
return l?l[2]:null;
},isClippedImage:function(i){var j=arguments.callee.self.__gK[i];
return j&&j.length>4;
},toUri:function(m){if(m==null){return m;
}var n=arguments.callee.self.__gK[m];

if(!n){return m;
}
if(typeof n===c){var p=n;
}else{var p=n[3];
if(!p){return m;
}}var o=f;

if(qx.core.Variant.isSet(e,g)&&qx.bom.client.Feature.SSL){o=arguments.callee.self.__gL[p];
}return o+qx.$$libraries[p].resourceUri+h+m;
}},defer:function(q){if(qx.core.Variant.isSet(e,g)){if(qx.bom.client.Feature.SSL){for(var u in qx.$$libraries){var s;

if(qx.$$libraries[u].resourceUri){s=qx.$$libraries[u].resourceUri;
}else{q.__gL[u]=f;
continue;
}if(s.match(/^\/\//)!=null){q.__gL[u]=window.location.protocol;
}else if(s.match(/^\.\//)!=null){var r=document.URL;
q.__gL[u]=r.substring(0,r.lastIndexOf(h)+1);
}else if(s.match(/^http/)!=null){}else{var v=window.location.href.indexOf(d);
var t;

if(v==-1){t=window.location.href;
}else{t=window.location.href.substring(0,v);
}q.__gL[u]=t.substring(0,t.lastIndexOf(h)+1);
}}}}}});
})();
(function(){var g="object",f="_applyTheme",e="qx.theme.manager.Decoration",d="Theme",c="__gD",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.core.Object,properties:{theme:{check:d,nullable:true,apply:f}},members:{__gD:null,resolve:function(j){if(!j){return null;
}
if(typeof j===g){return j;
}var m=this.getTheme();

if(!m){return null;
}var m=this.getTheme();

if(!m){return null;
}var n=this.__gD;

if(!n){n=this.__gD={};
}var k=n[j];

if(k){return k;
}var l=m.decorations[j];

if(!l){return null;
}var o=l.decorator;

if(o==null){throw new Error("Missing definition of which decorator to use in entry: "+j+"!");
}return n[j]=(new o).set(l.style);
},isValidPropertyValue:function(t){if(typeof t===b){return this.isDynamic(t);
}else if(typeof t===g){var u=t.constructor;
return qx.Class.hasInterface(u,qx.ui.decoration.IDecorator);
}return false;
},isDynamic:function(h){if(!h){return false;
}var i=this.getTheme();

if(!i){return false;
}return !!i.decorations[h];
},_applyTheme:function(p,q){var s=qx.util.AliasManager.getInstance();

if(q){for(var r in q.aliases){s.remove(r);
}}
if(p){for(var r in p.aliases){s.add(r,p.aliases[r]);
}}
if(!p){this.__gD={};
}}},destruct:function(){this._disposeMap(c);
}});
})();
(function(){var q="qx.client",p="",o="boxSizing",n="box-sizing",m=":",k="border-box",j="qx.bom.element.BoxSizing",h="KhtmlBoxSizing",g="-moz-box-sizing",f="WebkitBoxSizing",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(j,{statics:{__ga:qx.core.Variant.select(q,{"mshtml":null,"webkit":[o,h,f],"gecko":[a],"opera":[o]}),__gb:qx.core.Variant.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[g],"opera":[n]}),__gc:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__gd:function(F){var G=this.__gc;
return G.tags[F.tagName.toLowerCase()]||G.types[F.type];
},compile:qx.core.Variant.select(q,{"mshtml":function(v){{};
},"default":function(z){var B=this.__gb;
var A=p;

if(B){for(var i=0,l=B.length;i<l;i++){A+=B[i]+m+z+c;
}}return A;
}}),get:qx.core.Variant.select(q,{"mshtml":function(u){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(u))){if(!this.__gd(u)){return d;
}}return k;
},"default":function(r){var t=this.__ga;
var s;

if(t){for(var i=0,l=t.length;i<l;i++){s=qx.bom.element.Style.get(r,t[i],null,false);

if(s!=null&&s!==p){return s;
}}}return p;
}}),set:qx.core.Variant.select(q,{"mshtml":function(C,D){{};
},"default":function(w,x){var y=this.__ga;

if(y){for(var i=0,l=y.length;i<l;i++){w.style[y[i]]=x;
}}}}),reset:function(E){this.set(E,p);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(d,e,f){arguments.callee.base.call(this,d,e,null,true,true);
this._identifier=f;
return this;
},clone:function(b){var c=arguments.callee.base.call(this,b);
c._identifier=this._identifier;
return c;
},getKeyIdentifier:function(){return this._identifier;
}}});
})();
(function(){var m="number",l="0",k="px",j=";",i="background-image:url(",h=");",g="",f=")",e="background-repeat:",d=" ",a="qx.bom.element.Background",c="url(",b="background-position:";
qx.Class.define(a,{statics:{__hr:[i,null,h,b,null,j,e,null,j],__hs:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__ht:function(z,top){var A=qx.bom.client.Engine;

if(A.GECKO&&A.VERSION<1.9&&z==top&&typeof z==m){top+=0.01;
}
if(z){var B=(typeof z==m)?z+k:z;
}else{B=l;
}
if(top){var C=(typeof top==m)?top+k:top;
}else{C=l;
}return B+d+C;
},compile:function(n,o,p,top){var q=this.__ht(p,top);
var r=qx.util.ResourceManager.getInstance().toUri(n);
var s=this.__hr;
s[1]=r;
s[4]=q;
s[7]=o;
return s.join(g);
},getStyles:function(t,u,v,top){if(!t){return this.__hs;
}var w=this.__ht(v,top);
var x=qx.util.ResourceManager.getInstance().toUri(t);
var y={backgroundPosition:w,backgroundImage:c+x+f};

if(u!=null){y.backgroundRepeat=u;
}return y;
},set:function(D,E,F,G,top){var H=this.getStyles(E,F,G,top);

for(var I in H){D.style[I]=H[I];
}}}});
})();
(function(){var d="-",c="qx.event.handler.Element";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(s){arguments.callee.base.call(this);
this._manager=s;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,scroll:true,select:true,reset:true,submit:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(a,b){},registerEvent:function(e,f,g){var j=qx.core.ObjectRegistry.toHashCode(e);
var h=j+d+f;
var i=qx.lang.Function.listener(this._onNative,this,h);
qx.bom.Event.addNativeListener(e,f,i);
this._registeredEvents[h]={element:e,type:f,listener:i};
},unregisterEvent:function(t,u,v){var y=this._registeredEvents;

if(!y){return;
}var z=qx.core.ObjectRegistry.toHashCode(t);
var w=z+d+u;
var x=this._registeredEvents[w];
qx.bom.Event.removeNativeListener(t,u,x.listener);
delete this._registeredEvents[w];
},_onNative:qx.event.GlobalError.observeMethod(function(k,l){var n=this._registeredEvents;

if(!n){return;
}var m=n[l];
qx.event.Registration.fireNonBubblingEvent(m.element,m.type,qx.event.type.Native,[k]);
})},destruct:function(){var p;
var q=this._registeredEvents;

for(var r in q){p=q[r];
qx.bom.Event.removeNativeListener(p.element,p.type,p.listener);
}this._manager=this._registeredEvents=null;
},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var f="CSS1Compat",e="position:absolute;width:0;height:0;width:1",d="qx.bom.Document",c="1px",b="qx.client",a="div";
qx.Class.define(d,{statics:{isQuirksMode:qx.core.Variant.select(b,{"mshtml":function(g){if(qx.bom.client.Engine.VERSION>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return (g||window).document.compatMode!==f;
}},"webkit":function(k){if(document.compatMode===undefined){var l=(k||window).document.createElement(a);
l.style.cssText=e;
return l.style.width===c?true:false;
}else{return (k||window).document.compatMode!==f;
}},"default":function(q){return (q||window).document.compatMode!==f;
}}),isStandardMode:function(m){return !this.isQuirksMode(m);
},getWidth:function(n){var o=(n||window).document;
var p=qx.bom.Viewport.getWidth(n);
var scroll=this.isStandardMode(n)?o.documentElement.scrollWidth:o.body.scrollWidth;
return Math.max(scroll,p);
},getHeight:function(h){var i=(h||window).document;
var j=qx.bom.Viewport.getHeight(h);
var scroll=this.isStandardMode(h)?i.documentElement.scrollHeight:i.body.scrollHeight;
return Math.max(scroll,j);
}}});
})();
(function(){var m="n-resize",l="e-resize",k="nw-resize",j="ne-resize",i="",h="cursor:",g="qx.client",f=";",e="qx.bom.element.Cursor",d="cursor",c="hand";
qx.Class.define(e,{statics:{__fY:qx.core.Variant.select(g,{"mshtml":{"cursor":c,"ew-resize":l,"ns-resize":m,"nesw-resize":j,"nwse-resize":k},"opera":{"col-resize":l,"row-resize":m,"ew-resize":l,"ns-resize":m,"nesw-resize":j,"nwse-resize":k},"default":{}}),compile:function(p){return h+(this.__fY[p]||p)+f;
},get:function(a,b){return qx.bom.element.Style.get(a,d,b,false);
},set:function(n,o){n.style.cursor=this.__fY[o]||o;
},reset:function(q){q.style.cursor=i;
}}});
})();
(function(){var n="_applyLayoutChange",m="top",k="left",j="middle",h="Decorator",g="center",f="_applyReversed",e="bottom",d="qx.ui.layout.VBox",c="Integer",a="right",b="Boolean";
qx.Class.define(d,{extend:qx.ui.layout.Abstract,construct:function(S,T,U){arguments.callee.base.call(this);

if(S){this.setSpacing(S);
}
if(T){this.setAlignY(T);
}
if(U){this.setSeparator(U);
}},properties:{alignY:{check:[m,j,e],init:m,apply:n},alignX:{check:[k,g,a],init:k,apply:n},spacing:{check:c,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:b,init:false,apply:f}},members:{__ig:null,__ih:null,__ii:null,__ij:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__ik:function(){var t=this._getLayoutChildren();
var length=t.length;
var p=false;
var o=this.__ig&&this.__ig.length!=length&&this.__ih&&this.__ig;
var r;
var q=o?this.__ig:new Array(length);
var s=o?this.__ih:new Array(length);
if(this.getReversed()){t=t.concat().reverse();
}for(var i=0;i<length;i++){r=t[i].getLayoutProperties();

if(r.height!=null){q[i]=parseFloat(r.height)/100;
}
if(r.flex!=null){s[i]=r.flex;
p=true;
}else{s[i]=0;
}}if(!o){this.__ig=q;
this.__ih=s;
}this.__ii=p;
this.__ij=t;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(u,v){if(this._invalidChildrenCache){this.__ik();
}var C=this.__ij;
var length=C.length;
var M=qx.ui.layout.Util;
var L=this.getSpacing();
var P=this.getSeparator();

if(P){var z=M.computeVerticalSeparatorGaps(C,L,P);
}else{var z=M.computeVerticalGaps(C,L,true);
}var i,x,y,G;
var H=[];
var N=z;

for(i=0;i<length;i+=1){G=this.__ig[i];
y=G!=null?Math.floor((v-z)*G):C[i].getSizeHint().height;
H.push(y);
N+=y;
}if(this.__ii&&N!=v){var E={};
var K,O;

for(i=0;i<length;i+=1){K=this.__ih[i];

if(K>0){D=C[i].getSizeHint();
E[i]={min:D.minHeight,value:H[i],max:D.maxHeight,flex:K};
}}var A=M.computeFlexOffsets(E,v,N);

for(i in A){O=A[i].offset;
H[i]+=O;
N+=O;
}}var top=C[0].getMarginTop();
if(N<v&&this.getAlignY()!=m){top=v-N;

if(this.getAlignY()===j){top=Math.round(top/2);
}}var D,R,I,y,F,J,B;
this._clearSeparators();
if(P){var Q=qx.theme.manager.Decoration.getInstance().resolve(P).getInsets();
var w=Q.top+Q.bottom;
}for(i=0;i<length;i+=1){x=C[i];
y=H[i];
D=x.getSizeHint();
J=x.getMarginLeft();
B=x.getMarginRight();
I=Math.max(D.minWidth,Math.min(u-J-B,D.maxWidth));
R=M.computeHorizontalAlignOffset(x.getAlignX()||this.getAlignX(),I,u,J,B);
if(i>0){if(P){top+=F+L;
this._renderSeparator(P,{top:top,left:0,height:w,width:u});
top+=w+L+x.getMarginTop();
}else{top+=M.collapseMargins(L,F,x.getMarginTop());
}}x.renderLayout(R,top,I,y);
top+=y;
F=x.getMarginBottom();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__ik();
}var bc=qx.ui.layout.Util;
var bk=this.__ij;
var X=0,bb=0,ba=0;
var V=0,bd=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bb+=W.height;
var bg=this.__ih[i];
var Y=this.__ig[i];

if(bg){X+=W.minHeight;
}else if(Y){ba=Math.max(ba,Math.round(W.minHeight/Y));
}else{X+=W.height;
}bj=bh.getMarginLeft()+bh.getMarginRight();
if((W.width+bj)>bd){bd=W.width+bj;
}if((W.minWidth+bj)>V){V=W.minWidth+bj;
}}X+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeVerticalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeVerticalGaps(bk,bf,true);
}return {minHeight:X+be,height:bb+be,minWidth:V,width:bd};
}},destruct:function(){this.__ig=this.__ih=this.__ij=null;
}});
})();
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){arguments.callee.base.call(this,b,c,null,true,true);
this._charCode=d;
return this;
},clone:function(e){var f=arguments.callee.base.call(this,e);
f._charCode=this._charCode;
return f;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var b="dispose",a="qx.ui.core.queue.Dispose";
qx.Class.define(a,{statics:{__gs:{},add:function(c){var d=this.__gs;

if(d[c.$$hash]){return;
}d[c.$$hash]=c;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var e=this.__gs;

for(var g in e){var f=e[g];
delete e[g];
f.dispose();
}for(var g in e){return;
}this.__gs={};
}}});
})();
(function(){var b="number",a="qx.ui.layout.Canvas";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(c,d){var q=this._getLayoutChildren();
var g,p,n;
var s,top,e,f,j,h;
var o,m,r,k;

for(var i=0,l=q.length;i<l;i++){g=q[i];
p=g.getSizeHint();
n=g.getLayoutProperties();
o=g.getMarginTop();
m=g.getMarginRight();
r=g.getMarginBottom();
k=g.getMarginLeft();
s=n.left!=null?n.left:n.edge;

if(qx.lang.Type.isString(s)){s=Math.round(parseFloat(s)*c/100);
}e=n.right!=null?n.right:n.edge;

if(qx.lang.Type.isString(e)){e=Math.round(parseFloat(e)*c/100);
}top=n.top!=null?n.top:n.edge;

if(qx.lang.Type.isString(top)){top=Math.round(parseFloat(top)*d/100);
}f=n.bottom!=null?n.bottom:n.edge;

if(qx.lang.Type.isString(f)){f=Math.round(parseFloat(f)*d/100);
}if(s!=null&&e!=null){j=c-s-e-k-m;
if(j<p.minWidth){j=p.minWidth;
}else if(j>p.maxWidth){j=p.maxWidth;
}s+=k;
}else{j=n.width;

if(j==null){j=p.width;
}else{j=Math.round(parseFloat(j)*c/100);
if(j<p.minWidth){j=p.minWidth;
}else if(j>p.maxWidth){j=p.maxWidth;
}}
if(e!=null){s=c-j-e-m-k;
}else if(s==null){s=k;
}else{s+=k;
}}if(top!=null&&f!=null){h=d-top-f-o-r;
if(h<p.minHeight){h=p.minHeight;
}else if(h>p.maxHeight){h=p.maxHeight;
}top+=o;
}else{h=n.height;

if(h==null){h=p.height;
}else{h=Math.round(parseFloat(h)*d/100);
if(h<p.minHeight){h=p.minHeight;
}else if(h>p.maxHeight){h=p.maxHeight;
}}
if(f!=null){top=d-h-f-r-o;
}else if(top==null){top=o;
}else{top+=o;
}}g.renderLayout(s,top,j,h);
}},_computeSizeHint:function(){var I=0,H=0;
var F=0,D=0;
var B,A;
var z,x;
var t=this._getLayoutChildren();
var w,G,v;
var J,top,u,y;

for(var i=0,l=t.length;i<l;i++){w=t[i];
G=w.getLayoutProperties();
v=w.getSizeHint();
var E=w.getMarginLeft()+w.getMarginRight();
var C=w.getMarginTop()+w.getMarginBottom();
B=v.width+E;
A=v.minWidth+E;
J=G.left!=null?G.left:G.edge;

if(J&&typeof J===b){B+=J;
A+=J;
}u=G.right!=null?G.right:G.edge;

if(u&&typeof u===b){B+=u;
A+=u;
}I=Math.max(I,B);
H=Math.max(H,A);
z=v.height+C;
x=v.minHeight+C;
top=G.top!=null?G.top:G.edge;

if(top&&typeof top===b){z+=top;
x+=top;
}y=G.bottom!=null?G.bottom:G.edge;

if(y&&typeof y===b){z+=y;
x+=y;
}F=Math.max(F,z);
D=Math.max(D,x);
}return {width:I,minWidth:H,height:F,minHeight:D};
}}});
})();
(function(){var m="",l="qx.client",k=";",j="filter",i="opacity:",h="opacity",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{compile:qx.core.Variant.select(l,{"mshtml":function(q){if(q>=1){return m;
}
if(q<0.00001){q=0;
}return d+(q*100)+f;
},"gecko":function(B){if(B==1){B=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){return b+B+k;
}else{return i+B+k;
}},"default":function(p){if(p==1){return m;
}return i+p+k;
}}),set:qx.core.Variant.select(l,{"mshtml":function(F,G){var H=qx.bom.element.Style.get(F,j,qx.bom.element.Style.COMPUTED_MODE,false);
if(G>=1){F.style.filter=H.replace(/alpha\([^\)]*\)/gi,m);
return;
}
if(G<0.00001){G=0;
}if(!F.currentStyle||!F.currentStyle.hasLayout){F.style.zoom=1;
}F.style.filter=H.replace(/alpha\([^\)]*\)/gi,m)+c+G*100+e;
},"gecko":function(z,A){if(A==1){A=0.999999;
}
if(qx.bom.client.Engine.VERSION<1.7){z.style.MozOpacity=A;
}else{z.style.opacity=A;
}},"default":function(C,D){if(D==1){D=m;
}C.style.opacity=D;
}}),reset:qx.core.Variant.select(l,{"mshtml":function(n){var o=qx.bom.element.Style.get(n,j,qx.bom.element.Style.COMPUTED_MODE,false);
n.style.filter=o.replace(/alpha\([^\)]*\)/gi,m);
},"gecko":function(E){if(qx.bom.client.Engine.VERSION<1.7){E.style.MozOpacity=m;
}else{E.style.opacity=m;
}},"default":function(r){r.style.opacity=m;
}}),get:qx.core.Variant.select(l,{"mshtml":function(s,t){var u=qx.bom.element.Style.get(s,j,t,false);

if(u){var v=u.match(/alpha\(opacity=(.*)\)/);

if(v&&v[1]){return parseFloat(v[1])/100;
}}return 1.0;
},"gecko":function(I,J){var K=qx.bom.element.Style.get(I,qx.bom.client.Engine.VERSION<1.7?g:h,J,false);

if(K==0.999999){K=1.0;
}
if(K!=null){return parseFloat(K);
}return 1.0;
},"default":function(w,x){var y=qx.bom.element.Style.get(w,h,x,false);

if(y!=null){return parseFloat(y);
}return 1.0;
}})}});
})();
(function(){var B="get",A="",z="[",y="last",x="change",w="]",v=".",u="Number",t="String",s="set",Q="deepBinding",P="item",O="reset",N="' (",M="Boolean",L=") to the object '",K="Integer",J="qx.data.SingleValueBinding",I="No event could be found for the property",H="Binding from '",F="PositiveNumber",G="PositiveInteger",D="Binding does not exist!",E=").",C="Date";
qx.Class.define(J,{statics:{DEBUG_ON:false,__cD:{},bind:function(cz,cA,cB,cC,cD){var cN=this.__cF(cz,cA,cB,cC,cD);
var cI=cA.split(v);
var cF=this.__cM(cI);
var cM=[];
var cJ=[];
var cK=[];
var cG=[];
var cH=cz;
for(var i=0;i<cI.length;i++){if(cF[i]!==A){cG.push(x);
}else{cG.push(this.__cH(cH,cI[i]));
}cM[i]=cH;
if(i==cI.length-1){if(cF[i]!==A){var cQ=cF[i]===y?cH.length-1:cF[i];
var cE=cH.getItem(cQ);
this.__cL(cE,cB,cC,cD,cz);
cK[i]=this.__cN(cH,cG[i],cB,cC,cD,cF[i]);
}else{if(cI[i]!=null&&cH[B+qx.lang.String.firstUp(cI[i])]!=null){var cE=cH[B+qx.lang.String.firstUp(cI[i])]();
this.__cL(cE,cB,cC,cD,cz);
}cK[i]=this.__cN(cH,cG[i],cB,cC,cD);
}}else{var cO={index:i,propertyNames:cI,sources:cM,listenerIds:cK,arrayIndexValues:cF,targetObject:cB,targetPropertyChain:cC,options:cD,listeners:cJ};
var cL=qx.lang.Function.bind(this.__cE,this,cO);
cJ.push(cL);
cK[i]=cH.addListener(cG[i],cL);
}if(cH[B+qx.lang.String.firstUp(cI[i])]==null){cH=null;
}else if(cF[i]!==A){cH=cH[B+qx.lang.String.firstUp(cI[i])](cF[i]);
}else{cH=cH[B+qx.lang.String.firstUp(cI[i])]();
}
if(!cH){break;
}}var cP={type:Q,listenerIds:cK,sources:cM,targetListenerIds:cN.listenerIds,targets:cN.targets};
this.__cO(cP,cz,cA,cB,cC);
return cP;
},__cE:function(bJ){if(bJ.options&&bJ.options.onUpdate){bJ.options.onUpdate(bJ.sources[bJ.index],bJ.targetObject);
}for(var j=bJ.index+1;j<bJ.propertyNames.length;j++){var bN=bJ.sources[j];
bJ.sources[j]=null;

if(!bN){continue;
}bN.removeListenerById(bJ.listenerIds[j]);
}var bN=bJ.sources[bJ.index];
for(var j=bJ.index+1;j<bJ.propertyNames.length;j++){if(bJ.arrayIndexValues[j-1]!==A){bN=bN[B+qx.lang.String.firstUp(bJ.propertyNames[j-1])](bJ.arrayIndexValues[j-1]);
}else{bN=bN[B+qx.lang.String.firstUp(bJ.propertyNames[j-1])]();
}bJ.sources[j]=bN;
if(!bN){this.__cI(bJ.targetObject,bJ.targetPropertyChain);
break;
}if(j==bJ.propertyNames.length-1){if(qx.Class.implementsInterface(bN,qx.data.IListData)){var bO=bJ.arrayIndexValues[j]===y?bN.length-1:bJ.arrayIndexValues[j];
var bL=bN.getItem(bO);
this.__cL(bL,bJ.targetObject,bJ.targetPropertyChain,bJ.options,bJ.sources[bJ.index]);
bJ.listenerIds[j]=this.__cN(bN,x,bJ.targetObject,bJ.targetPropertyChain,bJ.options,bJ.arrayIndexValues[j]);
}else{if(bJ.propertyNames[j]!=null&&bN[B+qx.lang.String.firstUp(bJ.propertyNames[j])]!=null){var bL=bN[B+qx.lang.String.firstUp(bJ.propertyNames[j])]();
this.__cL(bL,bJ.targetObject,bJ.targetPropertyChain,bJ.options,bJ.sources[bJ.index]);
}var bM=this.__cH(bN,bJ.propertyNames[j]);
bJ.listenerIds[j]=this.__cN(bN,bM,bJ.targetObject,bJ.targetPropertyChain,bJ.options);
}}else{if(bJ.listeners[j]==null){var bK=qx.lang.Function.bind(this.__cE,this,bJ);
bJ.listeners.push(bK);
}if(qx.Class.implementsInterface(bN,qx.data.IListData)){var bM=x;
}else{var bM=this.__cH(bN,bJ.propertyNames[j]);
}bJ.listenerIds[j]=bN.addListener(bM,bJ.listeners[j]);
}}},__cF:function(bX,bY,ca,cb,cc){var cg=cb.split(v);
var ce=this.__cM(cg);
var cl=[];
var ck=[];
var ci=[];
var ch=[];
var cf=ca;
for(var i=0;i<cg.length-1;i++){if(ce[i]!==A){ch.push(x);
}else{try{ch.push(this.__cH(cf,cg[i]));
}catch(e){break;
}}cl[i]=cf;
var cj=function(){for(var j=i+1;j<cg.length-1;j++){var bV=cl[j];
cl[j]=null;

if(!bV){continue;
}bV.removeListenerById(ci[j]);
}var bV=cl[i];
for(var j=i+1;j<cg.length-1;j++){var bT=qx.lang.String.firstUp(cg[j-1]);
if(ce[j-1]!==A){var bW=ce[j-1]===y?bV.getLength()-1:ce[j-1];
bV=bV[B+bT](bW);
}else{bV=bV[B+bT]();
}cl[j]=bV;
if(ck[j]==null){ck.push(cj);
}if(qx.Class.implementsInterface(bV,qx.data.IListData)){var bU=x;
}else{try{var bU=qx.data.SingleValueBinding.__cH(bV,cg[j]);
}catch(e){break;
}}ci[j]=bV.addListener(bU,ck[j]);
}qx.data.SingleValueBinding.__cG(bX,bY,ca,cb);
};
ck.push(cj);
ci[i]=cf.addListener(ch[i],cj);
var cd=qx.lang.String.firstUp(cg[i]);
if(cf[B+cd]==null){cf=null;
}else if(ce[i]!==A){cf=cf[B+cd](ce[i]);
}else{cf=cf[B+cd]();
}
if(!cf){break;
}}return {listenerIds:ci,targets:cl};
},__cG:function(cm,cn,co,cp){var ct=this.__cK(cm,cn);

if(ct!=null){var cv=cn.substring(cn.lastIndexOf(v)+1,cn.length);
if(cv.charAt(cv.length-1)==w){var cq=cv.substring(cv.lastIndexOf(z)+1,cv.length-1);
var cs=cv.substring(0,cv.lastIndexOf(z));
var cu=ct[B+qx.lang.String.firstUp(cs)]();

if(cq==y){cq=cu.length-1;
}
if(cu!=null){var cr=cu.getItem(cq);
}}else{var cr=ct[B+qx.lang.String.firstUp(cv)]();
}}this.__cJ(co,cp,cr);
},__cH:function(cw,cx){var cy=this.__cQ(cw,cx);
if(cy==null){if(qx.Class.supportsEvent(cw.constructor,cx)){cy=cx;
}else if(qx.Class.supportsEvent(cw.constructor,x+qx.lang.String.firstUp(cx))){cy=x+qx.lang.String.firstUp(cx);
}else{throw new qx.core.AssertionError(I,cx);
}}return cy;
},__cI:function(bP,bQ){var bR=this.__cK(bP,bQ);

if(bR!=null){var bS=bQ.substring(bQ.lastIndexOf(v)+1,bQ.length);
if(bS.charAt(bS.length-1)==w){this.__cJ(bP,bQ,null);
return;
}if(bR[O+qx.lang.String.firstUp(bS)]!=undefined){bR[O+qx.lang.String.firstUp(bS)]();
}else{bR[s+qx.lang.String.firstUp(bS)](null);
}}},__cJ:function(bn,bo,bp){var bt=this.__cK(bn,bo);

if(bt!=null){var bu=bo.substring(bo.lastIndexOf(v)+1,bo.length);
if(bu.charAt(bu.length-1)==w){var bq=bu.substring(bu.lastIndexOf(z)+1,bu.length-1);
var bs=bu.substring(0,bu.lastIndexOf(z));
var br=bt[B+qx.lang.String.firstUp(bs)]();

if(bq==y){bq=br.length-1;
}
if(br!=null){br.setItem(bq,bp);
}}else{bt[s+qx.lang.String.firstUp(bu)](bp);
}}},__cK:function(R,S){var V=S.split(v);
var W=R;
for(var i=0;i<V.length-1;i++){try{var U=V[i];
if(U.indexOf(w)==U.length-1){var T=U.substring(U.indexOf(z)+1,U.length-1);
U=U.substring(0,U.indexOf(z));
}W=W[B+qx.lang.String.firstUp(U)]();

if(T!=null){if(T==y){T=W.length-1;
}W=W.getItem(T);
T=null;
}}catch(X){return null;
}}return W;
},__cL:function(Y,ba,bb,bc,bd){Y=this.__cP(Y,ba,bb,bc);
if(Y==null){this.__cI(ba,bb);
}if(Y!=undefined){try{this.__cJ(ba,bb,Y);
if(bc&&bc.onUpdate){bc.onUpdate(bd,ba,Y);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bc&&bc.onSetFail){bc.onSetFail(e);
}else{this.warn("Failed so set value "+Y+" on "+ba+". Error message: "+e);
}}}},__cM:function(bD){var bE=[];
for(var i=0;i<bD.length;i++){var name=bD[i];
if(qx.lang.String.endsWith(name,w)){var bF=name.substring(name.indexOf(z)+1,name.indexOf(w));
if(name.indexOf(w)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(bF!==y){if(bF==A||isNaN(parseInt(bF))){throw new Error("No number or 'last' value hast been given"+" in a array binding: "+name+" does not work.");
}}if(name.indexOf(z)!=0){bD[i]=name.substring(0,name.indexOf(z));
bE[i]=A;
bE[i+1]=bF;
bD.splice(i+1,0,P);
i++;
}else{bE[i]=bF;
bD.splice(i,1,P);
}}else{bE[i]=A;
}}return bE;
},__cN:function(be,bf,bg,bh,bi,bj){var bk;
{};
var bm=function(cW,e){if(cW!==A){if(cW===y){cW=be.length-1;
}var da=be.getItem(cW);
if(da==undefined){qx.data.SingleValueBinding.__cI(bg,bh);
}var cX=e.getData().start;
var cY=e.getData().end;

if(cW<cX||cW>cY){return;
}}else{var da=e.getData();
}if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Binding executed from "+be+" by "+bf+" to "+bg+" ("+bh+")");
qx.log.Logger.debug("Data before conversion: "+da);
}da=qx.data.SingleValueBinding.__cP(da,bg,bh,bi);
if(qx.data.SingleValueBinding.DEBUG_ON){qx.log.Logger.debug("Data after conversion: "+da);
}try{if(da!=undefined){qx.data.SingleValueBinding.__cJ(bg,bh,da);
}else{qx.data.SingleValueBinding.__cI(bg,bh);
}if(bi&&bi.onUpdate){bi.onUpdate(be,bg,da);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(bi&&bi.onSetFail){bi.onSetFail(e);
}else{this.warn("Failed so set value "+da+" on "+bg+". Error message: "+e);
}}};
if(!bj){bj=A;
}bm=qx.lang.Function.bind(bm,be,bj);
var bl=be.addListener(bf,bm);
return bl;
},__cO:function(cR,cS,cT,cU,cV){if(this.__cD[cS.toHashCode()]===undefined){this.__cD[cS.toHashCode()]=[];
}this.__cD[cS.toHashCode()].push([cR,cS,cT,cU,cV]);
},__cP:function(h,k,l,m){if(m&&m.converter){var o;

if(k.getModel){o=k.getModel();
}return m.converter(h,o);
}else{var q=this.__cK(k,l);
var r=l.substring(l.lastIndexOf(v)+1,l.length);
if(q==null){return h;
}var p=qx.Class.getPropertyDefinition(q.constructor,r);
var n=p==null?A:p.check;
return this.__cR(h,n);
}},__cQ:function(bG,bH){var bI=qx.Class.getPropertyDefinition(bG.constructor,bH);

if(bI==null){return null;
}return bI.event;
},__cR:function(db,dc){var dd=qx.lang.Type.getClass(db);
if((dd==u||dd==t)&&(dc==K||dc==G)){db=parseInt(db);
}if((dd==M||dd==u||dd==C)&&dc==t){db=db+A;
}if((dd==u||dd==t)&&(dc==u||dc==F)){db=parseFloat(db);
}return db;
},removeBindingFromObject:function(bw,bx){if(bx.type==Q){for(var i=0;i<bx.sources.length;i++){if(bx.sources[i]){bx.sources[i].removeListenerById(bx.listenerIds[i]);
}}for(var i=0;i<bx.targets.length;i++){if(bx.targets[i]){bx.targets[i].removeListenerById(bx.targetListenerIds[i]);
}}}else{bw.removeListenerById(bx);
}var by=this.__cD[bw.toHashCode()];
if(by!=undefined){for(var i=0;i<by.length;i++){if(by[i][0]==bx){qx.lang.Array.remove(by,by[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(bB){{};
var bC=this.__cD[bB.toHashCode()];

if(bC!=undefined){for(var i=bC.length-1;i>=0;i--){this.removeBindingFromObject(bB,bC[i][0]);
}}},getAllBindingsForObject:function(bv){if(this.__cD[bv.toHashCode()]===undefined){this.__cD[bv.toHashCode()]=[];
}return this.__cD[bv.toHashCode()];
},removeAllBindings:function(){for(var bA in this.__cD){var bz=qx.core.ObjectRegistry.fromHashCode(bA);
if(bz==null){delete this.__cD[bA];
continue;
}this.removeAllBindingsForObject(bz);
}this.__cD={};
},getAllBindings:function(){return this.__cD;
},showBindingInLog:function(c,d){var g;
for(var i=0;i<this.__cD[c.toHashCode()].length;i++){if(this.__cD[c.toHashCode()][i][0]==d){g=this.__cD[c.toHashCode()][i];
break;
}}
if(g===undefined){var f=D;
}else{var f=H+g[1]+N+g[2]+L+g[3]+N+g[4]+E;
}qx.log.Logger.debug(f);
},showAllBindingsInLog:function(){for(var b in this.__cD){var a=qx.core.ObjectRegistry.fromHashCode(b);

for(var i=0;i<this.__cD[b].length;i++){this.showBindingInLog(a,this.__cD[b][i][0]);
}}}}});
})();
(function(){var c="qx.util.placement.KeepAlignAxis",b="edge-start",a="edge-end";
qx.Class.define(c,{extend:qx.util.placement.AbstractAxis,members:{computeStart:function(d,e,f,g,h){var i=this._moveToEdgeAndAlign(d,e,f,h);
var j,k;

if(this._isInRange(i,d,g)){return i;
}
if(h==b||h==a){j=e.start-f.end;
k=e.end+f.start;
}else{j=e.end-f.end;
k=e.start+f.start;
}
if(j>g-k){i=j-d;
}else{i=k;
}return i;
}}});
})();
(function(){var f="interval",e="Number",d="_applyTimeoutInterval",c="qx.event.type.Event",b="qx.event.Idle",a="singleton";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){arguments.callee.base.call(this);
var h=new qx.event.Timer(this.getTimeoutInterval());
h.addListener(f,this._onInterval,this);
h.start();
this.__hU=h;
},events:{"interval":c},properties:{timeoutInterval:{check:e,init:100,apply:d}},members:{__hU:null,_applyTimeoutInterval:function(g){this.__hU.setInterval(g);
},_onInterval:function(){this.fireEvent(f);
}},destruct:function(){if(this.__hU){this.__hU.stop();
}this.__hU=null;
}});
})();
(function(){var k="qx.dynlocale",j="text",i="Boolean",h="qx.client",g="color",f="userSelect",d="changeLocale",c="enabled",b="none",a="on",F="_applyTextAlign",E="qx.ui.core.Widget",D="gecko",C="changeTextAlign",B="_applyWrap",A="changeValue",z="changeContent",y="qx.ui.basic.Label",x="A",w="_applyValue",r="center",s="_applyBuddy",p="String",q="textAlign",n="right",o="changeRich",l="_applyRich",m="click",t="label",u="webkit",v="left";
qx.Class.define(y,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IStringForm],construct:function(J){arguments.callee.base.call(this);

if(J!=null){this.setValue(J);
}
if(qx.core.Variant.isSet(k,a)){qx.locale.Manager.getInstance().addListener(d,this._onChangeLocale,this);
}},properties:{rich:{check:i,init:false,event:o,apply:l},wrap:{check:i,init:true,apply:B},value:{check:p,apply:w,event:A,nullable:true},buddy:{check:E,apply:s,nullable:true,init:null},textAlign:{check:[v,r,n],nullable:true,themeable:true,apply:F,event:C},appearance:{refine:true,init:t},selectable:{refine:true,init:false},allowGrowX:{refine:true,init:false},allowGrowY:{refine:true,init:false},allowShrinkY:{refine:true,init:false}},members:{__jr:null,__js:null,__jt:null,__ju:null,_getContentHint:function(){if(this.__js){this.__jv=this.__jw();
delete this.__js;
}return {width:this.__jv.width,height:this.__jv.height};
},_hasHeightForWidth:function(){return this.getRich()&&this.getWrap();
},_applySelectable:function(L){if(qx.core.Variant.isSet(h,D)){if(L&&!this.isRich()){{};
return;
}}arguments.callee.base.call(this,L);
if(qx.core.Variant.isSet(h,u)){this.getContainerElement().setStyle(f,L?j:b);
this.getContentElement().setStyle(f,L?j:b);
}},_getContentHeightForWidth:function(X){if(!this.getRich()&&!this.getWrap()){return null;
}return this.__jw(X).height;
},_createContentElement:function(){return new qx.html.Label;
},_applyTextAlign:function(G,H){this.getContentElement().setStyle(q,G);
},_applyTextColor:function(Y,ba){if(Y){this.getContentElement().setStyle(g,qx.theme.manager.Color.getInstance().resolve(Y));
}else{this.getContentElement().removeStyle(g);
}},__jv:{width:0,height:0},_applyFont:function(bb,bc){var bd;

if(bb){this.__jr=qx.theme.manager.Font.getInstance().resolve(bb);
bd=this.__jr.getStyles();
}else{this.__jr=null;
bd=qx.bom.Font.getDefaultStyles();
}this.getContentElement().setStyles(bd);
this.__js=true;
qx.ui.core.queue.Layout.add(this);
},__jw:function(M){var Q=qx.bom.Label;
var O=this.getFont();
var N=O?this.__jr.getStyles():qx.bom.Font.getDefaultStyles();
var content=this.getValue()||x;
var P=this.getRich();
return P?Q.getHtmlSize(content,N,M):Q.getTextSize(content,N);
},_applyBuddy:function(V,W){if(W!=null){W.removeBinding(this.__jt);
this.__jt=null;
this.removeListenerById(this.__ju);
this.__ju=null;
}
if(V!=null){this.__jt=V.bind(c,this,c);
this.__ju=this.addListener(m,V.focus,V);
}},_applyRich:function(I){this.getContentElement().setRich(I);
this.__js=true;
qx.ui.core.queue.Layout.add(this);
},_applyWrap:function(T,U){if(T&&!this.isRich()){{};
}},_onChangeLocale:qx.core.Variant.select(k,{"on":function(e){var content=this.getValue();

if(content&&content.translate){this.setValue(content.translate());
}},"off":null}),_applyValue:function(R,S){this.getContentElement().setValue(R);
this.__js=true;
qx.ui.core.queue.Layout.add(this);
this.fireDataEvent(z,R,S);
}},destruct:function(){if(qx.core.Variant.isSet(k,a)){qx.locale.Manager.getInstance().removeListener(d,this._onChangeLocale,this);
}if(this.__jt!=null){var K=this.getBuddy();

if(K!=null&&!K.isDisposed()){K.removeBinding(this.__jt);
}}this.__jr=this.__jt=null;
}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Class.define(a,{extend:Error,construct:function(c,d){{};
this.__cY=b+(c&&c.message?c.message:c);
Error.call(this,this.__cY);
this.__da=d;
this.__db=c;
},members:{__db:null,__da:null,__cY:null,toString:function(){return this.__cY;
},getArguments:function(){return this.__da;
},getSourceException:function(){return this.__db;
}},destruct:function(){this.__db=null;
this.__da=null;
this.__cY=null;
}});
})();
(function(){var k="qx.client",j="qx.dom.Hierarchy",i="previousSibling",h="*",g="nextSibling",f="parentNode";
qx.Class.define(j,{statics:{getNodeIndex:function(D){var E=0;

while(D&&(D=D.previousSibling)){E++;
}return E;
},getElementIndex:function(z){var A=0;
var B=qx.dom.Node.ELEMENT;

while(z&&(z=z.previousSibling)){if(z.nodeType==B){A++;
}}return A;
},getNextElementSibling:function(F){while(F&&(F=F.nextSibling)&&!qx.dom.Node.isElement(F)){continue;
}return F||null;
},getPreviousElementSibling:function(L){while(L&&(L=L.previousSibling)&&!qx.dom.Node.isElement(L)){continue;
}return L||null;
},contains:qx.core.Variant.select(k,{"webkit|mshtml|opera":function(w,x){if(qx.dom.Node.isDocument(w)){var y=qx.dom.Node.getDocument(x);
return w&&y==w;
}else if(qx.dom.Node.isDocument(x)){return false;
}else{return w.contains(x);
}},"gecko":function(O,P){return !!(O.compareDocumentPosition(P)&16);
},"default":function(T,U){while(U){if(T==U){return true;
}U=U.parentNode;
}return false;
}}),isRendered:function(u){if(!u.offsetParent){return false;
}var v=u.ownerDocument||u.document;
if(v.body.contains){return v.body.contains(u);
}if(v.compareDocumentPosition){return !!(v.compareDocumentPosition(u)&16);
}throw new Error("Missing support for isRendered()!");
},isDescendantOf:function(M,N){return this.contains(N,M);
},getCommonParent:qx.core.Variant.select(k,{"mshtml|opera":function(d,e){if(d===e){return d;
}
while(d&&qx.dom.Node.isElement(d)){if(d.contains(e)){return d;
}d=d.parentNode;
}return null;
},"default":function(l,m){if(l===m){return l;
}var n={};
var q=qx.core.ObjectRegistry;
var p,o;

while(l||m){if(l){p=q.toHashCode(l);

if(n[p]){return n[p];
}n[p]=l;
l=l.parentNode;
}
if(m){o=q.toHashCode(m);

if(n[o]){return n[o];
}n[o]=m;
m=m.parentNode;
}}return null;
}}),getAncestors:function(r){return this._recursivelyCollect(r,f);
},getChildElements:function(a){a=a.firstChild;

if(!a){return [];
}var b=this.getNextSiblings(a);

if(a.nodeType===1){b.unshift(a);
}return b;
},getDescendants:function(c){return qx.lang.Array.fromCollection(c.getElementsByTagName(h));
},getFirstDescendant:function(K){K=K.firstChild;

while(K&&K.nodeType!=1){K=K.nextSibling;
}return K;
},getLastDescendant:function(t){t=t.lastChild;

while(t&&t.nodeType!=1){t=t.previousSibling;
}return t;
},getPreviousSiblings:function(s){return this._recursivelyCollect(s,i);
},getNextSiblings:function(V){return this._recursivelyCollect(V,g);
},_recursivelyCollect:function(H,I){var J=[];

while(H=H[I]){if(H.nodeType==1){J.push(H);
}}return J;
},getSiblings:function(C){return this.getPreviousSiblings(C).reverse().concat(this.getNextSiblings(C));
},isEmpty:function(G){G=G.firstChild;

while(G){if(G.nodeType===qx.dom.Node.ELEMENT||G.nodeType===qx.dom.Node.TEXT){return false;
}G=G.nextSibling;
}return true;
},cleanWhitespace:function(Q){var R=Q.firstChild;

while(R){var S=R.nextSibling;

if(R.nodeType==3&&!/\S/.test(R.nodeValue)){Q.removeChild(R);
}R=S;
}}}});
})();
(function(){var c="qx.ui.core.queue.Layout",b="layout";
qx.Class.define(c,{statics:{__df:{},remove:function(a){delete this.__df[a.$$hash];
},add:function(q){this.__df[q.$$hash]=q;
qx.ui.core.queue.Manager.scheduleFlush(b);
},flush:function(){var r=this.__di();
for(var i=r.length-1;i>=0;i--){var s=r[i];
if(s.hasValidLayout()){continue;
}if(s.isRootWidget()&&!s.hasUserBounds()){var u=s.getSizeHint();
s.renderLayout(0,0,u.width,u.height);
}else{var t=s.getBounds();
s.renderLayout(t.left,t.top,t.width,t.height);
}}},getNestingLevel:function(d){var e=this.__dh;
var g=0;
var parent=d;
while(true){if(e[parent.$$hash]!=null){g+=e[parent.$$hash];
break;
}
if(!parent.$$parent){break;
}parent=parent.$$parent;
g+=1;
}var f=g;

while(d&&d!==parent){e[d.$$hash]=f--;
d=d.$$parent;
}return g;
},__dg:function(){var A=qx.ui.core.queue.Visibility;
this.__dh={};
var z=[];
var y=this.__df;
var v,x;

for(var w in y){v=y[w];

if(A.isVisible(v)){x=this.getNestingLevel(v);
if(!z[x]){z[x]={};
}z[x][w]=v;
delete y[w];
}}return z;
},__di:function(){var l=[];
var n=this.__dg();

for(var k=n.length-1;k>=0;k--){if(!n[k]){continue;
}
for(var j in n[k]){var h=n[k][j];
if(k==0||h.isRootWidget()||h.hasUserBounds()){l.push(h);
h.invalidateLayoutCache();
continue;
}var p=h.getSizeHint(false);

if(p){h.invalidateLayoutCache();
var m=h.getSizeHint();
var o=(!h.getBounds()||p.minWidth!==m.minWidth||p.width!==m.width||p.maxWidth!==m.maxWidth||p.minHeight!==m.minHeight||p.height!==m.height||p.maxHeight!==m.maxHeight);
}else{o=true;
}
if(o){var parent=h.getLayoutParent();

if(!n[k-1]){n[k-1]={};
}n[k-1][parent.$$hash]=parent;
}else{l.push(h);
}}}return l;
}}});
})();
(function(){var l="",k="qx.client",j="user-select",i="userSelect",h="appearance",g="style",f="MozUserModify",e="px",d="-webkit-appearance",c="styleFloat",H="-webkit-user-select",G="-moz-appearance",F="pixelHeight",E="MozAppearance",D=":",C="pixelTop",B="pixelLeft",A="text-overflow",z="-moz-user-select",y="MozUserSelect",s="qx.bom.element.Style",t="-moz-user-modify",q="-webkit-user-modify",r="WebkitUserSelect",o="-o-text-overflow",p="pixelRight",m="cssFloat",n="pixelWidth",u="pixelBottom",v=";",x="WebkitUserModify",w="WebkitAppearance";
qx.Class.define(s,{statics:{__ge:{styleNames:{"float":qx.core.Variant.select(k,{"mshtml":c,"default":m}),"appearance":qx.core.Variant.select(k,{"gecko":E,"webkit":w,"default":h}),"userSelect":qx.core.Variant.select(k,{"gecko":y,"webkit":r,"default":i}),"userModify":qx.core.Variant.select(k,{"gecko":f,"webkit":x,"default":i})},cssNames:{"appearance":qx.core.Variant.select(k,{"gecko":G,"webkit":d,"default":h}),"userSelect":qx.core.Variant.select(k,{"gecko":z,"webkit":H,"default":j}),"userModify":qx.core.Variant.select(k,{"gecko":t,"webkit":q,"default":j}),"textOverflow":qx.core.Variant.select(k,{"opera":o,"default":A})},mshtmlPixel:{width:n,height:F,left:B,right:p,top:C,bottom:u},special:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}}},__gf:{},compile:function(I){var M=[];
var Q=this.__ge;
var P=Q.special;
var N=Q.cssNames;
var L=this.__gf;
var O=qx.lang.String;
var name,K,J;

for(name in I){J=I[name];

if(J==null){continue;
}name=N[name]||name;
if(P[name]){M.push(P[name].compile(J));
}else{K=L[name];

if(!K){K=L[name]=O.hyphenate(name);
}M.push(K,D,J,v);
}}return M.join(l);
},setCss:qx.core.Variant.select(k,{"mshtml":function(a,b){a.style.cssText=b;
},"default":function(by,bz){by.setAttribute(g,bz);
}}),getCss:qx.core.Variant.select(k,{"mshtml":function(X){return X.style.cssText.toLowerCase();
},"default":function(bo){return bo.getAttribute(g);
}}),COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bh,name,bi,bj){{};
var bk=this.__ge;
name=bk.styleNames[name]||name;
if(bj!==false&&bk.special[name]){return bk.special[name].set(bh,bi);
}else{bh.style[name]=bi!==null?bi:l;
}},setStyles:function(bp,bq,br){{};
var bx=this.__ge;
var bu=bx.styleNames;
var bw=bx.special;
var bs=bp.style;

for(var bv in bq){var bt=bq[bv];
var name=bu[bv]||bv;

if(bt===undefined){if(br!==false&&bw[name]){bw[name].reset(bp);
}else{bs[name]=l;
}}else{if(br!==false&&bw[name]){bw[name].set(bp,bt);
}else{bs[name]=bt!==null?bt:l;
}}}},reset:function(bl,name,bm){var bn=this.__ge;
name=bn.styleNames[name]||name;
if(bm!==false&&bn.special[name]){return bn.special[name].reset(bl);
}else{bl.style[name]=l;
}},get:qx.core.Variant.select(k,{"mshtml":function(Y,name,ba,bb){var bg=this.__ge;
name=bg.styleNames[name]||name;
if(bb!==false&&bg.special[name]){return bg.special[name].get(Y,ba);
}if(!Y.currentStyle){return Y.style[name]||l;
}switch(ba){case this.LOCAL_MODE:return Y.style[name]||l;
case this.CASCADED_MODE:return Y.currentStyle[name]||l;
default:var bf=Y.currentStyle[name]||l;
if(/^-?[\.\d]+(px)?$/i.test(bf)){return bf;
}var be=bg.mshtmlPixel[name];

if(be){var bc=Y.style[name];
Y.style[name]=bf||0;
var bd=Y.style[be]+e;
Y.style[name]=bc;
return bd;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bf)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bf;
}},"default":function(R,name,S,T){var W=this.__ge;
name=W.styleNames[name]||name;
if(T!==false&&W.special[name]){return W.special[name].get(R,S);
}switch(S){case this.LOCAL_MODE:return R.style[name]||l;
case this.CASCADED_MODE:if(R.currentStyle){return R.currentStyle[name]||l;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var U=qx.dom.Node.getDocument(R);
var V=U.defaultView.getComputedStyle(R,null);
return V?V[name]:l;
}}})}});
})();
(function(){var bb="borderTopWidth",ba="borderLeftWidth",Y="marginTop",X="marginLeft",W="scroll",V="qx.client",U="border-box",T="borderBottomWidth",S="borderRightWidth",R="auto",bq="padding",bp="qx.bom.element.Location",bo="paddingLeft",bn="static",bm="marginBottom",bl="visible",bk="BODY",bj="paddingBottom",bi="paddingTop",bh="marginRight",bf="position",bg="margin",bd="overflow",be="paddingRight",bc="border";
qx.Class.define(bp,{statics:{__gg:function(N,O){return qx.bom.element.Style.get(N,O,qx.bom.element.Style.COMPUTED_MODE,false);
},__gh:function(i,j){return parseInt(qx.bom.element.Style.get(i,j,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__gi:function(bv){var by=0,top=0;
if(bv.getBoundingClientRect&&!qx.bom.client.Engine.OPERA){var bx=qx.dom.Node.getWindow(bv);
by-=qx.bom.Viewport.getScrollLeft(bx);
top-=qx.bom.Viewport.getScrollTop(bx);
}else{var bw=qx.dom.Node.getDocument(bv).body;
bv=bv.parentNode;
while(bv&&bv!=bw){by+=bv.scrollLeft;
top+=bv.scrollTop;
bv=bv.parentNode;
}}return {left:by,top:top};
},__gj:qx.core.Variant.select(V,{"mshtml":function(bz){var bB=qx.dom.Node.getDocument(bz);
var bA=bB.body;
var bC=0;
var top=0;
bC-=bA.clientLeft+bB.documentElement.clientLeft;
top-=bA.clientTop+bB.documentElement.clientTop;

if(qx.bom.client.Feature.STANDARD_MODE){bC+=this.__gh(bA,ba);
top+=this.__gh(bA,bb);
}return {left:bC,top:top};
},"webkit":function(J){var L=qx.dom.Node.getDocument(J);
var K=L.body;
var M=K.offsetLeft;
var top=K.offsetTop;
if(qx.bom.client.Engine.VERSION<530.17){M+=this.__gh(K,ba);
top+=this.__gh(K,bb);
}return {left:M,top:top};
},"gecko":function(bN){var bO=qx.dom.Node.getDocument(bN).body;
var bP=bO.offsetLeft;
var top=bO.offsetTop;
if(qx.bom.client.Engine.VERSION<1.9){bP+=this.__gh(bO,X);
top+=this.__gh(bO,Y);
}if(qx.bom.element.BoxSizing.get(bO)!==U){bP+=this.__gh(bO,ba);
top+=this.__gh(bO,bb);
}return {left:bP,top:top};
},"default":function(bD){var bE=qx.dom.Node.getDocument(bD).body;
var bF=bE.offsetLeft;
var top=bE.offsetTop;
return {left:bF,top:top};
}}),__gk:qx.core.Variant.select(V,{"mshtml|webkit":function(bI){var bK=qx.dom.Node.getDocument(bI);
if(bI.getBoundingClientRect){var bL=bI.getBoundingClientRect();
var bM=bL.left;
var top=bL.top;
}else{var bM=bI.offsetLeft;
var top=bI.offsetTop;
bI=bI.offsetParent;
var bJ=bK.body;
while(bI&&bI!=bJ){bM+=bI.offsetLeft;
top+=bI.offsetTop;
bM+=this.__gh(bI,ba);
top+=this.__gh(bI,bb);
bI=bI.offsetParent;
}}return {left:bM,top:top};
},"gecko":function(u){if(u.getBoundingClientRect){var x=u.getBoundingClientRect();
var y=Math.round(x.left);
var top=Math.round(x.top);
}else{var y=0;
var top=0;
var v=qx.dom.Node.getDocument(u).body;
var w=qx.bom.element.BoxSizing;

if(w.get(u)!==U){y-=this.__gh(u,ba);
top-=this.__gh(u,bb);
}
while(u&&u!==v){y+=u.offsetLeft;
top+=u.offsetTop;
if(w.get(u)!==U){y+=this.__gh(u,ba);
top+=this.__gh(u,bb);
}if(u.parentNode&&this.__gg(u.parentNode,bd)!=bl){y+=this.__gh(u.parentNode,ba);
top+=this.__gh(u.parentNode,bb);
}u=u.offsetParent;
}}return {left:y,top:top};
},"default":function(d){var f=0;
var top=0;
var e=qx.dom.Node.getDocument(d).body;
while(d&&d!==e){f+=d.offsetLeft;
top+=d.offsetTop;
d=d.offsetParent;
}return {left:f,top:top};
}}),get:function(A,B){if(A.tagName==bk){var location=this.__gl(A);
var I=location.left;
var top=location.top;
}else{var C=this.__gj(A);
var H=this.__gk(A);
var scroll=this.__gi(A);
var I=H.left+C.left-scroll.left;
var top=H.top+C.top-scroll.top;
}var D=I+A.offsetWidth;
var E=top+A.offsetHeight;

if(B){if(B==bq||B==W){var F=qx.bom.element.Overflow.getX(A);

if(F==W||F==R){D+=A.scrollWidth-A.offsetWidth+this.__gh(A,ba)+this.__gh(A,S);
}var G=qx.bom.element.Overflow.getY(A);

if(G==W||G==R){E+=A.scrollHeight-A.offsetHeight+this.__gh(A,bb)+this.__gh(A,T);
}}
switch(B){case bq:I+=this.__gh(A,bo);
top+=this.__gh(A,bi);
D-=this.__gh(A,be);
E-=this.__gh(A,bj);
case W:I-=A.scrollLeft;
top-=A.scrollTop;
D-=A.scrollLeft;
E-=A.scrollTop;
case bc:I+=this.__gh(A,ba);
top+=this.__gh(A,bb);
D-=this.__gh(A,S);
E-=this.__gh(A,T);
break;
case bg:I-=this.__gh(A,X);
top-=this.__gh(A,Y);
D+=this.__gh(A,bh);
E+=this.__gh(A,bm);
break;
}}return {left:I,top:top,right:D,bottom:E};
},__gl:qx.core.Variant.select(V,{"default":function(bt){var top=bt.offsetTop+this.__gh(bt,Y);
var bu=bt.offsetLeft+this.__gh(bt,X);
return {left:bu,top:top};
},"mshtml":function(s){var top=s.offsetTop;
var t=s.offsetLeft;

if(!((qx.bom.client.Engine.VERSION<8||qx.bom.client.Engine.DOCUMENT_MODE<8)&&!qx.bom.client.Feature.QUIRKS_MODE)){top+=this.__gh(s,Y);
t+=this.__gh(s,X);
}return {left:t,top:top};
},"gecko":function(bG){var top=bG.offsetTop+this.__gh(bG,Y)+this.__gh(bG,ba);
var bH=bG.offsetLeft+this.__gh(bG,X)+this.__gh(bG,bb);
return {left:bH,top:top};
}}),getLeft:function(k,l){return this.get(k,l).left;
},getTop:function(br,bs){return this.get(br,bs).top;
},getRight:function(g,h){return this.get(g,h).right;
},getBottom:function(P,Q){return this.get(P,Q).bottom;
},getRelative:function(m,n,o,p){var r=this.get(m,o);
var q=this.get(n,p);
return {left:r.left-q.left,top:r.top-q.top,right:r.right-q.right,bottom:r.bottom-q.bottom};
},getPosition:function(z){return this.getRelative(z,this.getOffsetParent(z));
},getOffsetParent:function(a){var c=a.offsetParent||document.body;
var b=qx.bom.element.Style;

while(c&&(!/^body|html$/i.test(c.tagName)&&b.get(c,bf)===bn)){c=c.offsetParent;
}return c;
}}});
})();
(function(){var g="qx.lang.Type",f="Error",e="RegExp",d="Date",c="Number",b="Boolean";
qx.Class.define(g,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(k){return this.getClass(k)==e;
},isNumber:function(i){return (i!==null&&(this.getClass(i)==c||i instanceof Number));
},isBoolean:function(a){return (a!==null&&(this.getClass(a)==b||a instanceof Boolean));
},isDate:function(h){return (h!==null&&(this.getClass(h)==d||h instanceof Date));
},isError:function(j){return (j!==null&&(this.getClass(j)==f||j instanceof Error));
}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var p="mshtml",o="",n="qx.client",m=">",k="<",h=" ",g="='",f="qx.bom.Element",e="div",d="' ",c="></";
qx.Class.define(f,{statics:{__fl:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},create:function(name,q,r){if(!r){r=window;
}
if(!name){throw new Error("The tag name is missing!");
}var t=this.__fl;
var s=o;

for(var v in q){if(t[v]){s+=v+g+q[v]+d;
}}var w;
if(s!=o){if(qx.bom.client.Engine.MSHTML){w=r.document.createElement(k+name+h+s+m);
}else{var u=r.document.createElement(e);
u.innerHTML=k+name+h+s+c+name+m;
w=u.firstChild;
}}else{w=r.document.createElement(name);
}
for(var v in q){if(!t[v]){qx.bom.element.Attribute.set(w,v,q[v]);
}}return w;
},empty:function(T){return T.innerHTML=o;
},addListener:function(P,Q,R,self,S){return qx.event.Registration.addListener(P,Q,R,self,S);
},removeListener:function(U,V,W,self,X){return qx.event.Registration.removeListener(U,V,W,self,X);
},removeListenerById:function(z,A){return qx.event.Registration.removeListenerById(z,A);
},hasListener:function(Y,ba,bb){return qx.event.Registration.hasListener(Y,ba,bb);
},focus:function(O){qx.event.Registration.getManager(O).getHandler(qx.event.handler.Focus).focus(O);
},blur:function(y){qx.event.Registration.getManager(y).getHandler(qx.event.handler.Focus).blur(y);
},activate:function(bc){qx.event.Registration.getManager(bc).getHandler(qx.event.handler.Focus).activate(bc);
},deactivate:function(x){qx.event.Registration.getManager(x).getHandler(qx.event.handler.Focus).deactivate(x);
},capture:function(a,b){qx.event.Registration.getManager(a).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(a,b);
},releaseCapture:function(B){qx.event.Registration.getManager(B).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(B);
},clone:function(C,D){var G;

if(D||(qx.core.Variant.isSet(n,p)&&!qx.xml.Document.isXmlDocument(C))){var K=qx.event.Registration.getManager(C);
var E=qx.dom.Hierarchy.getDescendants(C);
E.push(C);
}if(qx.core.Variant.isSet(n,p)){for(var i=0,l=E.length;i<l;i++){K.toggleAttachedEvents(E[i],false);
}}var G=C.cloneNode(true);
if(qx.core.Variant.isSet(n,p)){for(var i=0,l=E.length;i<l;i++){K.toggleAttachedEvents(E[i],true);
}}if(D===true){var N=qx.dom.Hierarchy.getDescendants(G);
N.push(G);
var F,I,M,H;

for(var i=0,L=E.length;i<L;i++){M=E[i];
F=K.serializeListeners(M);

if(F.length>0){I=N[i];

for(var j=0,J=F.length;j<J;j++){H=F[j];
K.addListener(I,H.type,H.handler,H.self,H.capture);
}}}}return G;
}}});
})();
(function(){var k="px",j="qx.client",i="div",h="img",g="",f="no-repeat",d="scale-x",c="mshtml",b="scale",a="scale-y",F="qx/icon",E="repeat",D=".png",C="crop",B="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",A='<div style="',z="repeat-y",y='<img src="',x="qx.bom.element.Decoration",w="', sizingMethod='",r="png",s="')",p='"></div>',q='"/>',n='" style="',o="none",l="webkit",m=" ",t="repeat-x",u="DXImageTransform.Microsoft.AlphaImageLoader",v="absolute";
qx.Class.define(x,{statics:{DEBUG:false,__gW:{},__gX:qx.core.Variant.isSet(j,c),__gY:qx.core.Variant.select(j,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__ha:{"scale-x":h,"scale-y":h,"scale":h,"repeat":i,"no-repeat":i,"repeat-x":i,"repeat-y":i},update:function(bM,bN,bO,bP){var bR=this.getTagName(bO,bN);

if(bR!=bM.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var bS=this.getAttributes(bN,bO,bP);

if(bR===h){bM.src=bS.src;
}if(bM.style.backgroundPosition!=g&&bS.style.backgroundPosition===undefined){bS.style.backgroundPosition=null;
}if(bM.style.clip!=g&&bS.style.clip===undefined){bS.style.clip=null;
}var bQ=qx.bom.element.Style;
bQ.setStyles(bM,bS.style);
if(this.__gX){try{bM.filters[u].apply();
}catch(e){}}},create:function(bh,bi,bj){var bk=this.getTagName(bi,bh);
var bm=this.getAttributes(bh,bi,bj);
var bl=qx.bom.element.Style.compile(bm.style);

if(bk===h){return y+bm.src+n+bl+q;
}else{return A+bl+p;
}},getTagName:function(G,H){if(qx.core.Variant.isSet(j,c)){if(H&&this.__gX&&this.__gY[G]&&qx.lang.String.endsWith(H,D)){return i;
}}return this.__ha[G];
},getAttributes:function(bv,bw,bx){if(!bx){bx={};
}
if(!bx.position){bx.position=v;
}
if(qx.core.Variant.isSet(j,c)){bx.fontSize=0;
bx.lineHeight=0;
}else if(qx.core.Variant.isSet(j,l)){bx.WebkitUserDrag=o;
}var bz=qx.util.ResourceManager.getInstance().getImageFormat(bv)||qx.io.ImageLoader.getFormat(bv);
{};
var by;
if(this.__gX&&this.__gY[bw]&&bz===r){by=this.__hd(bx,bw,bv);
}else{if(bw===b){by=this.__he(bx,bw,bv);
}else if(bw===d||bw===a){by=this.__hf(bx,bw,bv);
}else{by=this.__hi(bx,bw,bv);
}}return by;
},__hb:function(bW,bX,bY){if(bW.width==null&&bX!=null){bW.width=bX+k;
}
if(bW.height==null&&bY!=null){bW.height=bY+k;
}return bW;
},__hc:function(bT){var bU=qx.util.ResourceManager.getInstance().getImageWidth(bT)||qx.io.ImageLoader.getWidth(bT);
var bV=qx.util.ResourceManager.getInstance().getImageHeight(bT)||qx.io.ImageLoader.getHeight(bT);
return {width:bU,height:bV};
},__hd:function(I,J,K){var N=this.__hc(K);
I=this.__hb(I,N.width,N.height);
var M=J==f?C:b;
var L=B+qx.util.ResourceManager.getInstance().toUri(K)+w+M+s;
I.filter=L;
I.backgroundImage=I.backgroundRepeat=g;
return {style:I};
},__he:function(T,U,V){var W=qx.util.ResourceManager.getInstance().toUri(V);
var X=this.__hc(V);
T=this.__hb(T,X.width,X.height);
return {src:W,style:T};
},__hf:function(bE,bF,bG){var bK=qx.util.ResourceManager.getInstance();
var bJ=bK.isClippedImage(bG);
var bL=this.__hc(bG);

if(bJ){var bI=bK.getData(bG);
var bH=bK.toUri(bI[4]);

if(bF===d){bE=this.__hg(bE,bI,bL.height);
}else{bE=this.__hh(bE,bI,bL.width);
}return {src:bH,style:bE};
}else{{};

if(bF==d){bE.height=bL.height==null?null:bL.height+k;
}else if(bF==a){bE.width=bL.width==null?null:bL.width+k;
}var bH=bK.toUri(bG);
return {src:bH,style:bE};
}},__hg:function(bA,bB,bC){var bD=qx.util.ResourceManager.getInstance().getImageHeight(bB[4]);
bA.clip={top:-bB[6],height:bC};
bA.height=bD+k;
if(bA.top!=null){bA.top=(parseInt(bA.top,10)+bB[6])+k;
}else if(bA.bottom!=null){bA.bottom=(parseInt(bA.bottom,10)+bC-bD-bB[6])+k;
}return bA;
},__hh:function(O,P,Q){var R=qx.util.ResourceManager.getInstance().getImageWidth(P[4]);
O.clip={left:-P[5],width:Q};
O.width=R+k;
if(O.left!=null){O.left=(parseInt(O.left,10)+P[5])+k;
}else if(O.right!=null){O.right=(parseInt(O.right,10)+Q-R-P[5])+k;
}return O;
},__hi:function(bn,bo,bp){var bu=qx.util.ResourceManager.getInstance().isClippedImage(bp);
var bt=this.__hc(bp);
if(bu&&bo!==E){var bs=qx.util.ResourceManager.getInstance().getData(bp);
var br=qx.bom.element.Background.getStyles(bs[4],bo,bs[5],bs[6]);

for(var bq in br){bn[bq]=br[bq];
}
if(bt.width!=null&&bn.width==null&&(bo==z||bo===f)){bn.width=bt.width+k;
}
if(bt.height!=null&&bn.height==null&&(bo==t||bo===f)){bn.height=bt.height+k;
}return {style:bn};
}else{{};
bn=this.__hb(bn,bt.width,bt.height);
bn=this.__hj(bn,bp,bo);
return {style:bn};
}},__hj:function(Y,ba,bb){var top=null;
var bf=null;

if(Y.backgroundPosition){var bc=Y.backgroundPosition.split(m);
bf=parseInt(bc[0]);

if(isNaN(bf)){bf=bc[0];
}top=parseInt(bc[1]);

if(isNaN(top)){top=bc[1];
}}var be=qx.bom.element.Background.getStyles(ba,bb,bf,top);

for(var bd in be){Y[bd]=be[bd];
}if(Y.filter){Y.filter=g;
}return Y;
},__hk:function(S){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(S)&&S.indexOf(F)==-1){if(!this.__gW[S]){qx.log.Logger.debug("Potential clipped image candidate: "+S);
this.__gW[S]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Variant.select(j,{"mshtml":function(){return qx.bom.element.Decoration.__gX;
},"default":function(){return false;
}})}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var n="_applyLayoutChange",m="left",k="center",j="top",h="Decorator",g="middle",f="_applyReversed",e="bottom",d="Boolean",c="right",a="Integer",b="qx.ui.layout.HBox";
qx.Class.define(b,{extend:qx.ui.layout.Abstract,construct:function(o,p,q){arguments.callee.base.call(this);

if(o){this.setSpacing(o);
}
if(p){this.setAlignX(p);
}
if(q){this.setSeparator(q);
}},properties:{alignX:{check:[m,k,c],init:m,apply:n},alignY:{check:[j,g,e],init:j,apply:n},spacing:{check:a,init:0,apply:n},separator:{check:h,nullable:true,apply:n},reversed:{check:d,init:false,apply:f}},members:{__jO:null,__jP:null,__jQ:null,__jR:null,_applyReversed:function(){this._invalidChildrenCache=true;
this._applyLayoutChange();
},__jS:function(){var w=this._getLayoutChildren();
var length=w.length;
var t=false;
var r=this.__jO&&this.__jO.length!=length&&this.__jP&&this.__jO;
var u;
var s=r?this.__jO:new Array(length);
var v=r?this.__jP:new Array(length);
if(this.getReversed()){w=w.concat().reverse();
}for(var i=0;i<length;i++){u=w[i].getLayoutProperties();

if(u.width!=null){s[i]=parseFloat(u.width)/100;
}
if(u.flex!=null){v[i]=u.flex;
t=true;
}else{v[i]=0;
}}if(!r){this.__jO=s;
this.__jP=v;
}this.__jQ=t;
this.__jR=w;
delete this._invalidChildrenCache;
},verifyLayoutProperty:null,renderLayout:function(x,y){if(this._invalidChildrenCache){this.__jS();
}var E=this.__jR;
var length=E.length;
var N=qx.ui.layout.Util;
var M=this.getSpacing();
var Q=this.getSeparator();

if(Q){var B=N.computeHorizontalSeparatorGaps(E,M,Q);
}else{var B=N.computeHorizontalGaps(E,M,true);
}var i,z,K,J;
var P=[];
var F=B;

for(i=0;i<length;i+=1){J=this.__jO[i];
K=J!=null?Math.floor((x-B)*J):E[i].getSizeHint().width;
P.push(K);
F+=K;
}if(this.__jQ&&F!=x){var H={};
var L,O;

for(i=0;i<length;i+=1){L=this.__jP[i];

if(L>0){G=E[i].getSizeHint();
H[i]={min:G.minWidth,value:P[i],max:G.maxWidth,flex:L};
}}var C=N.computeFlexOffsets(H,x,F);

for(i in C){O=C[i].offset;
P[i]+=O;
F+=O;
}}var U=E[0].getMarginLeft();
if(F<x&&this.getAlignX()!=m){U=x-F;

if(this.getAlignX()===k){U=Math.round(U/2);
}}var G,top,A,K,D,S,I;
var M=this.getSpacing();
this._clearSeparators();
if(Q){var R=qx.theme.manager.Decoration.getInstance().resolve(Q).getInsets();
var T=R.left+R.right;
}for(i=0;i<length;i+=1){z=E[i];
K=P[i];
G=z.getSizeHint();
S=z.getMarginTop();
I=z.getMarginBottom();
A=Math.max(G.minHeight,Math.min(y-S-I,G.maxHeight));
top=N.computeVerticalAlignOffset(z.getAlignY()||this.getAlignY(),A,y,S,I);
if(i>0){if(Q){U+=D+M;
this._renderSeparator(Q,{left:U,top:0,width:T,height:y});
U+=T+M+z.getMarginLeft();
}else{U+=N.collapseMargins(M,D,z.getMarginLeft());
}}z.renderLayout(U,top,K,A);
U+=K;
D=z.getMarginRight();
}},_computeSizeHint:function(){if(this._invalidChildrenCache){this.__jS();
}var bc=qx.ui.layout.Util;
var bk=this.__jR;
var V=0,bd=0,ba=0;
var Y=0,bb=0;
var bh,W,bj;
for(var i=0,l=bk.length;i<l;i+=1){bh=bk[i];
W=bh.getSizeHint();
bd+=W.width;
var bg=this.__jP[i];
var X=this.__jO[i];

if(bg){V+=W.minWidth;
}else if(X){ba=Math.max(ba,Math.round(W.minWidth/X));
}else{V+=W.width;
}bj=bh.getMarginTop()+bh.getMarginBottom();
if((W.height+bj)>bb){bb=W.height+bj;
}if((W.minHeight+bj)>Y){Y=W.minHeight+bj;
}}V+=ba;
var bf=this.getSpacing();
var bi=this.getSeparator();

if(bi){var be=bc.computeHorizontalSeparatorGaps(bk,bf,bi);
}else{var be=bc.computeHorizontalGaps(bk,bf,true);
}return {minWidth:V+be,width:bd+be,minHeight:Y,height:bb};
}},destruct:function(){this.__jO=this.__jP=this.__jR=null;
}});
})();
(function(){var q="_applyBackground",p="repeat",o="mshtml",n="backgroundPositionX",m="",l="backgroundPositionY",k="no-repeat",j="scale",i=" ",h="repeat-x",c="qx.client",g="repeat-y",f="hidden",b="qx.ui.decoration.MBackgroundImage",a="String",e='"></div>',d='<div style="';
qx.Mixin.define(b,{properties:{backgroundImage:{check:a,nullable:true,apply:q},backgroundRepeat:{check:[p,h,g,k,j],init:p,apply:q},backgroundPositionX:{nullable:true,apply:q},backgroundPositionY:{nullable:true,apply:q},backgroundPosition:{group:[l,n]}},members:{_generateBackgroundMarkup:function(r){{};
var v=m;
var u=this.getBackgroundImage();
var t=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var w=this.getBackgroundPositionX();

if(w==null){w=0;
}r.backgroundPosition=w+i+top;
if(u){var s=qx.util.AliasManager.getInstance().resolve(u);
v=qx.bom.element.Decoration.create(s,t,r);
}else{if(r){if(qx.core.Variant.isSet(c,o)){if(qx.bom.client.Engine.VERSION<7||qx.bom.client.Feature.QUIRKS_MODE){r.overflow=f;
}}v=d+qx.bom.element.Style.compile(r)+e;
}}return v;
},_applyBackground:function(){{};
}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__rE:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__rE=null;
},getInsets:function(){if(this.__rE){return this.__rE;
}var j=this._getDefaultInsets();
return this.__rE={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){{};
this.__rE=null;
}},destruct:function(){this.__rE=null;
}});
})();
(function(){var j="_applyStyle",i="solid",h="Color",g="",f="double",e="px ",d="dotted",c="_applyWidth",b="dashed",a="Number",F=" ",E="shorthand",D="px",C="widthTop",B="styleRight",A="styleLeft",z="widthLeft",y="widthBottom",x="styleTop",w="colorBottom",q="styleBottom",r="widthRight",o="colorLeft",p="colorRight",m="colorTop",n="scale",k="border-top",l="border-left",s="border-right",t="qx.ui.decoration.Single",v="border-bottom",u="absolute";
qx.Class.define(t,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(L,M,N){arguments.callee.base.call(this);
if(L!=null){this.setWidth(L);
}
if(M!=null){this.setStyle(M);
}
if(N!=null){this.setColor(N);
}},properties:{widthTop:{check:a,init:0,apply:c},widthRight:{check:a,init:0,apply:c},widthBottom:{check:a,init:0,apply:c},widthLeft:{check:a,init:0,apply:c},styleTop:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleRight:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleBottom:{nullable:true,check:[i,d,b,f],init:i,apply:j},styleLeft:{nullable:true,check:[i,d,b,f],init:i,apply:j},colorTop:{nullable:true,check:h,apply:j},colorRight:{nullable:true,check:h,apply:j},colorBottom:{nullable:true,check:h,apply:j},colorLeft:{nullable:true,check:h,apply:j},backgroundColor:{check:h,nullable:true,apply:j},left:{group:[z,A,o]},right:{group:[r,B,p]},top:{group:[C,x,m]},bottom:{group:[y,q,w]},width:{group:[C,r,y,z],mode:E},style:{group:[x,B,q,A],mode:E},color:{group:[m,p,w,o],mode:E}},members:{__rH:null,_getDefaultInsets:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_isInitialized:function(){return !!this.__rH;
},getMarkup:function(G){if(this.__rH){return this.__rH;
}var H=qx.theme.manager.Color.getInstance();
var I={};
var K=this.getWidthTop();

if(K>0){I[k]=K+e+this.getStyleTop()+F+(H.resolve(this.getColorTop())||g);
}var K=this.getWidthRight();

if(K>0){I[s]=K+e+this.getStyleRight()+F+(H.resolve(this.getColorRight())||g);
}var K=this.getWidthBottom();

if(K>0){I[v]=K+e+this.getStyleBottom()+F+(H.resolve(this.getColorBottom())||g);
}var K=this.getWidthLeft();

if(K>0){I[l]=K+e+this.getStyleLeft()+F+(H.resolve(this.getColorLeft())||g);
}{};
I.position=u;
I.top=0;
I.left=0;
var J=this._generateBackgroundMarkup(I);
return this.__rH=J;
},resize:function(O,P,Q){var S=this.getBackgroundImage()&&this.getBackgroundRepeat()==n;

if(S||qx.bom.client.Feature.CONTENT_BOX){var R=this.getInsets();
P-=R.left+R.right;
Q-=R.top+R.bottom;
if(P<0){P=0;
}
if(Q<0){Q=0;
}}O.style.width=P+D;
O.style.height=Q+D;
},tint:function(T,U){var V=qx.theme.manager.Color.getInstance();

if(U==null){U=this.getBackgroundColor();
}T.style.backgroundColor=V.resolve(U)||g;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__rH=null;
}});
})();
(function(){var n="qx.client",m="head",l="text/css",k="stylesheet",j="}",h='@import "',g="{",f='";',e="qx.bom.Stylesheet",d="link",c="style";
qx.Class.define(e,{statics:{includeFile:function(D,E){if(!E){E=document;
}var F=E.createElement(d);
F.type=l;
F.rel=k;
F.href=qx.util.ResourceManager.getInstance().toUri(D);
var G=E.getElementsByTagName(m)[0];
G.appendChild(F);
},createElement:qx.core.Variant.select(n,{"mshtml":function(ba){var bb=document.createStyleSheet();

if(ba){bb.cssText=ba;
}return bb;
},"default":function(o){var p=document.createElement(c);
p.type=l;

if(o){p.appendChild(document.createTextNode(o));
}document.getElementsByTagName(m)[0].appendChild(p);
return p.sheet;
}}),addRule:qx.core.Variant.select(n,{"mshtml":function(q,r,s){q.addRule(r,s);
},"default":function(t,u,v){t.insertRule(u+g+v+j,t.cssRules.length);
}}),removeRule:qx.core.Variant.select(n,{"mshtml":function(O,P){var Q=O.rules;
var R=Q.length;

for(var i=R-1;i>=0;--i){if(Q[i].selectorText==P){O.removeRule(i);
}}},"default":function(H,I){var J=H.cssRules;
var K=J.length;

for(var i=K-1;i>=0;--i){if(J[i].selectorText==I){H.deleteRule(i);
}}}}),removeAllRules:qx.core.Variant.select(n,{"mshtml":function(bc){var bd=bc.rules;
var be=bd.length;

for(var i=be-1;i>=0;i--){bc.removeRule(i);
}},"default":function(L){var M=L.cssRules;
var N=M.length;

for(var i=N-1;i>=0;i--){L.deleteRule(i);
}}}),addImport:qx.core.Variant.select(n,{"mshtml":function(bf,bg){bf.addImport(bg);
},"default":function(a,b){a.insertRule(h+b+f,a.cssRules.length);
}}),removeImport:qx.core.Variant.select(n,{"mshtml":function(V,W){var X=V.imports;
var Y=X.length;

for(var i=Y-1;i>=0;i--){if(X[i].href==W){V.removeImport(i);
}}},"default":function(z,A){var B=z.cssRules;
var C=B.length;

for(var i=C-1;i>=0;i--){if(B[i].href==A){z.deleteRule(i);
}}}}),removeAllImports:qx.core.Variant.select(n,{"mshtml":function(S){var T=S.imports;
var U=T.length;

for(var i=U-1;i>=0;i--){S.removeImport(i);
}},"default":function(w){var x=w.cssRules;
var y=x.length;

for(var i=y-1;i>=0;i--){if(x[i].type==x[i].IMPORT_RULE){w.deleteRule(i);
}}}})}});
})();
(function(){var n="success",m="head",l="complete",k="error",j="load",i="fail",h="loaded",g="readystatechange",f="qx.io.ScriptLoader",d="script",a="qx.client",c="text/javascript",b="abort";
qx.Class.define(f,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__wl=qx.lang.Function.bind(this.__wr,this);
this.__wm=document.createElement(d);
},members:{__wn:null,__wo:null,__wp:null,__wl:null,__wm:null,load:function(p,q,r){if(this.__wn){throw new Error("Another request is still running!");
}this.__wn=true;
var s=document.getElementsByTagName(m)[0];
var t=this.__wm;
this.__wo=q||null;
this.__wp=r||window;
t.type=c;
t.onerror=t.onload=t.onreadystatechange=this.__wl;
t.src=p;
s.appendChild(t);
},abort:function(){if(this.__wn){this.__wq(b);
}},__wq:function(status){var o=this.__wm;
o.onerror=o.onload=o.onreadystatechange=null;
document.getElementsByTagName(m)[0].removeChild(o);
delete this.__wn;
if(this.__wo){this.__wo.call(this.__wp,status);
delete this.__wo;
}},__wr:qx.event.GlobalError.observeMethod(qx.core.Variant.select(a,{"mshtml":function(e){var u=this.__wm.readyState;

if(u==h){this.__wq(n);
}else if(u==l){this.__wq(n);
}else{return;
}},"opera":function(e){if(qx.lang.Type.isString(e)||e.type===k){return this.__wq(i);
}else if(e.type===j){return this.__wq(n);
}else{return;
}},"default":function(e){if(qx.lang.Type.isString(e)||e.type===k){this.__wq(i);
}else if(e.type===j){this.__wq(n);
}else if(e.type===g&&(e.target.readyState===l||e.target.readyState===h)){this.__wq(n);
}else{return;
}}}))},destruct:function(){this.__wm.onerror=this.__wm.onload=this.__wm.onreadystatechange=null;
this.__wm=this.__wl=this.__wo=this.__wp=null;
}});
})();
(function(){var c="qx.event.handler.Iframe",b="load",a="iframe";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(i){qx.event.Registration.fireEvent(i,b);
})},members:{canHandleEvent:function(g,h){return g.tagName.toLowerCase()===a;
},registerEvent:function(k,l,m){},unregisterEvent:function(d,e,f){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var h="qx.client",g="webkit",f="body",e="iframe",d="qx.bom.Iframe";
qx.Class.define(d,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(i,j){var i=i?qx.lang.Object.clone(i):{};
var k=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var l in k){if(i[l]==null){i[l]=k[l];
}}return qx.bom.Element.create(e,i,j);
},getWindow:qx.core.Variant.select(h,{"mshtml|gecko":function(C){try{return C.contentWindow;
}catch(p){return null;
}},"default":function(z){try{var A=this.getDocument(z);
return A?A.defaultView:null;
}catch(q){return null;
}}}),getDocument:qx.core.Variant.select(h,{"mshtml":function(m){try{var n=this.getWindow(m);
return n?n.document:null;
}catch(u){return null;
}},"default":function(B){try{return B.contentDocument;
}catch(D){return null;
}}}),getBody:function(r){try{var s=this.getDocument(r);
return s?s.getElementsByTagName(f)[0]:null;
}catch(t){return null;
}},setSource:function(a,b){try{if(this.getWindow(a)&&qx.dom.Hierarchy.isRendered(a)){try{if(qx.core.Variant.isSet(h,g)&&qx.bom.client.Platform.MAC){var c=this.getContentWindow();

if(c){c.stop();
}}this.getWindow(a).location.replace(b);
}catch(v){a.src=b;
}}else{a.src=b;
}}catch(o){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(x){var y=this.getDocument(x);

try{if(y&&y.location){return y.location.href;
}}catch(w){}return null;
}}});
})();
(function(){var f="changeSelection",e="change",d="qx.data.Array",c="qx.data.controller.MSelection",b="_applySelection",a="target";
qx.Mixin.define(c,{construct:function(){if(!qx.Class.hasProperty(this.constructor,a)){throw new Error("Target property is needed.");
}if(this.getSelection()==null){this.setSelection(new qx.data.Array());
}},properties:{selection:{check:d,event:f,apply:b,init:null}},members:{_modifingSelection:0,__wH:null,__wI:null,_applySelection:function(g,h){if(this.__wI!=undefined&&h!=undefined){h.removeListenerById(this.__wI);
}this.__wI=g.addListener(e,this.__wJ,this);
},__wJ:function(){this._updateSelection();
},_changeTargetSelection:function(){if(this.getTarget()==null){return;
}if(!this.__wK()&&!this.__wL()){return;
}if(this._inSelectionModification()){return;
}var s=this.getTarget().getSelection();
var r=this.getSelection();

if(r==null){r=new qx.data.Array();
this.setSelection(r);
}if(s.length>0){r.toArray().splice(0,r.getLength());
}else{r.splice(0,this.getSelection().getLength());
}for(var i=0;i<s.length;i++){var q=s[i].getModel();

if(i+1==s.length){r.push(q);
}else{r.toArray().push(q);
}}this.fireDataEvent(f,this.getSelection());
},_addChangeTargetListener:function(w,x){if(this.__wH!=undefined&&x!=undefined){x.removeListenerById(this.__wH);
}
if(w!=null){if(this.__wK()||this.__wL()){this.__wH=w.addListener(f,this._changeTargetSelection,this);
}}},_updateSelection:function(){this._startSelectionModification();
if(this.__wK()){var k=[];
for(var i=0;i<this.getSelection().length;i++){var j=this.getSelection().getItem(i);
var l=this.__wN(j);

if(l!=null){k.push(l);
}}this.getTarget().setSelection(k);
k=this.getTarget().getSelection();
var m=[];

for(var i=0;i<k.length;i++){m[i]=k[i].getModel();
}for(var i=this.getSelection().length-1;i>=0;i--){if(!qx.lang.Array.contains(m,this.getSelection().getItem(i))){this.getSelection().splice(i,1);
}}}else if(this.__wL()){this.__wM(this.getSelection().getItem(this.getSelection().length-1));
this.getSelection().splice(0,this.getSelection().getLength()-1);
}this._endSelectionModification();
},__wK:function(){var v=this.getTarget().constructor;
return qx.Class.implementsInterface(v,qx.ui.core.IMultiSelection);
},__wL:function(){var n=this.getTarget().constructor;
return qx.Class.implementsInterface(n,qx.ui.core.ISingleSelection);
},__wM:function(o){var p=this.__wN(o);
if(p==null){return;
}if(this.__wK()){this.getTarget().addToSelection(p);
}else if(this.__wL()){this.getTarget().setSelection([p]);
}},__wN:function(t){var u=this.getTarget().getSelectables();
for(var i=0;i<u.length;i++){if(u[i].getModel()==t){return u[i];
}}return null;
},_startSelectionModification:function(){this._modifingSelection++;
},_endSelectionModification:function(){this._modifingSelection>0?this._modifingSelection--:null;
},_inSelectionModification:function(){return this._modifingSelection>0;
}}});
})();
(function(){var r="change",q="ReverseBindingId",p="BindingId",o="",n="]",m="model[",k="String",h=".",g="changeModel",f="_applyLabelOptions",E="_applyLabelPath",D="changeTarget",C="changeLength",B="_applyModel",A="icon",z="qx.data.controller.List",y="_applyIconPath",x="_applyDelegate",w="changeDelegate",v="_applyTarget",t="qx.data.IListData",u="label",s="_applyIconOptions";
qx.Class.define(z,{extend:qx.core.Object,include:qx.data.controller.MSelection,construct:function(by,bz,bA){arguments.callee.base.call(this);
this.__ws=[];
this.__wt=[];
this.__wu=[];
this.__wv={};

if(bA!=null){this.setLabelPath(bA);
}
if(by!=null){this.setModel(by);
}
if(bz!=null){this.setTarget(bz);
}},properties:{model:{check:t,apply:B,event:g,nullable:true},target:{apply:v,event:D,nullable:true,init:null},labelPath:{check:k,apply:E,nullable:true},iconPath:{check:k,apply:y,nullable:true},labelOptions:{apply:f,nullable:true},iconOptions:{apply:s,nullable:true},delegate:{apply:x,event:w,init:null,nullable:true}},members:{__ww:null,__wx:null,__ws:null,__wv:null,__wt:null,__wu:null,update:function(){this.__wz();
this.__wD();
this._updateSelection();
},_applyDelegate:function(bw,bx){this._setConfigureItem(bw,bx);
this._setFilter(bw,bx);
this._setCreateItem(bw,bx);
this._setBindItem(bw,bx);
},_applyIconOptions:function(bg,bh){this.__wD();
},_applyLabelOptions:function(bm,bn){this.__wD();
},_applyIconPath:function(ba,bb){this.__wD();
},_applyLabelPath:function(bu,bv){this.__wD();
},_applyModel:function(bN,bO){if(bO!=undefined){if(this.__ww!=undefined){bO.removeListenerById(this.__ww);
}
if(this.__wx!=undefined){bO.removeListenerById(this.__wx);
}}if(this.getSelection()!=undefined&&this.getSelection().length>0){this.getSelection().splice(0,this.getSelection().length);
}if(bN!=null){this.__ww=bN.addListener(C,this.__wz,this);
this.__wx=bN.addListener(r,this.__wy,this);
this.__wF();
this.__wz();
if(this.getTarget()!=null){var bQ=this.getModel();
var bR=this.getTarget().getChildren();

for(var i=0,l=this.__ws.length;i<l;i++){var bS=bQ.getItem(this.__wG(i));
var bP=bR[i];
bP.setModel(bS);
}}this._changeTargetSelection();
}},_applyTarget:function(N,O){this._addChangeTargetListener(N,O);
if(O!=undefined){O.removeAll();
this.removeAllBindings();
}
if(N!=null){if(this.getModel()!=null){for(var i=0;i<this.__ws.length;i++){this.__wB(this.__wG(i));
}}}},__wy:function(){for(var i=this.getSelection().length-1;i>=0;i--){if(!this.getModel().contains(this.getSelection().getItem(i))){this.getSelection().splice(i,1);
}}qx.ui.core.queue.Widget.add(this);
if(this.__ws.length!=this.getModel().getLength()){this.update();
}},syncWidget:function(){this._updateSelection();
},__wz:function(){if(this.getTarget()==null){return;
}this.__wF();
var M=this.__ws.length;
var L=this.getTarget().getChildren().length;
if(M>L){for(var j=L;j<M;j++){this.__wB(this.__wG(j));
}}else if(M<L){for(var j=L;j>M;j--){this.__wC();
}}},__wA:function(){var bX=this.getModel();
if(bX!=null){bX.removeListenerById(this.__wx);
this.__wx=bX.addListener(r,this.__wy,this);
}},_createItem:function(){var bl=this.getDelegate();
if(bl!=null&&bl.createItem!=null){var bk=bl.createItem();
}else{var bk=new qx.ui.form.ListItem();
}if(bl!=null&&bl.configureItem!=null){bl.configureItem(bk);
}return bk;
},__wB:function(bT){var bU=this._createItem();
bU.setModel(this.getModel().getItem(bT)||null);
this._bindListItem(bU,bT);
this.getTarget().add(bU);
},__wC:function(){this._startSelectionModification();
var bd=this.getTarget().getChildren();
var bc=bd.length-1;
var be=bd[bc];
this._removeBindingsFrom(be);
this.getTarget().removeAt(bc);
be.destroy();
this._endSelectionModification();
},getVisibleModels:function(){var a=[];
var b=this.getTarget();

if(b!=null){var c=b.getChildren();

for(var i=0;i<c.length;i++){a.push(c[i].getModel());
}}return new qx.data.Array(a);
},_bindListItem:function(bo,bp){var bq=this.getDelegate();
if(bq!=null&&bq.bindItem!=null){bq.bindItem(this,bo,bp);
}else{this.bindDefaultProperties(bo,bp);
}},bindDefaultProperties:function(bV,bW){this.bindProperty(this.getLabelPath(),u,this.getLabelOptions(),bV,bW);
if(this.getIconPath()!=null){this.bindProperty(this.getIconPath(),A,this.getIconOptions(),bV,bW);
}},bindProperty:function(bF,bG,bH,bI,bJ){bI.setModel(this.getModel().getItem(bJ));
if(bH!=null){var bH=qx.lang.Object.clone(bH);
this.__wv[bG]=bH.onUpdate;
delete bH.onUpdate;
}else{bH={};
this.__wv[bG]=null;
}bH.onUpdate=qx.lang.Function.bind(this._onBindingSet,this,bJ);
var bK=m+bJ+n;

if(bF!=null&&bF!=o){bK+=h+bF;
}var bL=this.bind(bK,bI,bG,bH);
bI.setUserData(bG+p,bL);
if(!qx.lang.Array.contains(this.__wt,bG)){this.__wt.push(bG);
}},bindPropertyReverse:function(P,Q,R,S,T){var U=m+T+n;

if(P!=null&&P!=o){U+=h+P;
}var V=S.bind(Q,this,U,R);
S.setUserData(P+q,V);
if(!qx.lang.Array.contains(this.__wu,P)){this.__wu.push(P);
}},_onBindingSet:function(bB,bC,bD){if(this.getModel()==null||this._inSelectionModification()){return;
}for(var i=0;i<this.__wt.length;i++){if(this.__wv[this.__wt[i]]!=null){this.__wv[this.__wt[i]]();
}}var bE=this.getModel().getItem(bB);
bD.setModel(bE==undefined?null:bE);
},_removeBindingsFrom:function(bi){for(var i=0;i<this.__wt.length;i++){var bj=bi.getUserData(this.__wt[i]+p);

if(bj!=null){this.removeBinding(bj);
}}for(var i=0;i<this.__wu.length;i++){var bj=bi.getUserData(this.__wu[i]+q);

if(bj!=null){bi.removeBinding(bj);
}}},__wD:function(){if(this.getTarget()==null||this.getModel()==null){return;
}var bf=this.getTarget().getChildren();
for(var i=0;i<bf.length;i++){this._removeBindingsFrom(bf[i]);
this._bindListItem(bf[i],this.__wG(i));
}this.__wA();
},_setConfigureItem:function(bY,ca){if(bY!=null&&bY.configureItem!=null&&this.getTarget()!=null){var cb=this.getTarget().getChildren();

for(var i=0;i<cb.length;i++){bY.configureItem(cb[i]);
}}},_setBindItem:function(d,e){if(d!=null&&d.bindItem!=null){if(e!=null&&e.bindItem!=null&&d.bindItem==e.bindItem){return;
}this.__wD();
}},_setCreateItem:function(W,X){if(this.getTarget()==null||this.getModel()==null||W==null||W.createItem==null){return;
}this._startSelectionModification();
var Y=this.getTarget().getChildren();

for(var i=0,l=Y.length;i<l;i++){this._removeBindingsFrom(Y[i]);
}this.getTarget().removeAll();
this.update();
this._endSelectionModification();
this._updateSelection();
},_setFilter:function(F,G){if((F==null||F.filter==null)&&(G!=null&&G.filter!=null)){this.__wE();
}if(this.getTarget()==null||this.getModel()==null||F==null||F.filter==null){return;
}this._startSelectionModification();
var K=this.getTarget().getChildren();

for(var i=0,l=K.length;i<l;i++){this._removeBindingsFrom(K[i]);
}var I=this.__ws;
this.__wF();
if(I.length>this.__ws.length){for(var j=I.length;j>this.__ws.length;j--){this.getTarget().removeAt(j-1);
}}else if(I.length<this.__ws.length){for(var j=I.length;j<this.__ws.length;j++){var J=this._createItem();
this.getTarget().add(J);
}}var H=this.getTarget().getChildren();

for(var i=0;i<H.length;i++){this._bindListItem(H[i],this.__wG(i));
}this.__wA();
this._endSelectionModification();
this._updateSelection();
},__wE:function(){this.__wF();
this.__wz();
this.__wD();
qx.ui.core.queue.Widget.add(this);
},__wF:function(){var bs=this.getModel();

if(bs==null){return;
}var bt=this.getDelegate();

if(bt!=null){var br=bt.filter;
}this.__ws=[];

for(var i=0;i<bs.getLength();i++){if(br==null||br(bs.getItem(i))){this.__ws.push(i);
}}},__wG:function(bM){return this.__ws[bM];
}},destruct:function(){this.__ws=this.__wv=this.__wt=null;
this.__wu=null;
}});
})();
(function(){var h="qx.ui.core.MSingleSelectionHandling",g="__qf",f="changeSelection",d="changeSelected",c="qx.event.type.Data";
qx.Mixin.define(h,{events:{"changeSelection":c},members:{__qf:null,getSelection:function(){var l=this.__qg().getSelected();

if(l){return [l];
}else{return [];
}},setSelection:function(m){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}
switch(m.length){case 0:this.resetSelection();
break;
case 1:this.__qg().setSelected(m[0]);
break;
default:throw new Error("Could only select one item, but the selection "+" array contains "+m.length+" items!");
}},resetSelection:function(){if(!this.getEnabled()){this.warn("Resetting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to reset the selection."));
this.trace();
}this.__qg().resetSelected();
},isSelected:function(k){return this.__qg().isSelected(k);
},isSelectionEmpty:function(){return this.__qg().isSelectionEmpty();
},getSelectables:function(){return this.__qg().getSelectables();
},_onChangeSelected:function(e){var b=e.getData();
var a=e.getOldData();
b==null?b=[]:b=[b];
a==null?a=[]:a=[a];
this.fireDataEvent(f,b,a);
},__qg:function(){if(this.__qf==null){var i=this;
this.__qf=new qx.ui.core.SingleSelectionManager({getItems:function(){return i._getItems();
},isItemSelectable:function(j){if(i._isItemSelectable){return i._isItemSelectable(j);
}else{return j.isEnabled()&&j.isVisible();
}}});
this.__qf.addListener(d,this._onChangeSelected,this);
}this.__qf.setAllowEmptySelection(this._isAllowEmptySelection());
return this.__qf;
}},destruct:function(){this._disposeObjects(g);
}});
})();
(function(){var j="__qk",h="__qj",g="Boolean",f="qx.ui.core.SingleSelectionManager",e="__qi",d="changeSelected",c="qx.event.type.Data";
qx.Class.define(f,{extend:qx.core.Object,construct:function(n){arguments.callee.base.call(this);
{};
this.__qi=n;
},events:{"changeSelected":c},properties:{allowEmptySelection:{check:g,init:true,apply:j}},members:{__qj:null,__qi:null,getSelected:function(){return this.__qj;
},setSelected:function(k){if(!this.__qm(k)){throw new Error("Could not select "+k+", because it is not a child element!");
}this.__ql(k);
},resetSelected:function(){this.__ql(null);
},isSelected:function(o){if(!this.__qm(o)){throw new Error("Could not check if "+o+" is selected,"+" because it is not a child element!");
}return this.__qj===o;
},isSelectionEmpty:function(){return this.__qj==null;
},getSelectables:function(){var p=this.__qi.getItems();
var q=[];

for(var i=0;i<p.length;i++){if(this.__qi.isItemSelectable(p[i])){q.push(p[i]);
}}return q;
},__qk:function(a,b){if(!a){this.__ql(this.__qj);
}},__ql:function(r){var u=this.__qj;
var t=r;

if(t!=null&&u===t){return;
}
if(!this.isAllowEmptySelection()&&t==null){var s=this.getSelectables()[0];

if(s){t=s;
}}this.__qj=t;
this.fireDataEvent(d,t,u);
},__qm:function(l){var m=this.__qi.getItems();

for(var i=0;i<m.length;i++){if(m[i]===l){return true;
}}return false;
}},destruct:function(){if(this.__qi.toHashCode){this._disposeObjects(e);
}else{this.__qi=null;
}this._disposeObjects(h);
}});
})();
(function(){var f="mousedown",d="__lj",c="blur",b="singleton",a="qx.ui.popup.Manager";
qx.Class.define(a,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__lj={};
qx.event.Registration.addListener(document.documentElement,f,this.__ll,this,true);
qx.bom.Element.addListener(window,c,this.hideAll,this);
},members:{__lj:null,add:function(m){{};
this.__lj[m.$$hash]=m;
this.__lk();
},remove:function(n){{};
var o=this.__lj;

if(o){delete o[n.$$hash];
this.__lk();
}},hideAll:function(){var h=this.__lj;

if(h){for(var g in h){h[g].exclude();
}}},__lk:function(){var r=1e7;
var q=this.__lj;

for(var p in q){q[p].setZIndex(r++);
}},__ll:function(e){var k=qx.ui.core.Widget.getWidgetByElement(e.getTarget());
var l=this.__lj;

for(var j in l){var i=l[j];

if(!i.getAutoHide()||k==i||qx.ui.core.Widget.contains(i,k)){continue;
}i.exclude();
}}},destruct:function(){qx.event.Registration.removeListener(document.documentElement,f,this.__ll,this,true);
this._disposeMap(d);
}});
})();
(function(){var e="qx.ui.popup.Popup",d="visible",c="excluded",b="popup",a="Boolean";
qx.Class.define(e,{extend:qx.ui.container.Composite,include:qx.ui.core.MPlacement,construct:function(f){arguments.callee.base.call(this,f);
qx.core.Init.getApplication().getRoot().add(this);
this.initVisibility();
},properties:{appearance:{refine:true,init:b},visibility:{refine:true,init:c},autoHide:{check:a,init:true}},members:{_applyVisibility:function(g,h){arguments.callee.base.call(this,g,h);
var i=qx.ui.popup.Manager.getInstance();
g===d?i.add(this):i.remove(this);
}},destruct:function(){qx.ui.popup.Manager.getInstance().remove(this);
}});
})();
(function(){var ba="keypress",Y="__or",X="focusout",W="activate",V="Tab",U="singleton",T="deactivate",S="focusin",R="qx.ui.core.FocusHandler";
qx.Class.define(R,{extend:qx.core.Object,type:U,construct:function(){arguments.callee.base.call(this);
this.__or={};
},members:{__or:null,__os:null,__ot:null,__ou:null,connectTo:function(bi){bi.addListener(ba,this.__ov,this);
bi.addListener(S,this._onFocusIn,this,true);
bi.addListener(X,this._onFocusOut,this,true);
bi.addListener(W,this._onActivate,this,true);
bi.addListener(T,this._onDeactivate,this,true);
},addRoot:function(b){this.__or[b.$$hash]=b;
},removeRoot:function(bb){delete this.__or[bb.$$hash];
},getActiveWidget:function(){return this.__os;
},isActive:function(u){return this.__os==u;
},getFocusedWidget:function(){return this.__ot;
},isFocused:function(bh){return this.__ot==bh;
},isFocusRoot:function(a){return !!this.__or[a.$$hash];
},_onActivate:function(e){var D=e.getTarget();
this.__os=D;
var C=this.__ow(D);

if(C!=this.__ou){this.__ou=C;
}},_onDeactivate:function(e){var bf=e.getTarget();

if(this.__os==bf){this.__os=null;
}},_onFocusIn:function(e){var I=e.getTarget();

if(I!=this.__ot){this.__ot=I;
I.visualizeFocus();
}},_onFocusOut:function(e){var bg=e.getTarget();

if(bg==this.__ot){this.__ot=null;
bg.visualizeBlur();
}},__ov:function(e){if(e.getKeyIdentifier()!=V){return;
}
if(!this.__ou){return;
}e.stopPropagation();
e.preventDefault();
var P=this.__ot;

if(!e.isShiftPressed()){var Q=P?this.__oA(P):this.__oy();
}else{var Q=P?this.__oB(P):this.__oz();
}if(Q){Q.tabFocus();
}},__ow:function(J){var K=this.__or;

while(J){if(K[J.$$hash]){return J;
}J=J.getLayoutParent();
}return null;
},__ox:function(h,j){if(h===j){return 0;
}var m=h.getTabIndex()||0;
var k=j.getTabIndex()||0;

if(m!=k){return m-k;
}var r=h.getContainerElement().getDomElement();
var q=j.getContainerElement().getDomElement();
var p=qx.bom.element.Location;
var o=p.get(r);
var n=p.get(q);
if(o.top!=n.top){return o.top-n.top;
}if(o.left!=n.left){return o.left-n.left;
}var s=h.getZIndex();
var t=j.getZIndex();

if(s!=t){return s-t;
}return 0;
},__oy:function(){return this.__oE(this.__ou,null);
},__oz:function(){return this.__oF(this.__ou,null);
},__oA:function(L){var M=this.__ou;

if(M==L){return this.__oy();
}
while(L&&L.getAnonymous()){L=L.getLayoutParent();
}
if(L==null){return [];
}var N=[];
this.__oC(M,L,N);
N.sort(this.__ox);
var O=N.length;
return O>0?N[0]:this.__oy();
},__oB:function(E){var F=this.__ou;

if(F==E){return this.__oz();
}
while(E&&E.getAnonymous()){E=E.getLayoutParent();
}
if(E==null){return [];
}var G=[];
this.__oD(F,E,G);
G.sort(this.__ox);
var H=G.length;
return H>0?G[H-1]:this.__oz();
},__oC:function(parent,y,z){var A=parent.getLayoutChildren();
var B;

for(var i=0,l=A.length;i<l;i++){B=A[i];
if(!(B instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(B)&&B.isEnabled()&&B.isVisible()){if(B.isTabable()&&this.__ox(y,B)<0){z.push(B);
}this.__oC(B,y,z);
}}},__oD:function(parent,c,d){var f=parent.getLayoutChildren();
var g;

for(var i=0,l=f.length;i<l;i++){g=f[i];
if(!(g instanceof qx.ui.core.Widget)){continue;
}
if(!this.isFocusRoot(g)&&g.isEnabled()&&g.isVisible()){if(g.isTabable()&&this.__ox(c,g)>0){d.push(g);
}this.__oD(g,c,d);
}}},__oE:function(parent,v){var w=parent.getLayoutChildren();
var x;

for(var i=0,l=w.length;i<l;i++){x=w[i];
if(!(x instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(x)&&x.isEnabled()&&x.isVisible()){if(x.isTabable()){if(v==null||this.__ox(x,v)<0){v=x;
}}v=this.__oE(x,v);
}}return v;
},__oF:function(parent,bc){var bd=parent.getLayoutChildren();
var be;

for(var i=0,l=bd.length;i<l;i++){be=bd[i];
if(!(be instanceof qx.ui.core.Widget)){continue;
}if(!this.isFocusRoot(be)&&be.isEnabled()&&be.isVisible()){if(be.isTabable()){if(bc==null||this.__ox(be,bc)>0){bc=be;
}}bc=this.__oF(be,bc);
}}return bc;
}},destruct:function(){this._disposeMap(Y);
this.__ot=this.__os=this.__ou=null;
}});
})();
(function(){var i="qx.ui.window.Window",h="changeModal",g="changeVisibility",f="changeActive",d="_applyActiveWindow",c="__ra",b="__qY",a="qx.ui.window.MDesktop";
qx.Mixin.define(a,{properties:{activeWindow:{check:i,apply:d,init:null,nullable:true}},members:{__qY:null,__ra:null,getWindowManager:function(){if(!this.__ra){this.setWindowManager(new qx.ui.window.Window.DEFAULT_MANAGER_CLASS());
}return this.__ra;
},supportsMaximize:function(){return true;
},setWindowManager:function(o){if(this.__ra){this.__ra.setDesktop(null);
}o.setDesktop(this);
this.__ra=o;
},_onChangeActive:function(e){if(e.getData()){this.setActiveWindow(e.getTarget());
}else if(this.getActiveWindow()==e.getTarget()){this.setActiveWindow(null);
}},_applyActiveWindow:function(l,m){this.getWindowManager().changeActiveWindow(l,m);

if(l){l.setActive(true);
}
if(m){m.resetActive();
}},_onChangeModal:function(e){this.getWindowManager().updateStack();
},_onChangeVisibility:function(){this.getWindowManager().updateStack();
},_afterAddChild:function(k){if(qx.Class.isDefined(i)&&k instanceof qx.ui.window.Window){this._addWindow(k);
}},_addWindow:function(n){if(!qx.lang.Array.contains(this.getWindows(),n)){this.getWindows().push(n);
n.addListener(f,this._onChangeActive,this);
n.addListener(h,this._onChangeModal,this);
n.addListener(g,this._onChangeVisibility,this);
}
if(n.getActive()){this.setActiveWindow(n);
}this.getWindowManager().updateStack();
},_afterRemoveChild:function(j){if(qx.Class.isDefined(i)&&j instanceof qx.ui.window.Window){this._removeWindow(j);
}},_removeWindow:function(p){qx.lang.Array.remove(this.getWindows(),p);
p.removeListener(f,this._onChangeActive,this);
p.removeListener(h,this._onChangeModal,this);
p.removeListener(g,this._onChangeVisibility,this);
this.getWindowManager().updateStack();
},getWindows:function(){if(!this.__qY){this.__qY=[];
}return this.__qY;
}},destruct:function(){this._disposeArray(b);
this._disposeObjects(c);
}});
})();
(function(){var j="Use 'getBlocker().getContentBlockerElement()' instead.",i="Use 'getBlocker().getBlockerElement()' instead.",h="_applyBlockerColor",g="Number",f="qx.ui.core.MBlocker",e="__qX",d="_applyBlockerOpacity",c="Color";
qx.Mixin.define(f,{construct:function(){this.__qX=new qx.ui.core.Blocker(this);
},properties:{blockerColor:{check:c,init:null,nullable:true,apply:h,themeable:true},blockerOpacity:{check:g,init:1,apply:d,themeable:true}},members:{__qX:null,_applyBlockerColor:function(a,b){this.__qX.setColor(a);
},_applyBlockerOpacity:function(k,l){this.__qX.setOpacity(k);
},block:function(){this.__qX.block();
},isBlocked:function(){return this.__qX.isBlocked();
},unblock:function(){this.__qX.unblock();
},forceUnblock:function(){this.__qX.forceUnblock();
},blockContent:function(m){this.__qX.blockContent(m);
},isContentBlocked:function(){return this.__qX.isContentBlocked();
},unblockContent:function(){this.__qX.unblockContent();
},forceUnblockContent:function(){this.__qX.forceUnblockContent();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,j);
return this.__qX.getContentBlockerElement();
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,i);
return this.__qX.getBlockerElement();
},getBlocker:function(){return this.__qX;
}},destruct:function(){this._disposeObjects(e);
}});
})();
(function(){var p="zIndex",o="px",n="keydown",m="deactivate",l="This method is not needed anymore.",k="resize",j="keyup",h="keypress",g="backgroundColor",f="_applyOpacity",C="__mq",B="opacity",A="interval",z="Tab",y="Color",x="qx.ui.root.Page",w="Use 'getBlockerElement' instead.",v="__mo",u="__mt",t="Use 'getContentBlockerElement' instead.",r="Number",s="qx.ui.core.Blocker",q="_applyColor";
qx.Class.define(s,{extend:qx.core.Object,construct:function(D){arguments.callee.base.call(this);
this._widget=D;
this._isPageRoot=(qx.Class.isDefined(x)&&D instanceof qx.ui.root.Page);

if(this._isPageRoot){D.addListener(k,this.__mu,this);
}this.__ml=[];
this.__mm=[];
this.__mn=[];
},properties:{color:{check:y,init:null,nullable:true,apply:q,themeable:true},opacity:{check:r,init:1,apply:f,themeable:true}},members:{__mo:null,__mp:0,__mq:null,__mn:null,__ml:null,__mm:null,__mr:null,__ms:0,__mt:null,_isPageRoot:false,_widget:null,__mu:function(e){var S=e.getData();

if(this.isContentBlocked()){this.getContentBlockerElement().setStyles({width:S.width,height:S.height});
}
if(this.isBlocked()){this.getBlockerElement().setStyles({width:S.width,height:S.height});
}},_applyColor:function(N,O){var P=qx.theme.manager.Color.getInstance().resolve(N);
this.__mv(g,P);
},_applyOpacity:function(T,U){this.__mv(B,T);
},__mv:function(E,F){var G=[];
this.__mo&&G.push(this.__mo);
this.__mq&&G.push(this.__mq);

for(var i=0;i<G.length;i++){G[i].setStyle(E,F);
}},_saveAndSetAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
this.__ms+=1;

if(this.__ms==1){this.__mr=this._widget.getAnonymous();
this._widget.setAnonymous(true);
}},_restoreAnonymousState:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,l);
this.__ms-=1;

if(this.__ms==0){this._widget.setAnonymous(this.__mr);
}},_backupActiveWidget:function(){var M=qx.event.Registration.getManager(window).getHandler(qx.event.handler.Focus);
this.__ml.push(M.getActive());
this.__mm.push(M.getFocus());

if(this._widget.isFocusable()){this._widget.focus();
}},_restoreActiveWidget:function(){var J=this.__ml.length;

if(J>0){var I=this.__ml[J-1];

if(I){qx.bom.Element.activate(I);
}this.__ml.pop();
}var H=this.__mm.length;

if(H>0){var I=this.__mm[H-1];

if(I){qx.bom.Element.focus(this.__mm[H-1]);
}this.__mm.pop();
}},__mw:function(){return new qx.html.Blocker(this.getColor(),this.getOpacity());
},_getBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,w);
return this.getBlockerElement();
},getBlockerElement:function(){if(!this.__mo){this.__mo=this.__mw();
this.__mo.setStyle(p,15);
this._widget.getContainerElement().add(this.__mo);
this.__mo.exclude();
}return this.__mo;
},block:function(){this.__mp++;

if(this.__mp<2){this._backupActiveWidget();
var V=this.getBlockerElement();
V.include();
V.activate();
V.addListener(m,this.__mB,this);
V.addListener(h,this.__mA,this);
V.addListener(n,this.__mA,this);
V.addListener(j,this.__mA,this);
}},isBlocked:function(){return this.__mp>0;
},unblock:function(){if(!this.isBlocked()){return;
}this.__mp--;

if(this.__mp<1){this.__mx();
}},forceUnblock:function(){if(!this.isBlocked()){return;
}this.__mp=0;
this.__mx();
},__mx:function(){this._restoreActiveWidget();
var a=this.getBlockerElement();
a.removeListener(m,this.__mB,this);
a.removeListener(h,this.__mA,this);
a.removeListener(n,this.__mA,this);
a.removeListener(j,this.__mA,this);
a.exclude();
},_getContentBlocker:function(){qx.log.Logger.deprecatedMethodWarning(arguments.callee,t);
return this.getContentBlockerElement();
},getContentBlockerElement:function(){if(!this.__mq){this.__mq=this.__mw();
this._widget.getContentElement().add(this.__mq);
this.__mq.exclude();
}return this.__mq;
},blockContent:function(Q){var R=this.getContentBlockerElement();
R.setStyle(p,Q);
this.__mn.push(Q);

if(this.__mn.length<2){R.include();

if(this._isPageRoot){if(!this.__mt){this.__mt=new qx.event.Timer(300);
this.__mt.addListener(A,this.__mz,this);
}this.__mt.start();
this.__mz();
}}},isContentBlocked:function(){return this.__mn.length>0;
},unblockContent:function(){if(!this.isContentBlocked()){return;
}this.__mn.pop();
var b=this.__mn[this.__mn.length-1];
var c=this.getContentBlockerElement();
c.setStyle(p,b);

if(this.__mn.length<1){this.__my();
}},forceUnblockContent:function(){if(!this.isContentBlocked()){return;
}this.__mn=[];
var d=this.getContentBlockerElement();
d.setStyle(p,null);
this.__my();
},__my:function(){this.getContentBlockerElement().exclude();

if(this._isPageRoot){this.__mt.stop();
}},__mz:function(){var K=this._widget.getContainerElement().getDomElement();
var L=qx.dom.Node.getDocument(K);
this.getContentBlockerElement().setStyles({height:L.documentElement.scrollHeight+o,width:L.documentElement.scrollWidth+o});
},__mA:function(e){if(e.getKeyIdentifier()==z){e.stop();
}},__mB:function(){this.getBlockerElement().activate();
}},destruct:function(){if(this._isPageRoot){this._widget.removeListener(k,this.__mu,this);
}this._disposeObjects(C,v,u);
this.__mr=this.__ml=this.__mm=this._widget=this.__mn=null;
}});
})();
(function(){var v="cursor",u="100%",t="dblclick",s="mshtml",r="mouseup",q="mousedown",p="disappear",o="appear",n="contextmenu",m="mousewheel",f=")",l="mouseover",i="mouseout",c="qx.html.Blocker",b="click",h="repeat",g="mousemove",j="url(",a="qx.client",k="qx/static/blank.gif",d="absolute";
qx.Class.define(c,{extend:qx.html.Element,construct:function(x,y){arguments.callee.base.call(this);
var x=x?qx.theme.manager.Color.getInstance().resolve(x):null;
this.setStyles({position:d,width:u,height:u,opacity:y||0,backgroundColor:x});
this.addListener(q,this._stopPropagation,this);
this.addListener(r,this._stopPropagation,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(t,this._stopPropagation,this);
this.addListener(g,this._stopPropagation,this);
this.addListener(l,this._stopPropagation,this);
this.addListener(i,this._stopPropagation,this);
this.addListener(m,this._stopPropagation,this);
this.addListener(n,this._stopPropagation,this);
if(qx.core.Variant.isSet(a,s)){this.setStyles({backgroundImage:j+qx.util.ResourceManager.getInstance().toUri(k)+f,backgroundRepeat:h});
}this.addListener(o,this.__mC,this);
this.addListener(p,this.__mC,this);
},members:{_stopPropagation:function(e){e.stopPropagation();
},__mC:function(){var w=this.getStyle(v);
this.setStyle(v,null,true);
this.setStyle(v,w,true);
}}});
})();
(function(){var b="qx.ui.form.INumberForm",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeValue":a},members:{setValue:function(c){return arguments.length==1;
},resetValue:function(){},getValue:function(){}}});
})();
(function(){var n="pressed",m="abandoned",l="Integer",k="hovered",j="qx.event.type.Event",i="Enter",h="Space",g="press",f="__jn",d="qx.ui.form.RepeatButton",a="release",c="interval",b="execute";
qx.Class.define(d,{extend:qx.ui.form.Button,construct:function(r,s){arguments.callee.base.call(this,r,s);
this.__jn=new qx.event.AcceleratingTimer();
this.__jn.addListener(c,this._onInterval,this);
},events:{"execute":j,"press":j,"release":j},properties:{interval:{check:l,init:100},firstInterval:{check:l,init:500},minTimer:{check:l,init:20},timerDecrease:{check:l,init:2}},members:{__jo:null,__jn:null,press:function(){if(this.isEnabled()){if(!this.hasState(n)){this.__jp();
}this.removeState(m);
this.addState(n);
}},release:function(o){if(!this.isEnabled()){return;
}if(this.hasState(n)){if(!this.__jo){this.execute();
}}this.removeState(n);
this.removeState(m);
this.__jq();
},_applyEnabled:function(p,q){arguments.callee.base.call(this,p,q);

if(!p){this.removeState(n);
this.removeState(m);
this.__jq();
}},_onMouseOver:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}
if(this.hasState(m)){this.removeState(m);
this.addState(n);
this.__jn.start();
}this.addState(k);
},_onMouseOut:function(e){if(!this.isEnabled()||e.getTarget()!==this){return;
}this.removeState(k);

if(this.hasState(n)){this.removeState(n);
this.addState(m);
this.__jn.stop();
}},_onMouseDown:function(e){if(!e.isLeftPressed()){return;
}this.capture();
this.__jp();
e.stopPropagation();
},_onMouseUp:function(e){this.releaseCapture();

if(!this.hasState(m)){this.addState(k);

if(this.hasState(n)&&!this.__jo){this.execute();
}}this.__jq();
e.stopPropagation();
},_onKeyUp:function(e){switch(e.getKeyIdentifier()){case i:case h:if(this.hasState(n)){if(!this.__jo){this.execute();
}this.removeState(n);
this.removeState(m);
e.stopPropagation();
this.__jq();
}}},_onKeyDown:function(e){switch(e.getKeyIdentifier()){case i:case h:this.removeState(m);
this.addState(n);
e.stopPropagation();
this.__jp();
}},_onInterval:function(e){this.__jo=true;
this.fireEvent(b);
},__jp:function(){this.fireEvent(g);
this.__jo=false;
this.__jn.set({interval:this.getInterval(),firstInterval:this.getFirstInterval(),minimum:this.getMinTimer(),decrease:this.getTimerDecrease()}).start();
this.removeState(m);
this.addState(n);
},__jq:function(){this.fireEvent(a);
this.__jn.stop();
this.removeState(m);
this.removeState(n);
}},destruct:function(){this._disposeObjects(f);
}});
})();
(function(){var a="qx.ui.layout.Grow";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(b,c){var g=this._getLayoutChildren();
var f,h,e,d;
for(var i=0,l=g.length;i<l;i++){f=g[i];
h=f.getSizeHint();
e=b;

if(e<h.minWidth){e=h.minWidth;
}else if(e>h.maxWidth){e=h.maxWidth;
}d=c;

if(d<h.minHeight){d=h.minHeight;
}else if(d>h.maxHeight){d=h.maxHeight;
}f.renderLayout(0,0,e,d);
}},_computeSizeHint:function(){var q=this._getLayoutChildren();
var o,s;
var r=0,p=0;
var n=0,k=0;
var j=Infinity,m=Infinity;
for(var i=0,l=q.length;i<l;i++){o=q[i];
s=o.getSizeHint();
r=Math.max(r,s.width);
p=Math.max(p,s.height);
n=Math.max(n,s.minWidth);
k=Math.max(k,s.minHeight);
j=Math.min(j,s.maxWidth);
m=Math.min(m,s.maxHeight);
}return {width:r,height:p,minWidth:n,minHeight:k,maxWidth:j,maxHeight:m};
}}});
})();
(function(){var b="qx.event.type.Data",a="qx.ui.form.IForm";
qx.Interface.define(a,{events:{"changeEnabled":b,"changeValid":b,"changeInvalidMessage":b,"changeRequired":b},members:{setEnabled:function(c){return arguments.length==1;
},getEnabled:function(){},setRequired:function(e){return arguments.length==1;
},getRequired:function(){},setValid:function(d){return arguments.length==1;
},getValid:function(){},setInvalidMessage:function(f){return arguments.length==1;
},getInvalidMessage:function(){}}});
})();
(function(){var a="qx.ui.form.IRange";
qx.Interface.define(a,{members:{setMinimum:function(b){return arguments.length==1;
},getMinimum:function(){},setMaximum:function(d){return arguments.length==1;
},getMaximum:function(){},setSingleStep:function(c){return arguments.length==1;
},getSingleStep:function(){},setPageStep:function(e){return arguments.length==1;
},getPageStep:function(){}}});
})();
(function(){var i="Boolean",h="invalid",g="qx.ui.form.MForm",f="_applyValid",e="",d="changeRequired",c="changeValid",b="changeInvalidMessage",a="String";
qx.Mixin.define(g,{properties:{valid:{check:i,init:true,apply:f,event:c},required:{check:i,init:false,event:d},invalidMessage:{check:a,init:e,event:b}},members:{_applyValid:function(j,k){j?this.removeState(h):this.addState(h);
}}});
})();
(function(){var be="knob",bd="horizontal",bc="vertical",bb="Integer",ba="hovered",Y="left",X="top",W="mouseup",V="pressed",U="px",bM="mousemove",bL="resize",bK="slider",bJ="mousedown",bI="PageUp",bH="mouseout",bG="changeValue",bF="Left",bE="Down",bD="Up",bl="dblclick",bm="qx.ui.form.Slider",bj="PageDown",bk="mousewheel",bh="interval",bi="_applyValue",bf="_applyKnobFactor",bg="End",bn="height",bo="width",bv="_applyOrientation",bt="Home",bx="mouseover",bw="floor",bz="_applyMinimum",by="click",bq="Right",bC="keypress",bB="ceil",bA="losecapture",bp="contextmenu",br="_applyMaximum",bs="Number",bu="typeof value==='number'&&value>=this.getMinimum()&&value<=this.getMaximum()";
qx.Class.define(bm,{extend:qx.ui.core.Widget,implement:[qx.ui.form.IForm,qx.ui.form.INumberForm,qx.ui.form.IRange],include:[qx.ui.form.MForm],construct:function(O){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas());
this.addListener(bC,this._onKeyPress);
this.addListener(bk,this._onMouseWheel);
this.addListener(bJ,this._onMouseDown);
this.addListener(W,this._onMouseUp);
this.addListener(bA,this._onMouseUp);
this.addListener(bL,this._onUpdate);
this.addListener(bp,this._onStopEvent);
this.addListener(by,this._onStopEvent);
this.addListener(bl,this._onStopEvent);
if(O!=null){this.setOrientation(O);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:bK},focusable:{refine:true,init:true},orientation:{check:[bd,bc],init:bd,apply:bv},value:{check:bu,init:0,apply:bi,event:bG,nullable:true},minimum:{check:bb,init:0,apply:bz},maximum:{check:bb,init:100,apply:br},singleStep:{check:bb,init:1},pageStep:{check:bb,init:10},knobFactor:{check:bs,apply:bf,nullable:true}},members:{__iW:null,__iX:null,__iY:null,__ja:null,__jb:null,__jc:null,__jd:null,__je:null,__jf:null,_forwardStates:{invalid:true},_createChildControlImpl:function(P){var Q;

switch(P){case be:Q=new qx.ui.core.Widget();
Q.addListener(bL,this._onUpdate,this);
Q.addListener(bx,this._onMouseOver);
Q.addListener(bH,this._onMouseOut);
this._add(Q);
break;
}return Q||arguments.callee.base.call(this,P);
},_onMouseOver:function(e){this.addState(ba);
},_onMouseOut:function(e){this.removeState(ba);
},_onMouseWheel:function(e){var R=e.getWheelDelta()>0?1:-1;
this.slideBy(R*this.getSingleStep());
e.stop();
},_onKeyPress:function(e){var bQ=this.getOrientation()===bd;
var bP=bQ?bF:bD;
var forward=bQ?bq:bE;

switch(e.getKeyIdentifier()){case forward:this.slideForward();
break;
case bP:this.slideBack();
break;
case bj:this.slidePageForward();
break;
case bI:this.slidePageBack();
break;
case bt:this.slideToBegin();
break;
case bg:this.slideToEnd();
break;
default:return;
}e.stop();
},_onMouseDown:function(e){if(this.__ja){return;
}var K=this.__jh;
var I=this.getChildControl(be);
var J=K?Y:X;
var M=K?e.getDocumentLeft():e.getDocumentTop();
var N=this.__iW=qx.bom.element.Location.get(this.getContentElement().getDomElement())[J];
var L=this.__iX=qx.bom.element.Location.get(I.getContainerElement().getDomElement())[J];

if(e.getTarget()===I){this.__ja=true;
this.__jb=M+N-L;
I.addState(V);
}else{this.__jc=true;
this.__jd=M<=L?-1:1;
this.__ji(e);
this._onInterval();
if(!this.__jf){this.__jf=new qx.event.Timer(100);
this.__jf.addListener(bh,this._onInterval,this);
}this.__jf.start();
}this.addListener(bM,this._onMouseMove);
this.capture();
e.stopPropagation();
},_onMouseUp:function(e){if(this.__ja){this.releaseCapture();
delete this.__ja;
delete this.__jb;
this.getChildControl(be).removeState(V);
if(e.getType()===W){var q;
var r;
var p;

if(this.__jh){q=e.getDocumentLeft()-(this._valueToPosition(this.getValue())+this.__iW);
p=qx.bom.element.Location.get(this.getContentElement().getDomElement())[X];
r=e.getDocumentTop()-(p+this.getChildControl(be).getBounds().top);
}else{q=e.getDocumentTop()-(this._valueToPosition(this.getValue())+this.__iW);
p=qx.bom.element.Location.get(this.getContentElement().getDomElement())[Y];
r=e.getDocumentLeft()-(p+this.getChildControl(be).getBounds().left);
}
if(r<0||r>this.__iY||q<0||q>this.__iY){this.getChildControl(be).removeState(ba);
}}}else if(this.__jc){this.__jf.stop();
this.releaseCapture();
delete this.__jc;
delete this.__jd;
delete this.__je;
}this.removeListener(bM,this._onMouseMove);
if(e.getType()===W){e.stopPropagation();
}},_onMouseMove:function(e){if(this.__ja){var bT=this.__jh?e.getDocumentLeft():e.getDocumentTop();
var bS=bT-this.__jb;
this.slideTo(this._positionToValue(bS));
}else if(this.__jc){this.__ji(e);
}e.stopPropagation();
},_onInterval:function(e){var n=this.getValue()+(this.__jd*this.getPageStep());
if(n<this.getMinimum()){n=this.getMinimum();
}else if(n>this.getMaximum()){n=this.getMaximum();
}var o=this.__jd==-1;

if((o&&n<=this.__je)||(!o&&n>=this.__je)){n=this.__je;
}this.slideTo(n);
},_onUpdate:function(e){var G=this.getInnerSize();
var H=this.getChildControl(be).getBounds();
var F=this.__jh?bo:bn;
this._updateKnobSize();
this.__jg=G[F]-H[F];
this.__iY=H[F];
this._updateKnobPosition();
},__jh:false,__jg:0,__ji:function(e){var a=this.__jh;
var i=a?e.getDocumentLeft():e.getDocumentTop();
var k=this.__iW;
var b=this.__iX;
var m=this.__iY;
var j=i-k;

if(i>=b){j-=m;
}var g=this._positionToValue(j);
var c=this.getMinimum();
var d=this.getMaximum();

if(g<c){g=c;
}else if(g>d){g=d;
}else{var h=this.getValue();
var f=this.getPageStep();
var l=this.__jd<0?bw:bB;
g=h+(Math[l]((g-h)/f)*f);
}if(this.__je==null||(this.__jd==-1&&g<=this.__je)||(this.__jd==1&&g>=this.__je)){this.__je=g;
}},_positionToValue:function(u){var v=this.__jg;
if(v==null||v==0){return 0;
}var x=u/v;

if(x<0){x=0;
}else if(x>1){x=1;
}var w=this.getMaximum()-this.getMinimum();
return this.getMinimum()+Math.round(w*x);
},_valueToPosition:function(bX){var bY=this.__jg;

if(bY==null){return 0;
}var ca=this.getMaximum()-this.getMinimum();
if(ca==0){return 0;
}var bX=bX-this.getMinimum();
var cb=bX/ca;

if(cb<0){cb=0;
}else if(cb>1){cb=1;
}return Math.round(bY*cb);
},_updateKnobPosition:function(){this._setKnobPosition(this._valueToPosition(this.getValue()));
},_setKnobPosition:function(S){var T=this.getChildControl(be).getContainerElement();

if(this.__jh){T.setStyle(Y,S+U,true);
}else{T.setStyle(X,S+U,true);
}},_updateKnobSize:function(){var bO=this.getKnobFactor();

if(bO==null){return;
}var bN=this.getInnerSize();

if(bN==null){return;
}if(this.__jh){this.getChildControl(be).setWidth(Math.round(bO*bN.width));
}else{this.getChildControl(be).setHeight(Math.round(bO*bN.height));
}},slideToBegin:function(){this.slideTo(this.getMinimum());
},slideToEnd:function(){this.slideTo(this.getMaximum());
},slideForward:function(){this.slideBy(this.getSingleStep());
},slideBack:function(){this.slideBy(-this.getSingleStep());
},slidePageForward:function(){this.slideBy(this.getPageStep());
},slidePageBack:function(){this.slideBy(-this.getPageStep());
},slideBy:function(bR){this.slideTo(this.getValue()+bR);
},slideTo:function(y){if(y<this.getMinimum()){y=this.getMinimum();
}else if(y>this.getMaximum()){y=this.getMaximum();
}else{y=this.getMinimum()+Math.round((y-this.getMinimum())/this.getSingleStep())*this.getSingleStep();
}this.setValue(y);
},_applyOrientation:function(bU,bV){var bW=this.getChildControl(be);
this.__jh=bU===bd;
if(this.__jh){this.removeState(bc);
bW.removeState(bc);
this.addState(bd);
bW.addState(bd);
bW.setLayoutProperties({top:0,right:null,bottom:0});
}else{this.removeState(bd);
bW.removeState(bd);
this.addState(bc);
bW.addState(bc);
bW.setLayoutProperties({right:0,bottom:null,left:0});
}this._updateKnobPosition();
},_applyKnobFactor:function(B,C){if(B!=null){this._updateKnobSize();
}else{if(this.__jh){this.getChildControl(be).resetWidth();
}else{this.getChildControl(be).resetHeight();
}}},_applyValue:function(z,A){if(z!=null){this._updateKnobPosition();
}else{this.resetValue();
}},_applyMinimum:function(s,t){if(this.getValue()<s){this.setValue(s);
}this._updateKnobPosition();
},_applyMaximum:function(D,E){if(this.getValue()>D){this.setValue(D);
}this._updateKnobPosition();
}}});
})();
(function(){var c="mousewheel",b="qx.ui.core.scroll.ScrollSlider",a="keypress";
qx.Class.define(b,{extend:qx.ui.form.Slider,construct:function(d){arguments.callee.base.call(this,d);
this.removeListener(a,this._onKeyPress);
this.removeListener(c,this._onMouseWheel);
}});
})();
(function(){var e="Integer",d="interval",c="__jM",b="qx.event.type.Event",a="qx.event.AcceleratingTimer";
qx.Class.define(a,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__jM=new qx.event.Timer(this.getInterval());
this.__jM.addListener(d,this._onInterval,this);
},events:{"interval":b},properties:{interval:{check:e,init:100},firstInterval:{check:e,init:500},minimum:{check:e,init:20},decrease:{check:e,init:2}},members:{__jM:null,__jN:null,start:function(){this.__jM.setInterval(this.getFirstInterval());
this.__jM.start();
},stop:function(){this.__jM.stop();
this.__jN=null;
},_onInterval:function(){this.__jM.stop();

if(this.__jN==null){this.__jN=this.getInterval();
}this.__jN=Math.max(this.getMinimum(),this.__jN-this.getDecrease());
this.__jM.setInterval(this.__jN);
this.__jM.start();
this.fireEvent(d);
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var H="resize",G="scrollY",F="update",E="scrollX",D="_applyScrollX",C="_applyScrollY",B="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxX()",A="appear",z="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getScrollMaxY()",w="qx.event.type.Event",u="qx.ui.core.scroll.ScrollPane",v="scroll";
qx.Class.define(u,{extend:qx.ui.core.Widget,construct:function(){arguments.callee.base.call(this);
this.set({minWidth:0,minHeight:0});
this._setLayout(new qx.ui.layout.Grow());
this.addListener(H,this._onUpdate);
var j=this.getContentElement();
j.addListener(v,this._onScroll,this);
j.addListener(A,this._onAppear,this);
},events:{update:w},properties:{scrollX:{check:B,apply:D,event:E,init:0},scrollY:{check:z,apply:C,event:G,init:0}},members:{add:function(s){var t=this._getChildren()[0];

if(t){this._remove(t);
t.removeListener(H,this._onUpdate,this);
}
if(s){this._add(s);
s.addListener(H,this._onUpdate,this);
}},remove:function(N){if(N){this._remove(N);
N.removeListener(H,this._onUpdate,this);
}},getChildren:function(){return this._getChildren();
},_onUpdate:function(e){this.fireEvent(F);
},_onScroll:function(e){var b=this.getContentElement();
this.setScrollX(b.getScrollX());
this.setScrollY(b.getScrollY());
},_onAppear:function(e){var n=this.getContentElement();
var k=this.getScrollX();
var l=n.getScrollX();

if(k!=l){n.scrollToX(k);
}var o=this.getScrollY();
var m=n.getScrollY();

if(o!=m){n.scrollToY(o);
}},getItemTop:function(i){var top=0;

do{top+=i.getBounds().top;
i=i.getLayoutParent();
}while(i&&i!==this);
return top;
},getItemBottom:function(f){return this.getItemTop(f)+f.getBounds().height;
},getItemLeft:function(c){var d=0;
var parent;

do{d+=c.getBounds().left;
parent=c.getLayoutParent();

if(parent){d+=parent.getInsets().left;
}c=parent;
}while(c&&c!==this);
return d;
},getItemRight:function(M){return this.getItemLeft(M)+M.getBounds().width;
},getScrollSize:function(){return this.getChildren()[0].getBounds();
},getScrollMaxX:function(){var h=this.getInnerSize();
var g=this.getScrollSize();

if(h&&g){return Math.max(0,g.width-h.width);
}return 0;
},getScrollMaxY:function(){var r=this.getInnerSize();
var q=this.getScrollSize();

if(r&&q){return Math.max(0,q.height-r.height);
}return 0;
},scrollToX:function(I){var J=this.getScrollMaxX();

if(I<0){I=0;
}else if(I>J){I=J;
}this.setScrollX(I);
},scrollToY:function(K){var L=this.getScrollMaxY();

if(K<0){K=0;
}else if(K>L){K=L;
}this.setScrollY(K);
},scrollByX:function(x){this.scrollToX(this.getScrollX()+x);
},scrollByY:function(y){this.scrollToY(this.getScrollY()+y);
},_applyScrollX:function(p){this.getContentElement().scrollToX(p);
},_applyScrollY:function(a){this.getContentElement().scrollToY(a);
}}});
})();
(function(){var b="qx.ui.core.scroll.IScrollBar",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"scroll":a},properties:{orientation:{},maximum:{},position:{},knobFactor:{}},members:{scrollTo:function(d){this.assertNumber(d);
},scrollBy:function(e){this.assertNumber(e);
},scrollBySteps:function(c){this.assertNumber(c);
}}});
})();
(function(){var k="horizontal",j="px",i="scroll",h="vertical",g="-1px",f="qx.client",d="0",c="hidden",b="mousedown",a="qx.ui.core.scroll.NativeScrollBar",z="PositiveNumber",y="Integer",x="mousemove",w="_applyMaximum",v="_applyOrientation",u="appear",t="opera",s="PositiveInteger",r="mshtml",q="mouseup",o="Number",p="_applyPosition",m="scrollbar",n="__iU",l="native";
qx.Class.define(a,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(B){arguments.callee.base.call(this);
this.addState(l);
this.getContentElement().addListener(i,this._onScroll,this);
this.addListener(b,this._stopPropagation,this);
this.addListener(q,this._stopPropagation,this);
this.addListener(x,this._stopPropagation,this);

if(qx.core.Variant.isSet(f,t)){this.addListener(u,this._onAppear,this);
}this.getContentElement().add(this._getScrollPaneElement());
if(B!=null){this.setOrientation(B);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:m},orientation:{check:[k,h],init:k,apply:v},maximum:{check:s,apply:w,init:100},position:{check:o,init:0,apply:p,event:i},singleStep:{check:y,init:20},knobFactor:{check:z,nullable:true}},members:{__iT:null,__iU:null,_getScrollPaneElement:function(){if(!this.__iU){this.__iU=new qx.html.Element();
}return this.__iU;
},renderLayout:function(N,top,O,P){var Q=arguments.callee.base.call(this,N,top,O,P);
this._updateScrollBar();
return Q;
},_getContentHint:function(){var E=qx.bom.element.Overflow.getScrollbarWidth();
return {width:this.__iT?100:E,maxWidth:this.__iT?null:E,minWidth:this.__iT?null:E,height:this.__iT?E:100,maxHeight:this.__iT?E:null,minHeight:this.__iT?E:null};
},_applyEnabled:function(L,M){arguments.callee.base.call(this,L,M);
this._updateScrollBar();
},_applyMaximum:function(A){this._updateScrollBar();
},_applyPosition:function(F){var content=this.getContentElement();

if(this.__iT){content.scrollToX(F);
}else{content.scrollToY(F);
}},_applyOrientation:function(G,H){var I=this.__iT=G===k;
this.set({allowGrowX:I,allowShrinkX:I,allowGrowY:!I,allowShrinkY:!I});

if(I){this.replaceState(h,k);
}else{this.replaceState(k,h);
}this.getContentElement().setStyles({overflowX:I?i:c,overflowY:I?c:i});
qx.ui.core.queue.Layout.add(this);
},_updateScrollBar:function(){var T=this.__iT;
var U=this.getBounds();

if(!U){return;
}
if(this.isEnabled()){var V=T?U.width:U.height;
var S=this.getMaximum()+V;
}else{S=0;
}if(qx.core.Variant.isSet(f,r)){var U=this.getBounds();
this.getContentElement().setStyles({left:T?d:g,top:T?g:d,width:(T?U.width:U.width+1)+j,height:(T?U.height+1:U.height)+j});
}this._getScrollPaneElement().setStyles({left:0,top:0,width:(T?S:1)+j,height:(T?1:S)+j});
this.scrollTo(this.getPosition());
},scrollTo:function(W){this.setPosition(Math.max(0,Math.min(this.getMaximum(),W)));
},scrollBy:function(R){this.scrollTo(this.getPosition()+R);
},scrollBySteps:function(J){var K=this.getSingleStep();
this.scrollBy(J*K);
},_onScroll:function(e){var D=this.getContentElement();
var C=this.__iT?D.getScrollX():D.getScrollY();
this.setPosition(C);
},_onAppear:function(e){this.scrollTo(this.getPosition());
},_stopPropagation:function(e){e.stopPropagation();
}},destruct:function(){this._disposeObjects(n);
}});
})();
(function(){var l="slider",k="horizontal",j="button-begin",i="vertical",h="button-end",g="Integer",f="execute",d="right",c="left",b="down",A="up",z="PositiveNumber",y="changeValue",x="qx.lang.Type.isNumber(value)&&value>=0&&value<=this.getMaximum()",w="_applyKnobFactor",v="knob",u="qx.ui.core.scroll.ScrollBar",t="resize",s="_applyOrientation",r="_applyPageStep",p="PositiveInteger",q="scroll",n="_applyPosition",o="scrollbar",m="_applyMaximum";
qx.Class.define(u,{extend:qx.ui.core.Widget,implement:qx.ui.core.scroll.IScrollBar,construct:function(G){arguments.callee.base.call(this);
this._createChildControl(j);
this._createChildControl(l).addListener(t,this._onResizeSlider,this);
this._createChildControl(h);
if(G!=null){this.setOrientation(G);
}else{this.initOrientation();
}},properties:{appearance:{refine:true,init:o},orientation:{check:[k,i],init:k,apply:s},maximum:{check:p,apply:m,init:100},position:{check:x,init:0,apply:n,event:q},singleStep:{check:g,init:20},pageStep:{check:g,init:10,apply:r},knobFactor:{check:z,apply:w,nullable:true}},members:{__iV:2,_createChildControlImpl:function(P){var Q;

switch(P){case l:Q=new qx.ui.core.scroll.ScrollSlider();
Q.setPageStep(100);
Q.setFocusable(false);
Q.addListener(y,this._onChangeSliderValue,this);
this._add(Q,{flex:1});
break;
case j:Q=new qx.ui.form.RepeatButton();
Q.setFocusable(false);
Q.addListener(f,this._onExecuteBegin,this);
this._add(Q);
break;
case h:Q=new qx.ui.form.RepeatButton();
Q.setFocusable(false);
Q.addListener(f,this._onExecuteEnd,this);
this._add(Q);
break;
}return Q||arguments.callee.base.call(this,P);
},_applyMaximum:function(K){this.getChildControl(l).setMaximum(K);
},_applyPosition:function(J){this.getChildControl(l).setValue(J);
},_applyKnobFactor:function(B){this.getChildControl(l).setKnobFactor(B);
},_applyPageStep:function(F){this.getChildControl(l).setPageStep(F);
},_applyOrientation:function(C,D){var E=this._getLayout();

if(E){E.dispose();
}if(C===k){this._setLayout(new qx.ui.layout.HBox());
this.setAllowStretchX(true);
this.setAllowStretchY(false);
this.replaceState(i,k);
this.getChildControl(j).replaceState(A,c);
this.getChildControl(h).replaceState(b,d);
}else{this._setLayout(new qx.ui.layout.VBox());
this.setAllowStretchX(false);
this.setAllowStretchY(true);
this.replaceState(k,i);
this.getChildControl(j).replaceState(c,A);
this.getChildControl(h).replaceState(d,b);
}this.getChildControl(l).setOrientation(C);
},scrollTo:function(a){this.getChildControl(l).slideTo(a);
},scrollBy:function(R){this.getChildControl(l).slideBy(R);
},scrollBySteps:function(H){var I=this.getSingleStep();
this.getChildControl(l).slideBy(H*I);
},_onExecuteBegin:function(e){this.scrollBy(-this.getSingleStep());
},_onExecuteEnd:function(e){this.scrollBy(this.getSingleStep());
},_onChangeSliderValue:function(e){this.setPosition(e.getData());
},_onResizeSlider:function(e){var L=this.getChildControl(l).getChildControl(v);
var O=L.getSizeHint();
var M=false;
var N=this.getChildControl(l).getInnerSize();

if(this.getOrientation()==i){if(N.height<O.minHeight+this.__iV){M=true;
}}else{if(N.width<O.minWidth+this.__iV){M=true;
}}
if(M){L.exclude();
}else{L.show();
}}}});
})();
(function(){var b="qx.nativeScrollBars",a="qx.ui.core.scroll.MScrollBarFactory";
qx.core.Setting.define(b,false);
qx.Mixin.define(a,{members:{_createScrollBar:function(c){if(qx.core.Setting.get(b)){return new qx.ui.core.scroll.NativeScrollBar(c);
}else{return new qx.ui.core.scroll.ScrollBar(c);
}}}});
})();
(function(){var n="atom",m="Integer",l="String",k="_applyRich",j="qx.ui.tooltip.ToolTip",i="_applyIcon",h="tooltip",g="qx.ui.core.Widget",f="mouseover",d="Boolean",c="_applyLabel";
qx.Class.define(j,{extend:qx.ui.popup.Popup,construct:function(r,s){arguments.callee.base.call(this);
this.setLayout(new qx.ui.layout.Grow);
this._createChildControl(n);
if(r!=null){this.setLabel(r);
}
if(s!=null){this.setIcon(s);
}this.addListener(f,this._onMouseOver,this);
},properties:{appearance:{refine:true,init:h},showTimeout:{check:m,init:700,themeable:true},hideTimeout:{check:m,init:4000,themeable:true},label:{check:l,nullable:true,apply:c},icon:{check:l,nullable:true,apply:i,themeable:true},rich:{check:d,init:false,apply:k},opener:{check:g,nullable:true}},members:{_createChildControlImpl:function(a){var b;

switch(a){case n:b=new qx.ui.basic.Atom;
this._add(b);
break;
}return b||arguments.callee.base.call(this,a);
},_onMouseOver:function(e){this.hide();
},_applyIcon:function(t,u){var v=this.getChildControl(n);
t==null?v.resetIcon:v.setIcon(t);
},_applyLabel:function(w,x){var y=this.getChildControl(n);
w==null?y.resetLabel():y.setLabel(w);
},_applyRich:function(o,p){var q=this.getChildControl(n);
q.setRich(o);
}}});
})();
(function(){var bV="one",bU="single",bT="selected",bS="additive",bR="multi",bQ="PageUp",bP="under",bO="Left",bN="lead",bM="Down",cu="Up",ct="Boolean",cs="PageDown",cr="anchor",cq="End",cp="Home",co="Right",cn="right",cm="click",cl="above",cd="left",ce="Escape",cb="A",cc="Space",bY="_applyMode",ca="interval",bW="changeSelection",bX="qx.event.type.Data",cf="quick",cg="key",ci="__iv",ch="abstract",ck="drag",cj="qx.ui.core.selection.Abstract";
qx.Class.define(cj,{type:ch,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__is={};
},events:{"changeSelection":bX},properties:{mode:{check:[bU,bR,bS,bV],init:bU,apply:bY},drag:{check:ct,init:false},quick:{check:ct,init:false}},members:{__it:0,__iu:0,__iv:null,__iw:null,__ix:null,__iy:null,__iz:null,__iA:null,__iB:null,__iC:null,__iD:null,__iE:null,__iF:null,__iG:null,__iH:null,__iI:null,__iJ:null,__is:null,__iK:null,__iL:null,getSelectionContext:function(){return this.__iI;
},selectAll:function(){var N=this.getMode();

if(N==bU||N==bV){throw new Error("Can not select all items in selection mode: "+N);
}this._selectAllItems();
this._fireChange();
},selectItem:function(bt){this._setSelectedItem(bt);
var bu=this.getMode();

if(bu!==bU&&bu!==bV){this._setLeadItem(bt);
this._setAnchorItem(bt);
}this._scrollItemIntoView(bt);
this._fireChange();
},addItem:function(z){var A=this.getMode();

if(A===bU||A===bV){this._setSelectedItem(z);
}else{if(!this._getAnchorItem()){this._setAnchorItem(z);
}this._setLeadItem(z);
this._addToSelection(z);
}this._scrollItemIntoView(z);
this._fireChange();
},removeItem:function(bA){this._removeFromSelection(bA);

if(this.getMode()===bV&&this.isSelectionEmpty()){var bB=this._getFirstSelectable();

if(bB){this.addItem(bB);
}if(bB==bA){return;
}}
if(this.getLeadItem()==bA){this._setLeadItem(null);
}
if(this._getAnchorItem()==bA){this._setAnchorItem(null);
}this._fireChange();
},selectItemRange:function(B,C){var D=this.getMode();

if(D==bU||D==bV){throw new Error("Can not select multiple items in selection mode: "+D);
}this._selectItemRange(B,C);
this._setAnchorItem(B);
this._setLeadItem(C);
this._scrollItemIntoView(C);
this._fireChange();
},clearSelection:function(){if(this.getMode()==bV){return;
}this._clearSelection();
this._setLeadItem(null);
this._setAnchorItem(null);
this._fireChange();
},replaceSelection:function(cQ){var cR=this.getMode();

if(cR==bV||cR===bU){if(cQ.length>1){throw new Error("Could not select more than one items in mode: "+cR+"!");
}
if(cQ.length==1){this.selectItem(cQ[0]);
}else{this.clearSelection();
}return;
}else{this._replaceMultiSelection(cQ);
}},getSelectedItem:function(){var W=this.getMode();

if(W===bU||W===bV){return this._getSelectedItem()||null;
}throw new Error("The method getSelectedItem() is only supported in 'single' and 'one' selection mode!");
},getSelection:function(){return qx.lang.Object.getValues(this.__is);
},getSortedSelection:function(){var H=this.getSelectables();
var G=qx.lang.Object.getValues(this.__is);
G.sort(function(a,b){return H.indexOf(a)-H.indexOf(b);
});
return G;
},isItemSelected:function(bo){var bp=this._selectableToHashCode(bo);
return this.__is[bp]!==undefined;
},isSelectionEmpty:function(){return qx.lang.Object.isEmpty(this.__is);
},invertSelection:function(){var y=this.getMode();

if(y===bU||y===bV){throw new Error("The method invertSelection() is only supported in 'multi' and 'additive' selection mode!");
}var x=this.getSelectables();

for(var i=0;i<x.length;i++){this._toggleInSelection(x[i]);
}this._fireChange();
},_setLeadItem:function(cT){var cU=this.__iJ;

if(cU!==null){this._styleSelectable(cU,bN,false);
}
if(cT!==null){this._styleSelectable(cT,bN,true);
}this.__iJ=cT;
},_getLeadItem:function(){{};
return this.getLeadItem();
},getLeadItem:function(){return this.__iJ!==null?this.__iJ:null;
},_setAnchorItem:function(bw){var bx=this.__iK;

if(bx){this._styleSelectable(bx,cr,false);
}
if(bw){this._styleSelectable(bw,cr,true);
}this.__iK=bw;
},_getAnchorItem:function(){return this.__iK!==null?this.__iK:null;
},_isSelectable:function(O){throw new Error("Abstract method call: _isSelectable()");
},_getSelectableFromMouseEvent:function(event){var bL=event.getTarget();
return this._isSelectable(bL)?bL:null;
},_selectableToHashCode:function(P){throw new Error("Abstract method call: _selectableToHashCode()");
},_styleSelectable:function(cv,cw,cx){throw new Error("Abstract method call: _styleSelectable()");
},_capture:function(){throw new Error("Abstract method call: _capture()");
},_releaseCapture:function(){throw new Error("Abstract method call: _releaseCapture()");
},_getLocation:function(){throw new Error("Abstract method call: _getLocation()");
},_getDimension:function(){throw new Error("Abstract method call: _getDimension()");
},_getSelectableLocationX:function(br){throw new Error("Abstract method call: _getSelectableLocationX()");
},_getSelectableLocationY:function(bv){throw new Error("Abstract method call: _getSelectableLocationY()");
},_getScroll:function(){throw new Error("Abstract method call: _getScroll()");
},_scrollBy:function(cV,cW){throw new Error("Abstract method call: _scrollBy()");
},_scrollItemIntoView:function(bs){throw new Error("Abstract method call: _scrollItemIntoView()");
},getSelectables:function(){throw new Error("Abstract method call: getSelectables()");
},_getSelectableRange:function(U,V){throw new Error("Abstract method call: _getSelectableRange()");
},_getFirstSelectable:function(){throw new Error("Abstract method call: _getFirstSelectable()");
},_getLastSelectable:function(){throw new Error("Abstract method call: _getLastSelectable()");
},_getRelatedSelectable:function(E,F){throw new Error("Abstract method call: _getRelatedSelectable()");
},_getPage:function(bJ,bK){throw new Error("Abstract method call: _getPage()");
},_applyMode:function(cy,cz){this._setLeadItem(null);
this._setAnchorItem(null);
this._clearSelection();
if(cy===bV){var cA=this._getFirstSelectable();

if(cA){this._setSelectedItem(cA);
this._scrollItemIntoView(cA);
}}this._fireChange();
},handleMouseOver:function(event){if(!this.getQuick()){return;
}var bn=this.getMode();

if(bn!==bV&&bn!==bU){return;
}var bm=this._getSelectableFromMouseEvent(event);

if(bm===null){return;
}this._setSelectedItem(bm);
this._fireChange(cf);
},handleMouseDown:function(event){var bg=this._getSelectableFromMouseEvent(event);

if(bg===null){return;
}var bi=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var bf=event.isShiftPressed();
if(this.isItemSelected(bg)&&!bf&&!bi&&!this.getDrag()){this.__iL=bg;
return;
}else{this.__iL=null;
}this._scrollItemIntoView(bg);
switch(this.getMode()){case bU:case bV:this._setSelectedItem(bg);
break;
case bS:this._setLeadItem(bg);
this._setAnchorItem(bg);
this._toggleInSelection(bg);
break;
case bR:this._setLeadItem(bg);
if(bf){var bh=this._getAnchorItem();

if(bh===null){bh=this._getFirstSelectable();
this._setAnchorItem(bh);
}this._selectItemRange(bh,bg,bi);
}else if(bi){this._setAnchorItem(bg);
this._toggleInSelection(bg);
}else{this._setAnchorItem(bg);
this._setSelectedItem(bg);
}break;
}var bj=this.getMode();

if(this.getDrag()&&bj!==bU&&bj!==bV&&!bf&&!bi){this.__iz=this._getLocation();
this.__iw=this._getScroll();
this.__iA=event.getDocumentLeft()+this.__iw.left;
this.__iB=event.getDocumentTop()+this.__iw.top;
this.__iC=true;
this._capture();
}this._fireChange(cm);
},handleMouseUp:function(event){var T=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var Q=event.isShiftPressed();

if(!T&&!Q&&this.__iL){var R=this._getSelectableFromMouseEvent(event);

if(R===null||!this.isItemSelected(R)){return;
}var S=this.getMode();

if(S===bS){this._removeFromSelection(R);
}else{this._setSelectedItem(R);

if(this.getMode()===bR){this._setLeadItem(R);
this._setAnchorItem(R);
}}}this._cleanup();
},handleLoseCapture:function(event){this._cleanup();
},handleMouseMove:function(event){if(!this.__iC){return;
}this.__iD=event.getDocumentLeft();
this.__iE=event.getDocumentTop();
var bz=this.__iD+this.__iw.left;

if(bz>this.__iA){this.__iF=1;
}else if(bz<this.__iA){this.__iF=-1;
}else{this.__iF=0;
}var by=this.__iE+this.__iw.top;

if(by>this.__iB){this.__iG=1;
}else if(by<this.__iB){this.__iG=-1;
}else{this.__iG=0;
}var location=this.__iz;

if(this.__iD<location.left){this.__it=this.__iD-location.left;
}else if(this.__iD>location.right){this.__it=this.__iD-location.right;
}else{this.__it=0;
}
if(this.__iE<location.top){this.__iu=this.__iE-location.top;
}else if(this.__iE>location.bottom){this.__iu=this.__iE-location.bottom;
}else{this.__iu=0;
}if(!this.__iv){this.__iv=new qx.event.Timer(100);
this.__iv.addListener(ca,this._onInterval,this);
}this.__iv.start();
this._autoSelect();
event.stopPropagation();
},handleAddItem:function(e){var ba=e.getData();

if(this.getMode()===bV&&this.isSelectionEmpty()){this.addItem(ba);
}},handleRemoveItem:function(e){this.removeItem(e.getData());
},_cleanup:function(){if(!this.getDrag()&&this.__iC){return;
}if(this.__iH){this._fireChange(cm);
}delete this.__iC;
delete this.__ix;
delete this.__iy;
this._releaseCapture();
if(this.__iv){this.__iv.stop();
}},_onInterval:function(e){this._scrollBy(this.__it,this.__iu);
this.__iw=this._getScroll();
this._autoSelect();
},_autoSelect:function(){var cM=this._getDimension();
var cF=Math.max(0,Math.min(this.__iD-this.__iz.left,cM.width))+this.__iw.left;
var cE=Math.max(0,Math.min(this.__iE-this.__iz.top,cM.height))+this.__iw.top;
if(this.__ix===cF&&this.__iy===cE){return;
}this.__ix=cF;
this.__iy=cE;
var cO=this._getAnchorItem();
var cH=cO;
var cK=this.__iF;
var cN,cG;

while(cK!==0){cN=cK>0?this._getRelatedSelectable(cH,cn):this._getRelatedSelectable(cH,cd);
if(cN!==null){cG=this._getSelectableLocationX(cN);
if((cK>0&&cG.left<=cF)||(cK<0&&cG.right>=cF)){cH=cN;
continue;
}}break;
}var cL=this.__iG;
var cJ,cI;

while(cL!==0){cJ=cL>0?this._getRelatedSelectable(cH,bP):this._getRelatedSelectable(cH,cl);
if(cJ!==null){cI=this._getSelectableLocationY(cJ);
if((cL>0&&cI.top<=cE)||(cL<0&&cI.bottom>=cE)){cH=cJ;
continue;
}}break;
}var cP=this.getMode();

if(cP===bR){this._selectItemRange(cO,cH);
}else if(cP===bS){if(this.isItemSelected(cO)){this._selectItemRange(cO,cH,true);
}else{this._deselectItemRange(cO,cH);
}this._setAnchorItem(cH);
}this._fireChange(ck);
},__iM:{Home:1,Down:1,Right:1,PageDown:1,End:1,Up:1,Left:1,PageUp:1},handleKeyPress:function(event){var j,h;
var m=event.getKeyIdentifier();
var k=this.getMode();
var d=event.isCtrlPressed()||(qx.bom.client.Platform.MAC&&event.isMetaPressed());
var f=event.isShiftPressed();
var g=false;

if(m===cb&&d){if(k!==bU&&k!==bV){this._selectAllItems();
g=true;
}}else if(m===ce){if(k!==bU&&k!==bV){this._clearSelection();
g=true;
}}else if(m===cc){var c=this.getLeadItem();

if(c&&!f){if(d||k===bS){this._toggleInSelection(c);
}else{this._setSelectedItem(c);
}g=true;
}}else if(this.__iM[m]){g=true;

if(k===bU||k==bV){j=this._getSelectedItem();
}else{j=this.getLeadItem();
}
if(j!==null){switch(m){case cp:h=this._getFirstSelectable();
break;
case cq:h=this._getLastSelectable();
break;
case cu:h=this._getRelatedSelectable(j,cl);
break;
case bM:h=this._getRelatedSelectable(j,bP);
break;
case bO:h=this._getRelatedSelectable(j,cd);
break;
case co:h=this._getRelatedSelectable(j,cn);
break;
case bQ:h=this._getPage(j,true);
break;
case cs:h=this._getPage(j,false);
break;
}}else{switch(m){case cp:case bM:case co:case cs:h=this._getFirstSelectable();
break;
case cq:case cu:case bO:case bQ:h=this._getLastSelectable();
break;
}}if(h!==null){switch(k){case bU:case bV:this._setSelectedItem(h);
break;
case bS:this._setLeadItem(h);
break;
case bR:if(f){var n=this._getAnchorItem();

if(n===null){this._setAnchorItem(n=this._getFirstSelectable());
}this._setLeadItem(h);
this._selectItemRange(n,h,d);
}else{this._setAnchorItem(h);
this._setLeadItem(h);

if(!d){this._setSelectedItem(h);
}}break;
}this._scrollItemIntoView(h);
}}
if(g){event.stop();
this._fireChange(cg);
}},_selectAllItems:function(){var be=this.getSelectables();

for(var i=0,l=be.length;i<l;i++){this._addToSelection(be[i]);
}},_clearSelection:function(){var X=this.__is;

for(var Y in X){this._removeFromSelection(X[Y]);
}this.__is={};
},_selectItemRange:function(o,p,q){var t=this._getSelectableRange(o,p);
if(!q){var s=this.__is;
var u=this.__iN(t);

for(var r in s){if(!u[r]){this._removeFromSelection(s[r]);
}}}for(var i=0,l=t.length;i<l;i++){this._addToSelection(t[i]);
}},_deselectItemRange:function(bb,bc){var bd=this._getSelectableRange(bb,bc);

for(var i=0,l=bd.length;i<l;i++){this._removeFromSelection(bd[i]);
}},__iN:function(cB){var cD={};
var cC;

for(var i=0,l=cB.length;i<l;i++){cC=cB[i];
cD[this._selectableToHashCode(cC)]=cC;
}return cD;
},_getSelectedItem:function(){for(var bq in this.__is){return this.__is[bq];
}return null;
},_setSelectedItem:function(I){if(this._isSelectable(I)){var J=this.__is;
var K=this._selectableToHashCode(I);

if(!J[K]||qx.lang.Object.hasMinLength(J,2)){this._clearSelection();
this._addToSelection(I);
}}},_addToSelection:function(L){var M=this._selectableToHashCode(L);

if(!this.__is[M]&&this._isSelectable(L)){this.__is[M]=L;
this._styleSelectable(L,bT,true);
this.__iH=true;
}},_toggleInSelection:function(v){var w=this._selectableToHashCode(v);

if(!this.__is[w]){this.__is[w]=v;
this._styleSelectable(v,bT,true);
}else{delete this.__is[w];
this._styleSelectable(v,bT,false);
}this.__iH=true;
},_removeFromSelection:function(bk){var bl=this._selectableToHashCode(bk);

if(this.__is[bl]!=null){delete this.__is[bl];
this._styleSelectable(bk,bT,false);
this.__iH=true;
}},_replaceMultiSelection:function(bC){var bF=false;
var bI,bH;
var bD={};

for(var i=0,l=bC.length;i<l;i++){bI=bC[i];

if(this._isSelectable(bI)){bH=this._selectableToHashCode(bI);
bD[bH]=bI;
}}var bE=bI;
var bG=this.__is;

for(var bH in bG){if(bD[bH]){delete bD[bH];
}else{bI=bG[bH];
delete bG[bH];
this._styleSelectable(bI,bT,false);
bF=true;
}}for(var bH in bD){bI=bG[bH]=bD[bH];
this._styleSelectable(bI,bT,true);
bF=true;
}if(!bF){return false;
}this._scrollItemIntoView(bE);
this._setLeadItem(null);
this._setAnchorItem(null);
this.__iH=true;
this._fireChange();
},_fireChange:function(cS){if(this.__iH){this.__iI=cS||null;
this.fireDataEvent(bW,this.getSelection());
delete this.__iH;
}}},destruct:function(){this._disposeObjects(ci);
this.__is=this.__iL=this.__iK=null;
this.__iJ=null;
}});
})();
(function(){var J="vertical",I="under",H="above",G="qx.ui.core.selection.Widget",F="left",E="right";
qx.Class.define(G,{extend:qx.ui.core.selection.Abstract,construct:function(C){arguments.callee.base.call(this);
this.__iO=C;
},members:{__iO:null,_isSelectable:function(r){return r.isEnabled()&&r.isVisible()&&r.getLayoutParent()===this.__iO;
},_selectableToHashCode:function(K){return K.$$hash;
},_styleSelectable:function(g,h,j){j?g.addState(h):g.removeState(h);
},_capture:function(){this.__iO.capture();
},_releaseCapture:function(){this.__iO.releaseCapture();
},_getWidget:function(){return this.__iO;
},_getLocation:function(){var s=this.__iO.getContentElement().getDomElement();
return s?qx.bom.element.Location.get(s):null;
},_getDimension:function(){return this.__iO.getInnerSize();
},_getSelectableLocationX:function(L){var M=L.getBounds();

if(M){return {left:M.left,right:M.left+M.width};
}},_getSelectableLocationY:function(N){var O=N.getBounds();

if(O){return {top:O.top,bottom:O.top+O.height};
}},_getScroll:function(){return {left:0,top:0};
},_scrollBy:function(A,B){},_scrollItemIntoView:function(D){this.__iO.scrollChildIntoView(D);
},getSelectables:function(){var e=this.__iO.getChildren();
var f=[];
var d;

for(var i=0,l=e.length;i<l;i++){d=e[i];

if(d.isEnabled()&&d.isVisible()){f.push(d);
}}return f;
},_getSelectableRange:function(u,v){if(u===v){return [u];
}var z=this.__iO.getChildren();
var w=[];
var y=false;
var x;

for(var i=0,l=z.length;i<l;i++){x=z[i];

if(x===u||x===v){if(y){w.push(x);
break;
}else{y=true;
}}
if(y&&x.isEnabled()&&x.isVisible()){w.push(x);
}}return w;
},_getFirstSelectable:function(){var a=this.__iO.getChildren();

for(var i=0,l=a.length;i<l;i++){if(a[i].isEnabled()&&a[i].isVisible()){return a[i];
}}return null;
},_getLastSelectable:function(){var t=this.__iO.getChildren();

for(var i=t.length-1;i>0;i--){if(t[i].isEnabled()&&t[i].isVisible()){return t[i];
}}return null;
},_getRelatedSelectable:function(k,m){var p=this.__iO.getOrientation()===J;
var o=this.__iO.getChildren();
var n=o.indexOf(k);
var q;

if((p&&m===H)||(!p&&m===F)){for(var i=n-1;i>=0;i--){q=o[i];

if(q.isEnabled()&&q.isVisible()){return q;
}}}else if((p&&m===I)||(!p&&m===E)){for(var i=n+1;i<o.length;i++){q=o[i];

if(q.isEnabled()&&q.isVisible()){return q;
}}}return null;
},_getPage:function(b,c){if(c){return this._getFirstSelectable();
}else{return this._getLastSelectable();
}}},destruct:function(){this.__iO=null;
}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(i,j,name){this.fireDataEvent(c,{value:i,name:name,old:j});
this._registerEventChaining(i,j,name);
},_registerEventChaining:function(k,l,name){if((k instanceof qx.core.Object)&&qx.Class.hasMixin(k.constructor,qx.data.marshal.MEventBubbling)){var m=qx.lang.Function.bind(this.__kf,this,name);
var n=k.addListener(c,m,this);
k.setUserData(d,n);
}if(l!=null&&l.getUserData&&l.getUserData(d)!=null){l.removeListenerById(l.getUserData(d));
}},__kf:function(name,e){var v=e.getData();
var r=v.value;
var p=v.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(v.name.indexOf){var u=v.name.indexOf(f)!=-1?v.name.indexOf(f):v.name.length;
var s=v.name.indexOf(h)!=-1?v.name.indexOf(h):v.name.length;

if(u<s){var o=v.name.substring(0,u);
var t=v.name.substring(u+1,v.name.length);

if(t[0]!=h){t=f+t;
}var q=name+h+o+g+t;
}else if(s<u){var o=v.name.substring(0,s);
var t=v.name.substring(s,v.name.length);
var q=name+h+o+g+t;
}else{var q=name+h+v.name+g;
}}else{var q=name+h+v.name+g;
}}else{var q=name+f+v.name;
}this.fireDataEvent(c,{value:r,name:q,old:p});
}}});
})();
(function(){var a="qx.ui.form.IModelSelection";
qx.Interface.define(a,{members:{setModelSelection:function(b){},getModelSelection:function(){}}});
})();
(function(){var a="qx.ui.core.selection.ScrollArea";
qx.Class.define(a,{extend:qx.ui.core.selection.Widget,members:{_isSelectable:function(s){return (s.isEnabled()&&s.isVisible()&&s.getLayoutParent()===this._getWidget().getChildrenContainer());
},_getDimension:function(){return this._getWidget().getPaneSize();
},_getScroll:function(){var r=this._getWidget();
return {left:r.getScrollX(),top:r.getScrollY()};
},_scrollBy:function(o,p){var q=this._getWidget();
q.scrollByX(o);
q.scrollByY(p);
},_getPage:function(b,c){var g=this.getSelectables();
var length=g.length;
var k=g.indexOf(b);
if(k===-1){throw new Error("Invalid lead item: "+b);
}var d=this._getWidget();
var m=d.getScrollY();
var innerHeight=d.getInnerSize().height;
var top,f,l;

if(c){var j=m;
var i=k;
while(1){for(;i>=0;i--){top=d.getItemTop(g[i]);
if(top<j){l=i+1;
break;
}}if(l==null){var n=this._getFirstSelectable();
return n==b?null:n;
}if(l>=k){j-=innerHeight+m-d.getItemBottom(b);
l=null;
continue;
}return g[l];
}}else{var h=innerHeight+m;
var i=k;
while(1){for(;i<length;i++){f=d.getItemBottom(g[i]);
if(f>h){l=i-1;
break;
}}if(l==null){var e=this._getLastSelectable();
return e==b?null:e;
}if(l<=k){h+=d.getItemTop(b)-m;
l=null;
continue;
}return g[l];
}}}}});
})();
(function(){var b="changeModel",a="qx.ui.form.MModelProperty";
qx.Mixin.define(a,{properties:{model:{nullable:true,event:b}}});
})();
(function(){var b="qx.ui.form.IModel",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeModel":a},members:{setModel:function(c){},getModel:function(){},resetModel:function(){}}});
})();
(function(){var e="change",d="qx.event.type.Data",c="__io",b="qx.ui.form.MModelSelection",a="changeSelection";
qx.Mixin.define(b,{construct:function(){this.__io=new qx.data.Array();
this.__io.addListener(e,this.__ir,this);
this.addListener(a,this.__iq,this);
},events:{changeModelSelection:d},members:{__io:null,__ip:false,__iq:function(){if(this.__ip){return;
}var h=this.getSelection();
var f=[];

for(var i=0;i<h.length;i++){var k=h[i];
var g=k.getModel?k.getModel():null;

if(g!==null){f.push(g);
}}this.setModelSelection(f);
},__ir:function(){this.__ip=true;
var o=this.getSelectables();
var q=[];
var p=this.__io.toArray();

for(var i=0;i<p.length;i++){var s=p[i];

for(var j=0;j<o.length;j++){var t=o[j];
var n=t.getModel?t.getModel():null;

if(s===n){q.push(t);
break;
}}}this.setSelection(q);
this.__ip=false;
var r=this.getSelection();

if(!qx.lang.Array.equals(r,q)){this.__iq();
}},getModelSelection:function(){return this.__io;
},setModelSelection:function(l){if(!l){this.__io.removeAll();
return;
}{};
l.unshift(this.__io.getLength());
l.unshift(0);
var m=this.__io.splice.apply(this.__io,l);
m.dispose();
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var b="qx.ui.core.ISingleSelection",a="qx.event.type.Data";
qx.Interface.define(b,{events:{"changeSelection":a},members:{getSelection:function(){return true;
},setSelection:function(c){return arguments.length==1;
},resetSelection:function(){return true;
},isSelected:function(d){return arguments.length==1;
},isSelectionEmpty:function(){return true;
},getSelectables:function(){return true;
}}});
})();
(function(){var a="qx.ui.core.IMultiSelection";
qx.Interface.define(a,{extend:qx.ui.core.ISingleSelection,members:{selectAll:function(){return true;
},addToSelection:function(c){return arguments.length==1;
},removeFromSelection:function(b){return arguments.length==1;
}}});
})();
(function(){var w="single",v="Boolean",u="one",t="changeSelection",s="mouseup",r="mousedown",q="losecapture",p="multi",o="_applyQuickSelection",n="mouseover",f="_applySelectionMode",m="__il",j="_applyDragSelection",d="qx.ui.core.MMultiSelectionHandling",c="removeItem",h="keypress",g="qx.event.type.Data",k="addItem",b="additive",l="mousemove";
qx.Mixin.define(d,{construct:function(){var I=this.SELECTION_MANAGER;
var H=this.__il=new I(this);
this.addListener(r,H.handleMouseDown,H);
this.addListener(s,H.handleMouseUp,H);
this.addListener(n,H.handleMouseOver,H);
this.addListener(l,H.handleMouseMove,H);
this.addListener(q,H.handleLoseCapture,H);
this.addListener(h,H.handleKeyPress,H);
this.addListener(k,H.handleAddItem,H);
this.addListener(c,H.handleRemoveItem,H);
H.addListener(t,this._onSelectionChange,this);
},events:{"changeSelection":g},properties:{selectionMode:{check:[w,p,b,u],init:w,apply:f},dragSelection:{check:v,init:false,apply:j},quickSelection:{check:v,init:false,apply:o}},members:{__il:null,selectAll:function(){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting all items."));
this.trace();
}this.__il.selectAll();
},isSelected:function(a){if(!qx.ui.core.Widget.contains(this,a)){throw new Error("Could not test if "+a+" is selected, because it is not a child element!");
}return this.__il.isItemSelected(a);
},addToSelection:function(C){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,C)){throw new Error("Could not add + "+C+" to selection, because it is not a child element!");
}this.__il.addItem(C);
},removeFromSelection:function(J){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to removing the given items."));
this.trace();
}
if(!qx.ui.core.Widget.contains(this,J)){throw new Error("Could not remove "+J+" from selection, because it is not a child element!");
}this.__il.removeItem(J);
},selectRange:function(D,E){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}this.__il.selectItemRange(D,E);
},resetSelection:function(){if(!this.getEnabled()){this.warn("Resetting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to resetting the selection."));
this.trace();
}this.__il.clearSelection();
},setSelection:function(x){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}
for(var i=0;i<x.length;i++){if(!qx.ui.core.Widget.contains(this,x[i])){throw new Error("Could not select "+x[i]+", because it is not a child element!");
}}
if(x.length===0){this.resetSelection();
}else{var y=this.getSelection();

if(!qx.lang.Array.equals(y,x)){this.__il.replaceSelection(x);
}}},getSelection:function(){return this.__il.getSelection();
},getSortedSelection:function(){return this.__il.getSortedSelection();
},isSelectionEmpty:function(){return this.__il.isSelectionEmpty();
},getSelectionContext:function(){return this.__il.getSelectionContext();
},_getManager:function(){return this.__il;
},getSelectables:function(){return this.__il.getSelectables();
},invertSelection:function(){if(!this.getEnabled()){this.warn("Setting the selection on disabled '"+this.classname+"' is deprecated: "+("The current behavior will change from doing nothing to selecting the given items."));
this.trace();
}this.__il.invertSelection();
},_getLeadItem:function(){var B=this.__il.getMode();

if(B===w||B===u){return this.__il.getSelectedItem();
}else{return this.__il.getLeadItem();
}},_applySelectionMode:function(z,A){this.__il.setMode(z);
},_applyDragSelection:function(F,G){this.__il.setDrag(F);
},_applyQuickSelection:function(K,L){this.__il.setQuick(K);
},_onSelectionChange:function(e){this.fireDataEvent(t,e.getData());
}},destruct:function(){this._disposeObjects(m);
}});
})();
(function(){var n="change",m="add",l="remove",k="order",j="",h="qx.data.Array",g="?",f="changeBubble",e="qx.event.type.Event",d="number",b="changeLength",c="qx.event.type.Data";
qx.Class.define(h,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(B){arguments.callee.base.call(this);
if(B==undefined){this.__kg=[];
}else if(arguments.length>1){this.__kg=[];

for(var i=0;i<arguments.length;i++){this.__kg.push(arguments[i]);
}}else if(typeof B==d){this.__kg=new Array(B);
}else if(B instanceof Array){this.__kg=qx.lang.Array.clone(B);
}else{this.__kg=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__kg.length;i++){this._applyEventPropagation(this.__kg[i],null,i);
}this.__kh();
},events:{"change":c,"changeLength":e},members:{__kg:null,concat:function(be){if(be){var bf=this.__kg.concat(be);
}else{var bf=this.__kg.concat();
}return new qx.data.Array(bf);
},join:function(L){return this.__kg.join(L);
},pop:function(){var A=this.__kg.pop();
this.__kh();
this._applyEventPropagation(null,A,this.length-1);
this.fireDataEvent(n,{start:this.length-1,end:this.length-1,type:l,items:[A]},null);
return A;
},push:function(bb){for(var i=0;i<arguments.length;i++){this.__kg.push(arguments[i]);
this.__kh();
this._applyEventPropagation(arguments[i],null,this.length-1);
this.fireDataEvent(n,{start:this.length-1,end:this.length-1,type:m,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){this.__kg.reverse();
this.fireDataEvent(n,{start:0,end:this.length-1,type:k,items:null},null);
},shift:function(){var bg=this.__kg.shift();
this.__kh();
this._applyEventPropagation(null,bg);
this.fireDataEvent(n,{start:0,end:this.length-1,type:l,items:[bg]},null);
return bg;
},slice:function(J,K){return new qx.data.Array(this.__kg.slice(J,K));
},splice:function(R,S,T){var ba=this.__kg.length;
var W=this.__kg.splice.apply(this.__kg,arguments);
if(this.__kg.length!=ba){this.__kh();
}var X=S>0;
var U=arguments.length>2;
var V=null;

if(X||U){if(this.__kg.length>ba){var Y=m;
}else if(this.__kg.length<ba){var Y=l;
V=W;
}else{var Y=k;
}this.fireDataEvent(n,{start:R,end:this.length-1,type:Y,items:V},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,R+i);
}this.fireDataEvent(f,{value:this,name:g,old:W});
for(var i=0;i<W.length;i++){this._applyEventPropagation(null,W[i],i);
}return (new qx.data.Array(W));
},sort:function(bc){this.__kg.sort.apply(this.__kg,arguments);
this.fireDataEvent(n,{start:0,end:this.length-1,type:k,items:null},null);
},unshift:function(a){for(var i=arguments.length-1;i>=0;i--){this.__kg.unshift(arguments[i]);
this.__kh();
this._applyEventPropagation(arguments[i],null,0);
this.fireDataEvent(n,{start:0,end:this.length-1,type:m,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__kg;
},getItem:function(bh){return this.__kg[bh];
},setItem:function(w,x){var y=this.__kg[w];
this.__kg[w]=x;
this._applyEventPropagation(x,y,w);
if(this.length!=this.__kg.length){this.__kh();
}this.fireDataEvent(n,{start:w,end:w,type:m,items:[x]},null);
},getLength:function(){return this.length;
},indexOf:function(H){return this.__kg.indexOf(H);
},toString:function(){if(this.__kg!=null){return this.__kg.toString();
}return j;
},contains:function(bd){return this.__kg.indexOf(bd)!==-1;
},copy:function(){return this.concat();
},insertAt:function(q,r){this.splice(q,0,r);
},insertBefore:function(N,O){var P=this.indexOf(N);

if(P==-1){this.push(O);
}else{this.splice(P,0,O);
}},insertAfter:function(E,F){var G=this.indexOf(E);

if(G==-1||G==(this.length-1)){this.push(F);
}else{this.splice(G+1,0,F);
}},removeAt:function(u){return this.splice(u,1)[0];
},removeAll:function(){for(var i=0;i<this.__kg.length;i++){this._applyEventPropagation(null,this.__kg[i],i);
}var D=this.getLength();
var C=this.__kg.concat();
this.__kg.length=0;
this.__kh();
this.fireDataEvent(n,{start:0,end:D-1,type:l,items:C},null);
},append:function(Q){{};
for(var i=0;i<Q.length;i++){this._applyEventPropagation(Q[i],null,this.__kg.length+i);
}Array.prototype.push.apply(this.__kg,Q);
this.__kh();
},remove:function(o){var p=this.indexOf(o);

if(p!=-1){this.splice(p,1);
return o;
}},equals:function(M){if(this.length!==M.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==M.getItem(i)){return false;
}}return true;
},sum:function(){var v=0;

for(var i=0;i<this.length;i++){v+=this.getItem(i);
}return v;
},max:function(){var I=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>I){I=this.getItem(i);
}}return I===undefined?null:I;
},min:function(){var z=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<z){z=this.getItem(i);
}}return z===undefined?null:z;
},forEach:function(s,t){for(var i=0;i<this.__kg.length;i++){s.call(t,this.__kg[i]);
}},__kh:function(){this.length=this.__kg.length;
this.fireEvent(b,qx.event.type.Event);
}},destruct:function(){for(var i=0;i<this.__kg.length;i++){this._applyEventPropagation(null,this.__kg[i],i);
}this.__kg=null;
}});
})();
(function(){var T="scrollbar-y",S="scrollbar-x",R="pane",Q="auto",P="corner",O="on",N="changeVisibility",M="scroll",L="_computeScrollbars",K="off",D="scrollY",J="qx.ui.core.scroll.AbstractScrollArea",G="abstract",B="update",A="scrollX",F="mousewheel",E="scrollbarY",H="scrollbarX",z="horizontal",I="scrollarea",C="vertical";
qx.Class.define(J,{extend:qx.ui.core.Widget,include:qx.ui.core.scroll.MScrollBarFactory,type:G,construct:function(){arguments.callee.base.call(this);
var i=new qx.ui.layout.Grid();
i.setColumnFlex(0,1);
i.setRowFlex(0,1);
this._setLayout(i);
this.addListener(F,this._onMouseWheel,this);
},properties:{appearance:{refine:true,init:I},width:{refine:true,init:100},height:{refine:true,init:200},scrollbarX:{check:[Q,O,K],init:Q,themeable:true,apply:L},scrollbarY:{check:[Q,O,K],init:Q,themeable:true,apply:L},scrollbar:{group:[H,E]}},members:{_createChildControlImpl:function(w){var x;

switch(w){case R:x=new qx.ui.core.scroll.ScrollPane();
x.addListener(B,this._computeScrollbars,this);
x.addListener(A,this._onScrollPaneX,this);
x.addListener(D,this._onScrollPaneY,this);
this._add(x,{row:0,column:0});
break;
case S:x=this._createScrollBar(z);
x.setMinWidth(0);
x.exclude();
x.addListener(M,this._onScrollBarX,this);
x.addListener(N,this._onChangeScrollbarXVisibility,this);
this._add(x,{row:1,column:0});
break;
case T:x=this._createScrollBar(C);
x.setMinHeight(0);
x.exclude();
x.addListener(M,this._onScrollBarY,this);
x.addListener(N,this._onChangeScrollbarYVisibility,this);
this._add(x,{row:0,column:1});
break;
case P:x=new qx.ui.core.Widget();
x.setWidth(0);
x.setHeight(0);
x.exclude();
this._add(x,{row:1,column:1});
break;
}return x||arguments.callee.base.call(this,w);
},getPaneSize:function(){return this.getChildControl(R).getInnerSize();
},getItemTop:function(y){return this.getChildControl(R).getItemTop(y);
},getItemBottom:function(v){return this.getChildControl(R).getItemBottom(v);
},getItemLeft:function(j){return this.getChildControl(R).getItemLeft(j);
},getItemRight:function(b){return this.getChildControl(R).getItemRight(b);
},scrollToX:function(X){qx.ui.core.queue.Manager.flush();
this.getChildControl(S).scrollTo(X);
},scrollByX:function(a){qx.ui.core.queue.Manager.flush();
this.getChildControl(S).scrollBy(a);
},getScrollX:function(){var c=this.getChildControl(S,true);
return c?c.getPosition():0;
},scrollToY:function(U){qx.ui.core.queue.Manager.flush();
this.getChildControl(T).scrollTo(U);
},scrollByY:function(k){qx.ui.core.queue.Manager.flush();
this.getChildControl(T).scrollBy(k);
},getScrollY:function(){var d=this.getChildControl(T,true);
return d?d.getPosition():0;
},_onScrollBarX:function(e){this.getChildControl(R).scrollToX(e.getData());
},_onScrollBarY:function(e){this.getChildControl(R).scrollToY(e.getData());
},_onScrollPaneX:function(e){this.scrollToX(e.getData());
},_onScrollPaneY:function(e){this.scrollToY(e.getData());
},_onMouseWheel:function(e){var g=this._isChildControlVisible(S);
var h=this._isChildControlVisible(T);
var f=(h)?this.getChildControl(T,true):(g?this.getChildControl(S,true):null);

if(f){f.scrollBySteps(e.getWheelDelta());
}e.stop();
},_onChangeScrollbarXVisibility:function(e){var Y=this._isChildControlVisible(S);
var ba=this._isChildControlVisible(T);

if(!Y){this.scrollToX(0);
}Y&&ba?this._showChildControl(P):this._excludeChildControl(P);
},_onChangeScrollbarYVisibility:function(e){var V=this._isChildControlVisible(S);
var W=this._isChildControlVisible(T);

if(!W){this.scrollToY(0);
}V&&W?this._showChildControl(P):this._excludeChildControl(P);
},_computeScrollbars:function(){var r=this.getChildControl(R);
var content=r.getChildren()[0];

if(!content){this._excludeChildControl(S);
this._excludeChildControl(T);
return;
}var l=this.getInnerSize();
var q=r.getInnerSize();
var o=r.getScrollSize();
if(!q||!o){return;
}var s=this.getScrollbarX();
var t=this.getScrollbarY();

if(s===Q&&t===Q){var p=o.width>l.width;
var u=o.height>l.height;
if((p||u)&&!(p&&u)){if(p){u=o.height>q.height;
}else if(u){p=o.width>q.width;
}}}else{var p=s===O;
var u=t===O;
if(o.width>(p?q.width:l.width)&&s===Q){p=true;
}
if(o.height>(p?q.height:l.height)&&t===Q){u=true;
}}if(p){var n=this.getChildControl(S);
n.show();
n.setMaximum(Math.max(0,o.width-q.width));
n.setKnobFactor(q.width/o.width);
}else{this._excludeChildControl(S);
}
if(u){var m=this.getChildControl(T);
m.show();
m.setMaximum(Math.max(0,o.height-q.height));
m.setKnobFactor(q.height/o.height);
}else{this._excludeChildControl(T);
}}}});
})();
(function(){var p="horizontal",o="qx.event.type.Data",n="vertical",m="",k="qx.ui.form.List",j="Boolean",h="one",g="addChildWidget",f="_applySpacing",d="Enter",B="Integer",A="action",z="keyinput",y="addItem",x="removeChildWidget",w="_applyOrientation",v="__wO",u="single",t="keypress",s="list",q="pane",r="removeItem";
qx.Class.define(k,{extend:qx.ui.core.scroll.AbstractScrollArea,implement:[qx.ui.core.IMultiSelection,qx.ui.form.IForm,qx.ui.form.IModelSelection],include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MMultiSelectionHandling,qx.ui.form.MForm,qx.ui.form.MModelSelection],construct:function(C){arguments.callee.base.call(this);
this.__wO=new qx.ui.container.Composite();
this.__wO.addListener(g,this._onAddChild,this);
this.__wO.addListener(x,this._onRemoveChild,this);
this.getChildControl(q).add(this.__wO);
if(C){this.setOrientation(p);
}else{this.initOrientation();
}this.addListener(t,this._onKeyPress);
this.addListener(z,this._onKeyInput);
this.__wP=m;
},events:{addItem:o,removeItem:o},properties:{appearance:{refine:true,init:s},focusable:{refine:true,init:true},orientation:{check:[p,n],init:n,apply:w},spacing:{check:B,init:0,apply:f,themeable:true},enableInlineFind:{check:j,init:true}},members:{__wP:null,__wQ:null,__wO:null,SELECTION_MANAGER:qx.ui.core.selection.ScrollArea,getChildrenContainer:function(){return this.__wO;
},_onAddChild:function(e){this.fireDataEvent(y,e.getData());
},_onRemoveChild:function(e){this.fireDataEvent(r,e.getData());
},handleKeyPress:function(e){if(!this._onKeyPress(e)){this._getManager().handleKeyPress(e);
}},_applyOrientation:function(K,L){var M=K===p;
var N=M?new qx.ui.layout.HBox():new qx.ui.layout.VBox();
var content=this.__wO;
content.setLayout(N);
content.setAllowGrowX(!M);
content.setAllowGrowY(M);
this._applySpacing(this.getSpacing());
},_applySpacing:function(P,Q){this.__wO.getLayout().setSpacing(P);
},_onKeyPress:function(e){if(e.getKeyIdentifier()==d&&!e.isAltPressed()){var O=this.getSelection();

for(var i=0;i<O.length;i++){O[i].fireEvent(A);
}return true;
}return false;
},_onKeyInput:function(e){if(!this.getEnableInlineFind()){return;
}var D=this.getSelectionMode();

if(!(D===u||D===h)){return;
}if(((new Date).valueOf()-this.__wQ)>1000){this.__wP=m;
}this.__wP+=e.getChar();
var E=this.findItemByLabelFuzzy(this.__wP);
if(E){this.setSelection([E]);
}this.__wQ=(new Date).valueOf();
},findItemByLabelFuzzy:function(a){a=a.toLowerCase();
var b=this.getChildren();
for(var i=0,l=b.length;i<l;i++){var c=b[i].getLabel();
if(c&&c.toLowerCase().indexOf(a)==0){return b[i];
}}return null;
},findItem:function(F,G){if(G!==false){F=F.toLowerCase();
}var H=this.getChildren();
var J;
for(var i=0,l=H.length;i<l;i++){J=H[i];
var I=J.getLabel();

if(I!=null){if(I.translate){I=I.translate();
}
if(G!==false){I=I.toLowerCase();
}
if(I.toString()==F.toString()){return J;
}}}return null;
}},destruct:function(){this._disposeObjects(v);
}});
})();
(function(){var c="listitem",b="qx.ui.form.ListItem",a="qx.event.type.Event";
qx.Class.define(b,{extend:qx.ui.basic.Atom,implement:[qx.ui.form.IModel],include:[qx.ui.form.MModelProperty],construct:function(d,e,f){arguments.callee.base.call(this,d,e);

if(f!=null){this.setModel(f);
}},events:{"action":a},properties:{appearance:{refine:true,init:c}},members:{_forwardStates:{focused:true,hovered:true,selected:true,dragover:true}}});
})();
(function(){var h="complete",g="initialized",f="loading",e="webkit",d="load",c="qx.event.type.Event",b="qx.client",a="qx.io.part.Package";
qx.Class.define(a,{extend:qx.core.Object,construct:function(p,q,r){arguments.callee.base.call(this);
this.__wR=r?h:g;
this.__wS=p;
this.__wT=q;
},events:{"load":c},members:{__wT:null,__wS:null,__wR:null,__wU:function(l,m,self){if(l.length==0){m.call(self);
return;
}this.__wR=f;
var o=0;
var n=function(j){if(o>=l.length){this.__wR=h;
m.call(self);
return;
}var k=new qx.io.ScriptLoader();
k.load(j.shift(),function(){o+=1;
k.dispose();

if(qx.core.Variant.isSet(b,e)){qx.event.Timer.once(function(){n.call(this,j,m,self);
},this,0);
}else{n.call(this,j,m,self);
}},this);
};
n(qx.lang.Array.clone(l));
},getReadyState:function(){return this.__wR;
},load:function(){if(this.__wR!==g){return;
}this.__wR=f;
this.__wU(this.__wS,function(){this.__wR=h;
var i=qx.$$loader.packageHashes[this.__wT];
this._importPackageData(qx.$$packageData[i]);
this.fireEvent(d);
},this);
},_importPackageData:qx.$$loader.importPackageData},destruct:function(){this.__wS=null;
}});
})();
(function(){var k="String",j="loading",i="complete",h="initialized",g="changeState",f="changeDescription",e="changeName",d="showcase.Page",c="showcase.AbstractContent",b="changeIcon",a="changePart";
qx.Class.define(d,{extend:qx.core.Object,construct:function(){this.initReadyState();
},properties:{name:{check:k,event:e},icon:{check:k,event:b},part:{check:k,event:a},description:{check:k,event:f},contentClass:{},controlClass:{nullable:true},content:{check:c},readyState:{check:[h,j,i],init:h,event:g}},members:{load:function(m,n){var m=m||qx.lang.Function.empty;
var n=n||this;
var o=this.getReadyState();

if(o==i){m.call(n,this);
return;
}else if(o==j){return this.addListenerOnce(g,function(){m.call(n,this);
});
}else{this.setReadyState(j);
qx.io.PartLoader.require(this.getPart(),function(){this._initializeContent();
this.setReadyState(i);
m.call(n,this);
},this);
}},_initializeContent:function(){var l=qx.Class.getByName(this.getContentClass());
this.setContent(new l(this));
}}});
})();
(function(){var j="Theming",i="and UI code and differ only in their theme.",h="Widgets can have states like \"selected\" or ",g="browser issues and allows styling of any widget property. It is ",f="showcase.page.theme.Content",e="showcase/theme/icon.png",d="Custom themes",c="<p> The two calculators on this page share exactly the same application ",b="widget independent of its content. Qooxdoo comes with a rich set of ",a="application code.",v="qooxdoo provides a powerful theming system built on a custom JSON-like ",u="This demo shows all available decorators.",t="possible to create entirely different themes without touching the ",s="Appearance",r="showcase.page.theme.Page",q="syntax. Unlike CSS this syntax doesn't have any cross ",p="\"hovered\", which can be used by the theme to style the widgets.",o="theme",n="pre-defined decorators.",m="This namespace contains the theme managers and the two standard themes.",k="Decorators",l="Any HTML code can be used to style the background of a ";
qx.Class.define(r,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:j,part:o,icon:e,contentClass:f,description:showcase.page.DescriptionBuilder.build(j,this.__wV,null,this.__wW,this.__wX,this.__wY,this.__xa)});
},members:{__wV:v+q+g+t+a+c+i,__wW:{"States":h+p,"Decorators":l+b+n},__wX:{"ui_theming":j,"ui_appearance":s,"ui_custom_themes":d,"ui_decorators":k},__wY:{"#ui~Decoration.html":u},__xa:{"#qx.theme":m}}});
})();
(function(){var g="complete",f="load",e="initialized",d="loading",c="qx.io.part.Part",b="qx.event.type.Event",a="__xd";
qx.Class.define(c,{extend:qx.core.Object,construct:function(name,l){arguments.callee.base.call(this);
this.__xb=name;
this.__xc=g;
this.__xd=l;

for(var i=0;i<l.length;i++){if(l[i].getReadyState()!==g){this.__xc=e;
break;
}}},events:{"load":b},members:{__xc:null,getReadyState:function(){return this.__xc;
},__xb:null,getName:function(){return this.__xb;
},__xd:null,load:function(h,self){if(this.__xc==g){if(h){h.call(self);
}return;
}else if(this.__xc==d){if(h){this.addListenerOnce(f,h,self);
}return;
}
if(h){this.addListenerOnce(f,h,self);
}var j=function(){this.load();
};

for(var i=0;i<this.__xd.length;i++){var k=this.__xd[i];

switch(k.getReadyState()){case e:k.addListenerOnce(f,j,this);
k.load();
return;
case d:k.addListenerOnce(f,j,this);
return;
case g:break;
default:throw new Error("Invalid case!");
}}this.__xc=g;
this.fireEvent(f);
}},destruct:function(){this._disposeArray(a);
}});
})();
(function(){var p="other",o="widgets",n="fonts",m="appearances",k="qx.Theme",j="]",h="[Theme ",g="colors",f="decorations",e="Theme",b="meta",d="borders",c="icons";
qx.Bootstrap.define(k,{statics:{define:function(name,t){if(!t){var t={};
}t.include=this.__qz(t.include);
t.patch=this.__qz(t.patch);
{};
var u={$$type:e,name:name,title:t.title,toString:this.genericToString};
if(t.extend){u.supertheme=t.extend;
}u.basename=qx.Bootstrap.createNamespace(name,u);
this.__qC(u,t);
this.__qA(u,t);
this.$$registry[name]=u;
for(var i=0,a=t.include,l=a.length;i<l;i++){this.include(u,a[i]);
}
for(var i=0,a=t.patch,l=a.length;i<l;i++){this.patch(u,a[i]);
}},__qz:function(I){if(!I){return [];
}
if(qx.Bootstrap.isArray(I)){return I;
}else{return [I];
}},__qA:function(q,r){var s=r.aliases||{};

if(r.extend&&r.extend.aliases){qx.Bootstrap.objectMergeWith(s,r.extend.aliases,false);
}q.aliases=s;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+j;
},__qB:function(J){for(var i=0,K=this.__qD,l=K.length;i<l;i++){if(J[K[i]]){return K[i];
}}},__qC:function(v,w){var z=this.__qB(w);
if(w.extend&&!z){z=w.extend.type;
}v.type=z||p;
if(!z){return;
}var B=function(){};
if(w.extend){B.prototype=new w.extend.$$clazz;
}var A=B.prototype;
var y=w[z];
for(var x in y){A[x]=y[x];
if(A[x].base){{};
A[x].base=w.extend;
}}v.$$clazz=B;
v[z]=new B;
},$$registry:{},__qD:[g,d,f,n,c,o,m,b],__qE:null,__qF:null,__qG:function(){},patch:function(C,D){var F=this.__qB(D);

if(F!==this.__qB(C)){throw new Error("The mixins '"+C.name+"' are not compatible '"+D.name+"'!");
}var E=D[F];
var G=C.$$clazz.prototype;

for(var H in E){G[H]=E[H];
}},include:function(L,M){var O=M.type;

if(O!==L.type){throw new Error("The mixins '"+L.name+"' are not compatible '"+M.name+"'!");
}var N=M[O];
var P=L.$$clazz.prototype;

for(var Q in N){if(P[Q]!==undefined){continue;
}P[Q]=N[Q];
}}}});
})();
(function(){var k="px",j="0px",i="-1px",h="no-repeat",g="scale-x",f="scale-y",e="-tr",d="-l",c='</div>',b="scale",y="qx.client",x="-br",w="-t",v="-tl",u="-r",t='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',s="_applyBaseImage",r="-b",q="String",p="",n="-bl",o="-c",l="mshtml",m="qx.ui.decoration.Grid";
qx.Class.define(m,{extend:qx.ui.decoration.Abstract,construct:function(O,P){arguments.callee.base.call(this);
if(O!=null){this.setBaseImage(O);
}
if(P!=null){this.setInsets(P);
}},properties:{baseImage:{check:q,nullable:true,apply:s}},members:{__rI:null,__rJ:null,__rK:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__rI;
},getMarkup:function(){if(this.__rI){return this.__rI;
}var D=qx.bom.element.Decoration;
var E=this.__rJ;
var F=this.__rK;
var G=[];
G.push(t);
G.push(D.create(E.tl,h,{top:0,left:0}));
G.push(D.create(E.t,g,{top:0,left:F.left+k}));
G.push(D.create(E.tr,h,{top:0,right:0}));
G.push(D.create(E.bl,h,{bottom:0,left:0}));
G.push(D.create(E.b,g,{bottom:0,left:F.left+k}));
G.push(D.create(E.br,h,{bottom:0,right:0}));
G.push(D.create(E.l,f,{top:F.top+k,left:0}));
G.push(D.create(E.c,b,{top:F.top+k,left:F.left+k}));
G.push(D.create(E.r,f,{top:F.top+k,right:0}));
G.push(c);
return this.__rI=G.join(p);
},resize:function(z,A,B){var C=this.__rK;
var innerWidth=A-C.left-C.right;
var innerHeight=B-C.top-C.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}z.style.width=A+k;
z.style.height=B+k;
z.childNodes[1].style.width=innerWidth+k;
z.childNodes[4].style.width=innerWidth+k;
z.childNodes[7].style.width=innerWidth+k;
z.childNodes[6].style.height=innerHeight+k;
z.childNodes[7].style.height=innerHeight+k;
z.childNodes[8].style.height=innerHeight+k;

if(qx.core.Variant.isSet(y,l)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(A%2==1){z.childNodes[2].style.marginRight=i;
z.childNodes[5].style.marginRight=i;
z.childNodes[8].style.marginRight=i;
}else{z.childNodes[2].style.marginRight=j;
z.childNodes[5].style.marginRight=j;
z.childNodes[8].style.marginRight=j;
}
if(B%2==1){z.childNodes[3].style.marginBottom=i;
z.childNodes[4].style.marginBottom=i;
z.childNodes[5].style.marginBottom=i;
}else{z.childNodes[3].style.marginBottom=j;
z.childNodes[4].style.marginBottom=j;
z.childNodes[5].style.marginBottom=j;
}}}},tint:function(S,T){},_applyBaseImage:function(H,I){{};

if(H){var M=this._resolveImageUrl(H);
var N=/(.*)(\.[a-z]+)$/.exec(M);
var L=N[1];
var K=N[2];
var J=this.__rJ={tl:L+v+K,t:L+w+K,tr:L+e+K,bl:L+n+K,b:L+r+K,br:L+x+K,l:L+d+K,c:L+o+K,r:L+u+K};
this.__rK=this._computeEdgeSizes(J);
}},_resolveImageUrl:function(a){return qx.util.AliasManager.getInstance().resolve(a);
},_computeEdgeSizes:function(Q){var R=qx.util.ResourceManager.getInstance();
return {top:R.getImageHeight(Q.t),bottom:R.getImageHeight(Q.b),left:R.getImageWidth(Q.l),right:R.getImageWidth(Q.r)};
}},destruct:function(){this.__rI=this.__rJ=this.__rK=null;
}});
})();
(function(){var e="showcase/theme/window.png",d="showcase/theme/display.png",c="showcase/theme/button.png",b="showcase.page.theme.calc.theme.Decoration",a="showcase/theme/button-pressed.png";
qx.Theme.define(b,{decorations:{"calc-button":{decorator:qx.ui.decoration.Grid,style:{baseImage:c,insets:[3,3,5,3]}},"calc-button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:a,insets:[3,3,5,3]}},"calc-display":{decorator:qx.ui.decoration.Grid,style:{baseImage:d,insets:[5,5,5,4]}},"calc-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:e,insets:2}}}});
})();
(function(){var u="Number",t="qx.event.type.Event",s="update",r="linear",q="reverse",p="Boolean",o="setup",n="none",m="qx.fx.Base",l="sinodial",e="flicker",k="pulse",h="_applyDuration",d="easeOutQuad",c="spring",g="easeInQuad",f="full",i="wobble",b="finish",j="Object";
qx.Class.define(m,{extend:qx.core.Object,construct:function(x){arguments.callee.base.call(this);
this.setQueue(qx.fx.queue.Manager.getInstance().getDefaultQueue());
this.__ye=qx.fx.Base.EffectState.IDLE;
this.__yf=x;
},events:{"setup":t,"update":t,"finish":t},properties:{duration:{init:0.5,check:u,apply:h},fps:{init:100,check:u},sync:{init:false,check:p},from:{init:0,check:u},to:{init:1,check:u},delay:{init:0.0,check:u},queue:{check:j},transition:{init:r,check:[r,g,d,l,q,e,i,k,c,n,f]}},statics:{EffectState:{IDLE:'idle',PREPARING:'preparing',FINISHED:'finished',RUNNING:'running'}},members:{__ye:null,__yg:null,__yh:null,__yi:null,__yj:null,__yk:null,__yl:null,__ym:null,__yf:null,_getElement:function(){return this.__yf;
},_setElement:function(y){this.__yf=y;
},_applyDuration:function(v,w){},init:function(){this.__ye=qx.fx.Base.EffectState.PREPARING;
this.__yg=0;
this.__yh=this.getDelay()*1000+(new Date().getTime());
this.__yi=this.__yh+(this.getDuration()*1000);
this.__yj=this.getTo()-this.getFrom();
this.__yk=this.__yi-this.__yh;
this.__yl=this.getFps()*this.getDuration();
},beforeFinishInternal:function(){},beforeFinish:function(){},afterFinishInternal:function(){},afterFinish:function(){},beforeSetupInternal:function(){},beforeSetup:function(){},afterSetupInternal:function(){},afterSetup:function(){},beforeUpdateInternal:function(){},beforeUpdate:function(){},afterUpdateInternal:function(){},afterUpdate:function(){},beforeStartInternal:function(){},beforeStart:function(){},setup:function(){this.fireEvent(o);
},update:function(a){},finish:function(){this.fireEvent(b);
},start:function(){if(this.__ye!=qx.fx.Base.EffectState.IDLE){return false;
}this.init();
this.beforeStartInternal();
this.beforeStart();

if(!this.getSync()){this.getQueue().add(this);
}return true;
},end:function(){this.render(1.0);
this.cancel();
this.beforeFinishInternal();
this.beforeFinish();
this.finish();
this.afterFinishInternal();
this.afterFinish();
},render:function(C){if(this.__ye==qx.fx.Base.EffectState.PREPARING){this.__ye=qx.fx.Base.EffectState.RUNNING;
this.beforeSetupInternal();
this.beforeSetup();
this.setup();
this.afterSetupInternal();
this.afterSetup();
}
if(this.__ye==qx.fx.Base.EffectState.RUNNING){this.__ym=qx.fx.Transition.get(this.getTransition())(C)*this.__yj+this.getFrom();
this.beforeUpdateInternal();
this.beforeUpdate();
this.update(this.__ym);
this.afterUpdateInternal();
this.afterUpdate();

if(this.hasListener(s)){this.fireEvent(s);
}}},loop:function(z){if(z>=this.__yh){if(z>=this.__yi){this.end();
}var B=(z-this.__yh)/this.__yk;
var A=Math.round(B*this.__yl);
if(A>this.__yg){this.render(B);
this.__yg=A;
}}},cancel:function(){if(!this.getSync()){this.getQueue().remove(this);
}this.__ye=qx.fx.Base.EffectState.IDLE;
},resetState:function(){this.__ye=qx.fx.Base.EffectState.IDLE;
}},destruct:function(){this.__yf=this.__ye=null;
}});
})();
(function(){var e="display",d="none",c="qx.fx.effect.core.Fade",b="block",a="Boolean";
qx.Class.define(c,{extend:qx.fx.Base,properties:{modifyDisplay:{init:true,check:a},from:{init:1.0,refine:true},to:{init:0.0,refine:true}},members:{update:function(g){arguments.callee.base.call(this);
qx.bom.element.Opacity.set(this._getElement(),g);
},beforeSetup:function(){arguments.callee.base.call(this);
var f=this._getElement();

if((this.getModifyDisplay())&&(this.getTo()>0)){qx.bom.element.Style.set(f,e,b);
}qx.bom.element.Opacity.set(f,this.getFrom());
},afterFinishInternal:function(){if((this.getModifyDisplay())&&(this.getTo()==0)){qx.bom.element.Style.set(this._getElement(),e,d);
}}}});
})();
(function(){var j="#CCCCCC",i="#F3F3F3",h="#E4E4E4",g="#1a1a1a",f="#084FAB",e="gray",d="#fffefe",c="white",b="#4a4a4a",a="#EEEEEE",K="#80B4EF",J="#C72B2B",I="#ffffdd",H="#334866",G="#00204D",F="#666666",E="#CBC8CD",D="#99C3FE",C="#808080",B="#F4F4F4",q="#001533",r="#909090",o="#FCFCFC",p="#314a6e",m="#B6B6B6",n="#0880EF",k="#4d4d4d",l="#DFDFDF",s="#000000",t="#FF9999",w="#7B7A7E",v="#26364D",y="#990000",x="#AFAFAF",A="#404955",z="#AAAAAA",u="qx.theme.modern.Color";
qx.Theme.define(u,{colors:{"background-application":l,"background-pane":i,"background-light":o,"background-medium":a,"background-splitpane":x,"background-tip":I,"background-tip-error":J,"background-odd":h,"text-light":r,"text-gray":b,"text-label":g,"text-title":p,"text-input":s,"text-hovered":q,"text-disabled":w,"text-selected":d,"text-active":v,"text-inactive":A,"text-placeholder":E,"border-main":k,"border-separator":C,"border-input":H,"border-disabled":m,"border-pane":G,"border-button":F,"border-column":j,"border-focused":D,"invalid":y,"border-focused-invalid":t,"table-pane":i,"table-focus-indicator":n,"table-row-background-focused-selected":f,"table-row-background-focused":K,"table-row-background-selected":f,"table-row-background-even":i,"table-row-background-odd":h,"table-row-selected":d,"table-row":g,"table-row-line":j,"table-column-line":j,"progressive-table-header":z,"progressive-table-row-background-even":B,"progressive-table-row-background-odd":h,"progressive-progressbar-background":e,"progressive-progressbar-indicator-done":j,"progressive-progressbar-indicator-undone":c,"progressive-progressbar-percent-background":e,"progressive-progressbar-percent-text":c}});
})();
(function(){var e="showcase.page.theme.calc.theme.Color",d="#969696",c="#AAA",b="#DDD",a="white";
qx.Theme.define(e,{colors:{"black-window-bg":d,"black-window-caption":b,"black-button-text":a,"black-button-text-pressed":c}});
})();
(function(){var a="showcase.theme.Color";
qx.Theme.define(a,{extend:qx.theme.modern.Color,include:[showcase.page.theme.calc.theme.Color],colors:{}});
})();
(function(){var d="qx.theme.manager.Icon",c="Theme",b="_applyTheme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:c,nullable:true,apply:b}},members:{_applyTheme:function(e,f){var h=qx.util.AliasManager.getInstance();

if(f){for(var g in f.aliases){h.remove(g);
}}
if(e){for(var g in e.aliases){h.add(g,e.aliases[g]);
}}}}});
})();
(function(){var q="bold",p="widget",o="black-window-bg",n="black-button-text-pressed",m="black-button-text",l="button",k="calc-button-pressed",j="black-window-caption",i="calc-display",h="calc-button",d="center",g="middle",f="calc-window",c="shadow-window",b="showcase.page.theme.calc.theme.appearance.Black",e="display";
qx.Theme.define(b,{appearances:{"calculator":{style:function(a){return {backgroundColor:o,decorator:f,shadow:c,contentPadding:[6,8,8,8]};
}},"calculator/pane":p,"calculator/captionbar":p,"calculator/title":{style:function(s){return {alignY:g,textAlign:d,font:q,textColor:j};
}},"calculator/icon":{style:function(w){return {margin:[3,8,0,8]};
}},"display":{style:function(v){return {decorator:i,marginBottom:8,height:51,padding:[0,20]};
}},"display/label":{style:function(u){return {font:q,marginLeft:5};
}},"display/memory":{style:function(x){return {marginLeft:5};
}},"display/operation":{style:function(t){return {marginLeft:50};
}},"calculator/display":e,"calculator-button":{alias:l,style:function(r){return {textColor:r.pressed?n:m,decorator:r.pressed?k:h,center:true,padding:r.pressed?[1,8,3,8]:[2,8]};
}}}});
})();
(function(){var f="resize",d="interval",c="__xg",b="body",a="qx.event.handler.ElementResize";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(s){arguments.callee.base.call(this);
this.__xe=s;
this.__xf={};
this.__xg=new qx.event.Timer(200);
this.__xg.addListener(d,this._onInterval,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{resize:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__xf:null,__xe:null,__xg:null,canHandleEvent:function(y,z){return y.tagName.toLowerCase()!==b;
},registerEvent:function(t,u,v){var x=qx.core.ObjectRegistry.toHashCode(t);
var w=this.__xf;

if(!w[x]){w[x]={element:t,width:qx.bom.element.Dimension.getWidth(t),height:qx.bom.element.Dimension.getHeight(t)};
this.__xg.start();
}},unregisterEvent:function(n,o,p){var r=qx.core.ObjectRegistry.toHashCode(n);
var q=this.__xf;

if(q[r]){delete q[r];

if(qx.lang.Object.isEmpty(q)){this.__xg.stop();
}}},_onInterval:function(e){var h=this.__xf;

for(var k in h){var l=h[k];
var g=l.element;
var j=qx.bom.element.Dimension.getWidth(g);
var i=qx.bom.element.Dimension.getHeight(g);

if(l.height!==i||l.width!==j){qx.event.Registration.fireNonBubblingEvent(g,f,qx.event.type.Data,[{width:j,oldWidth:l.width,height:i,oldHeight:l.height}]);
l.width=j;
l.height=i;
}}}},destruct:function(){this.__xe=this.__xf=null;
this._disposeObjects(c);
},defer:function(m){qx.event.Registration.addHandler(m);
}});
})();
(function(){var f="_applyTheme",e="qx.theme",d="qx.theme.manager.Meta",c="qx.theme.Modern",b="Theme",a="singleton";
qx.Class.define(d,{type:a,extend:qx.core.Object,properties:{theme:{check:b,nullable:true,apply:f}},members:{_applyTheme:function(g,h){var k=null;
var n=null;
var q=null;
var r=null;
var m=null;

if(g){k=g.meta.color||null;
n=g.meta.decoration||null;
q=g.meta.font||null;
r=g.meta.icon||null;
m=g.meta.appearance||null;
}var o=qx.theme.manager.Color.getInstance();
var p=qx.theme.manager.Decoration.getInstance();
var i=qx.theme.manager.Font.getInstance();
var l=qx.theme.manager.Icon.getInstance();
var j=qx.theme.manager.Appearance.getInstance();
o.setTheme(k);
p.setTheme(n);
i.setTheme(q);
l.setTheme(r);
j.setTheme(m);
},initialize:function(){var t=qx.core.Setting;
var s,u;
s=t.get(e);

if(s){u=qx.Theme.getByName(s);

if(!u){throw new Error("The theme to use is not available: "+s);
}this.setTheme(u);
}}},settings:{"qx.theme":c}});
})();
(function(){var o="_applyStyle",n="",m="Color",l="px",k="solid",j="dotted",i="double",h="dashed",g="_applyWidth",f="qx.ui.decoration.Uniform",c="px ",e=" ",d="scale",b="PositiveInteger",a="absolute";
qx.Class.define(f,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(v,w,x){arguments.callee.base.call(this);
if(v!=null){this.setWidth(v);
}
if(w!=null){this.setStyle(w);
}
if(x!=null){this.setColor(x);
}},properties:{width:{check:b,init:0,apply:g},style:{nullable:true,check:[k,j,h,i],init:k,apply:o},color:{nullable:true,check:m,apply:o},backgroundColor:{check:m,nullable:true,apply:o}},members:{__rF:null,_getDefaultInsets:function(){var u=this.getWidth();
return {top:u,right:u,bottom:u,left:u};
},_isInitialized:function(){return !!this.__rF;
},getMarkup:function(){if(this.__rF){return this.__rF;
}var y={position:a,top:0,left:0};
var z=this.getWidth();
{};
var B=qx.theme.manager.Color.getInstance();
y.border=z+c+this.getStyle()+e+(B.resolve(this.getColor())||n);
var A=this._generateBackgroundMarkup(y);
return this.__rF=A;
},resize:function(p,q,r){var t=this.getBackgroundImage()&&this.getBackgroundRepeat()==d;

if(t||qx.bom.client.Feature.CONTENT_BOX){var s=this.getWidth()*2;
q-=s;
r-=s;
if(q<0){q=0;
}
if(r<0){r=0;
}}p.style.width=q+l;
p.style.height=r+l;
},tint:function(C,D){var E=qx.theme.manager.Color.getInstance();

if(D==null){D=this.getBackgroundColor();
}C.style.backgroundColor=E.resolve(D)||n;
},_applyWidth:function(){{};
this._resetInsets();
},_applyStyle:function(){{};
}},destruct:function(){this.__rF=null;
}});
})();
(function(){var f="px",e="qx.ui.decoration.Background",d="",c="_applyStyle",b="Color",a="absolute";
qx.Class.define(e,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(o){arguments.callee.base.call(this);

if(o!=null){this.setBackgroundColor(o);
}},properties:{backgroundColor:{check:b,nullable:true,apply:c}},members:{__rG:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__rG;
},getMarkup:function(){if(this.__rG){return this.__rG;
}var g={position:a,top:0,left:0};
var h=this._generateBackgroundMarkup(g);
return this.__rG=h;
},resize:function(l,m,n){l.style.width=m+f;
l.style.height=n+f;
},tint:function(i,j){var k=qx.theme.manager.Color.getInstance();

if(j==null){j=this.getBackgroundColor();
}i.style.backgroundColor=k.resolve(j)||d;
},_applyStyle:function(){{};
}},destruct:function(){this.__rG=null;
}});
})();
(function(){var j="_applyStyle",i='"></div>',h="Color",g="1px",f='<div style="',e='border:',d="1px solid ",c="",b=";",a="px",v='</div>',u="qx.ui.decoration.Beveled",t='<div style="position:absolute;top:1px;left:1px;',s='border-bottom:',r='border-right:',q='border-left:',p='border-top:',o="Number",n='<div style="position:absolute;top:1px;left:0px;',m='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(u,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage],construct:function(E,F,G){arguments.callee.base.call(this);
if(E!=null){this.setOuterColor(E);
}
if(F!=null){this.setInnerColor(F);
}
if(G!=null){this.setInnerOpacity(G);
}},properties:{innerColor:{check:h,nullable:true,apply:j},innerOpacity:{check:o,init:1,apply:j},outerColor:{check:h,nullable:true,apply:j},backgroundColor:{check:h,nullable:true,apply:j}},members:{__rL:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__rL;
},_applyStyle:function(){{};
},getMarkup:function(){if(this.__rL){return this.__rL;
}var z=qx.theme.manager.Color.getInstance();
var A=[];
var D=d+z.resolve(this.getOuterColor())+b;
var C=d+z.resolve(this.getInnerColor())+b;
A.push(k);
A.push(f);
A.push(e,D);
A.push(qx.bom.element.Opacity.compile(0.35));
A.push(i);
A.push(n);
A.push(q,D);
A.push(r,D);
A.push(i);
A.push(f);
A.push(m);
A.push(p,D);
A.push(s,D);
A.push(i);
var B={position:l,top:g,left:g};
A.push(this._generateBackgroundMarkup(B));
A.push(t);
A.push(e,C);
A.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
A.push(i);
A.push(v);
return this.__rL=A.join(c);
},resize:function(H,I,J){if(I<4){I=4;
}
if(J<4){J=4;
}if(qx.bom.client.Feature.CONTENT_BOX){var outerWidth=I-2;
var outerHeight=J-2;
var P=outerWidth;
var O=outerHeight;
var innerWidth=I-4;
var innerHeight=J-4;
}else{var outerWidth=I;
var outerHeight=J;
var P=I-2;
var O=J-2;
var innerWidth=P;
var innerHeight=O;
}var R=a;
var N=H.childNodes[0].style;
N.width=outerWidth+R;
N.height=outerHeight+R;
var M=H.childNodes[1].style;
M.width=outerWidth+R;
M.height=O+R;
var L=H.childNodes[2].style;
L.width=P+R;
L.height=outerHeight+R;
var K=H.childNodes[3].style;
K.width=P+R;
K.height=O+R;
var Q=H.childNodes[4].style;
Q.width=innerWidth+R;
Q.height=innerHeight+R;
},tint:function(w,x){var y=qx.theme.manager.Color.getInstance();

if(x==null){x=this.getBackgroundColor();
}w.childNodes[3].style.backgroundColor=y.resolve(x)||c;
}},destruct:function(){this.__rL=null;
}});
})();
(function(){var m="solid",l="scale",k="border-main",j="white",i="repeat-x",h="border-separator",g="background-light",f="invalid",e="border-focused-invalid",d="border-disabled",bq="decoration/table/header-cell.png",bp="decoration/form/input.png",bo="#f8f8f8",bn="decoration/scrollbar/scrollbar-button-bg-horizontal.png",bm="#b6b6b6",bl="background-pane",bk="repeat-y",bj="decoration/form/input-focused.png",bi="#33508D",bh="decoration/selection.png",t="border-input",u="decoration/scrollbar/scrollbar-button-bg-vertical.png",r="decoration/tabview/tab-button-top-active.png",s="decoration/form/button-c.png",p="decoration/scrollbar/scrollbar-bg-vertical.png",q="decoration/form/button.png",n="decoration/form/button-checked.png",o="decoration/tabview/tab-button-left-inactive.png",B="decoration/groupbox/groupbox.png",C="#FAFAFA",M="decoration/pane/pane.png",J="decoration/menu/background.png",U="decoration/toolbar/toolbar-part.gif",P="decoration/tabview/tab-button-top-inactive.png",bd="decoration/menu/bar-background.png",ba="center",F="decoration/tabview/tab-button-bottom-active.png",bg="decoration/form/button-hovered.png",bf="decoration/form/tooltip-error-arrow.png",be="decoration/window/captionbar-inactive.png",E="qx/decoration/Modern",H="decoration/window/statusbar.png",I="border-focused",L="table-focus-indicator",N="#F2F2F2",Q="decoration/form/button-checked-c.png",W="decoration/scrollbar/scrollbar-bg-horizontal.png",bc="qx.theme.modern.Decoration",v="#f4f4f4",w="decoration/shadow/shadow-small.png",G="decoration/app-header.png",T="decoration/tabview/tabview-pane.png",S="decoration/form/tooltip-error.png",R="decoration/form/button-focused.png",Y="decoration/tabview/tab-button-bottom-inactive.png",X="decoration/form/button-disabled.png",O="decoration/tabview/tab-button-right-active.png",V="decoration/form/button-pressed.png",a="no-repeat",bb="decoration/window/captionbar-active.png",x="decoration/tabview/tab-button-left-active.png",y="background-splitpane",K="decoration/form/button-checked-focused.png",b="#C5C5C5",c="decoration/toolbar/toolbar-gradient.png",D="decoration/tabview/tab-button-right-inactive.png",z="#b8b8b8",A="decoration/shadow/shadow.png";
qx.Theme.define(bc,{aliases:{decoration:E},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:k}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bh,backgroundRepeat:l}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bh,backgroundRepeat:l,bottom:[2,m,bi]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,m,bi]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:M,insets:[0,2,3,0]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:B}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:h}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:h}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:S,insets:[2,5,5,2]}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bf,backgroundPositionY:ba,backgroundRepeat:a,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:A,insets:[4,8,8,4]}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:w,insets:[0,3,3,0]}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:W,backgroundRepeat:i}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:p,backgroundRepeat:bk}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:bn,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:k,innerColor:j,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:u,backgroundRepeat:l,outerColor:d,innerColor:j,innerOpacity:0.3}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:q,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:X,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:R,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bg,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:V,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:n,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:K,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[1]}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,insets:[0]}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:t,innerColor:I,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:f,innerColor:e,backgroundImage:bj,backgroundRepeat:i,backgroundColor:g,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:d,innerColor:j,innerOpacity:0.5,backgroundImage:bp,backgroundRepeat:i,backgroundColor:g}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:c,backgroundRepeat:l}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:s,backgroundRepeat:l}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bm,innerColor:bo,backgroundImage:Q,backgroundRepeat:l}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:z,colorRight:v,styleLeft:m,styleRight:m}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:U,backgroundRepeat:bk}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:T,insets:[4,6,7,4]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:r}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:P}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:F}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:Y}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:x}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:o}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:O}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:D}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:bl,width:3,color:y,style:m}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:bl,width:1,color:k,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bb}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:be}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:H}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:k,style:m}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:h,styleRight:m,widthBottom:1,colorBottom:j,styleBottom:m}},"table-column-button":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthBottom:1,colorBottom:k,style:m}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:L,style:m}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:k,style:m}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bq,backgroundRepeat:l,widthRight:1,colorRight:N,style:m}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:J,backgroundRepeat:l,width:1,color:k,style:m}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:b,widthBottom:1,colorBottom:C}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:bd,backgroundRepeat:l,width:1,color:h,style:m}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:G,backgroundRepeat:l}}}});
})();
(function(){var p="",o='#',n="String",m="request",l="mshtml",k="changeTitle",j="abstract",i="_applyState",h="qx.client",g="changeState",d="qx.bom.History",f="_applyTitle",e="qx.event.type.Data";
qx.Class.define(d,{extend:qx.core.Object,type:j,construct:function(){arguments.callee.base.call(this);
this._baseUrl=window.location.href.split(o)[0]+o;
this.__rp={};
this._setInitialState();
},events:{"request":e},statics:{SUPPORTS_HASH_CHANGE_EVENT:(qx.bom.client.Engine.MSHTML&&document.documentMode>=8)||(!qx.bom.client.Engine.MSHTML&&document.documentMode&&"onhashchange" in window),getInstance:function(){if(!this.$$instance){if(this.SUPPORTS_HASH_CHANGE_EVENT){this.$$instance=new qx.bom.NativeHistory();
}else if(qx.core.Variant.isSet(h,l)){this.$$instance=new qx.bom.IframeHistory();
}else{this.$$instance=new qx.bom.NativeHistory();
}}return this.$$instance;
}},properties:{title:{check:n,event:k,nullable:true,apply:f},state:{check:n,event:g,nullable:true,apply:i}},members:{__rp:null,_applyState:function(x,y){this._writeState(x);
},_setInitialState:function(){this.setState(this._readState());
},_encode:function(z){if(qx.lang.Type.isString(z)){return encodeURIComponent(z);
}return p;
},_decode:function(w){if(qx.lang.Type.isString(w)){return decodeURIComponent(w);
}return p;
},_applyTitle:function(v){if(v!=null){document.title=v||p;
}},addToHistory:function(a,b){if(!qx.lang.Type.isString(a)){a=a+p;
}
if(qx.lang.Type.isString(b)){this.setTitle(b);
this.__rp[a]=b;
}
if(this.getState()!==a){this._writeState(a);
}},navigateBack:function(){qx.event.Timer.once(function(){history.back();
},0);
},navigateForward:function(){qx.event.Timer.once(function(){history.forward();
},0);
},_onHistoryLoad:function(t){this.setState(t);
this.fireDataEvent(m,t);

if(this.__rp[t]!=null){this.setTitle(this.__rp[t]);
}},_readState:function(){throw new Error("Abstract method call");
},_writeState:function(){throw new Error("Abstract method call");
},_setHash:function(q){var r=this._baseUrl+(q||p);
var s=window.location;

if(r!=s.href){s.href=r;
}},_getHash:function(){var u=/#(.*)$/.exec(window.location.href);
return u&&u[1]?u[1]:p;
},setTimeoutInterval:function(c){{};
},getTimeoutInterval:function(){{};
return 100;
},resetTimeoutInterval:function(){{};
}},destruct:function(){this.__rp=null;
}});
})();
(function(){var d="hashchange",c="interval",b="qx.bom.NativeHistory",a="qx.client";
qx.Class.define(b,{extend:qx.bom.History,construct:function(){arguments.callee.base.call(this);
this.__rr();
},members:{__rq:null,__rr:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){this.__rq=qx.lang.Function.bind(this.__rt,this);
qx.bom.Event.addNativeListener(window,d,this.__rq);
}else{qx.event.Idle.getInstance().addListener(c,this.__rt,this);
}},__rs:function(){if(qx.bom.History.SUPPORTS_HASH_CHANGE_EVENT){qx.bom.Event.removeNativeListener(window,d,this.__rq);
}else{qx.event.Idle.getInstance().removeListener(c,this.__rt,this);
}},__rt:function(){var g=this._readState();

if(qx.lang.Type.isString(g)&&g!=this.getState()){this._onHistoryLoad(g);
}},_readState:function(){return this._decode(this._getHash());
},_writeState:qx.core.Variant.select(a,{"opera":function(e){qx.event.Timer.once(function(){this._setHash(this._encode(e));
},this,0);
},"default":function(f){this._setHash(this._encode(f));
}})},destruct:function(){this.__rs();
}});
})();
(function(){var j="HTML Editor",i="Format some text with underline, bold, italic, ...",h="Insert a numbered or bullet point list.",g="supplement. The UI controls of the toolbar can be used to interact ",f="The Html Editor, embedded here in a window with menu bar and toolbar, provides basic",e="Editor widget",d="showcase.page.htmleditor.Content",c="showcase/htmleditor/icon.png",b="Low-Level editor",a="htmleditor",v="Align the text on the right side.",u="Menu",t="Overview HTML Editing",s=" cross-browser HTML editing capabilities and is available both as a low-level component",r="MenuBar",q="HTML Area",p="You can insert HTML tables, images, hyperlinks, ...",o="with the HTML editing component.",n="showcase.page.htmleditor.Page",m="Try reverting your changes by using the undo button.",k=" and as a qooxdoo widget. It offers events, allowing easy implementation of a toolbar ",l="Toolbar";
qx.Class.define(n,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:j,part:a,icon:c,contentClass:d,description:showcase.page.DescriptionBuilder.build(j,this.__xh,this.__xi,this.__xj,this.__xk,this.__xl,this.__xm)});
},members:{__xh:f+s+k+g+o,__xi:{"Text Formatting":i,"Alignment":v,"Lists":h,"Redo/Undo":m},__xj:{"Inserting":p},__xk:{"ui_html_editing":t},__xl:{"#bom~HtmlArea.html":b,"#widget~HtmlArea.html":e},__xm:{"#qx.bom.htmlarea":q,"#qx.ui.toolbar":l,"#qx.ui.menubar":r,"#qx.ui.menu":u}}});
})();
(function(){var j="Form",i="Click the \"MenuButton\" to open the menu.",h="The form namespace",g="Form showcase",f="Data bound form",e="widgets. The widgets are grouped by type.",d="Open the select box to see the list of selectables.",c="Double column form renderer",b="Multi page form",a="showcase.page.form.Content",z="Custom form renderer",y="Form controller for binding",x="Form validation",w="form",v="This form demo shows the complete set of form ",u="showcase/form/icon.png",t="Data binding form controller",s="showcase.page.form.Page",r="Default form renderer",q="The placeholder disappears once you start to type in a text field.",o="Form handling",p="Form renderer",m="Complete set of form widgets.",n="Hold the repeat button to see the value increase.",k="Try cycling through the widgets by pressing the tab key.",l="Form renderer using placeholders";
qx.Class.define(s,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:j,part:w,icon:u,contentClass:a,description:showcase.page.DescriptionBuilder.build(j,this.__xn,this.__xo,this.__xp,this.__xq,this.__xr,this.__xs)});
},members:{__xn:v+e,__xo:{"Selection":d,"Text":q,"Buttons":n,"MenuButton":i},__xp:{"Widgets":m,"Keyboard Navigation":k},__xq:{"ui_form_handling":o},__xr:{"#ui~FormRenderer.html":r,"#ui~FormRendererCustom.html":z,"#ui~FormRendererDouble.html":c,"#ui~FormRendererPlaceholder.html":l,"#ui~FormValidator.html":x,"#ui~MultiPageForm.html":b,"#showcase~Form.html":g,"#data~FormController.html":t,"#data~Form.html":f},__xs:{"#qx.ui.form":h,"#qx.ui.form.renderer":p,"#qx.data.controller.Form":y}}});
})();
(function(){var gi="button-frame",gh="atom",gg="widget",gf="main",ge="button",gd="text-selected",gc="image",gb="bold",ga="middle",fY="background-light",eM="text-disabled",eL="groupbox",eK="decoration/arrows/down.png",eJ="cell",eI="selected",eH="border-invalid",eG="input",eF="input-disabled",eE="menu-button",eD="input-focused-invalid",gp="toolbar-button",gq="spinner",gn="input-focused",go="popup",gl="tooltip",gm="list",gj="tree-item",gk="treevirtual-contract",gr="scrollbar",gs="datechooser/nav-button",fH="text-hovered",fG="center",fJ="treevirtual-expand",fI="textfield",fL="label",fK="decoration/arrows/right.png",fN="background-application",fM="radiobutton",fF="white",fE="invalid",cI="combobox",cJ="right-top",cK="checkbox",cL="text-title",cM="qx/static/blank.gif",cN="scrollbar/button",cO="right",cP="combobox/button",cQ="icon/16/places/folder.png",cR="text-label",gG="decoration/tree/closed.png",gF="scrollbar-slider-horizontal",gE="decoration/arrows/left.png",gD="button-focused",gK="text-light",gJ="menu-slidebar-button",gI="text-input",gH="slidebar/button-forward",gM="background-splitpane",gL=".png",dL="decoration/tree/open.png",dM="default",dJ="decoration/arrows/down-small.png",dK="datechooser",dP="slidebar/button-backward",dQ="selectbox",dN="treevirtual-folder",dO="shadow-popup",dH="icon/16/mimetypes/office-document.png",dI="background-medium",dm="table",dl="decoration/arrows/up.png",dp="decoration/form/",dn="",di="-invalid",dh="icon/16/places/folder-open.png",dk="button-checked",dj="decoration/window/maximize-active-hovered.png",dg="radiobutton-hovered",df="decoration/cursors/",dW="slidebar",dX="tooltip-error-arrow",dY="table-scroller-focus-indicator",ea="move-frame",dS="nodrop",dT="decoration/table/boolean-true.png",dU="table-header-cell",dV="menu",eb="app-header",ec="row-layer",dA="text-inactive",dz="move",dy="radiobutton-checked-focused",dx="decoration/window/restore-active-hovered.png",dw="shadow-window",dv="table-column-button",du="right.png",dt="tabview-page-button-bottom-inactive",dE="tooltip-error",dD="window-statusbar",ed="button-hovered",ee="decoration/scrollbar/scrollbar-",ef="background-tip",eg="scrollbar-slider-horizontal-disabled",eh="table-scroller-header",ei="button-pressed",ej="table-pane",ek="decoration/window/close-active.png",el="native",em="checkbox-hovered",eU="button-invalid-shadow",eT="checkbox-checked",eS="decoration/window/minimize-active-hovered.png",eR="menubar",eY="icon/16/actions/dialog-cancel.png",eX="tabview-page-button-top-inactive",eW="tabview-page-button-left-inactive",eV="menu-slidebar",fd="toolbar-button-checked",fc="decoration/tree/open-selected.png",fA="radiobutton-checked",fB="decoration/window/minimize-inactive.png",fy="icon/16/apps/office-calendar.png",fz="group",fw="tabview-page-button-right-inactive",fx="decoration/window/minimize-active.png",fu="decoration/window/restore-inactive.png",fv="checkbox-checked-focused",fC="splitpane",fD="combobox/textfield",fR="button-preselected-focused",fQ="decoration/window/close-active-hovered.png",fT="qx/icon/Tango/16/actions/window-close.png",fS="checkbox-pressed",fV="button-disabled",fU="selected-dragover",fX="border-separator",fW="decoration/window/maximize-inactive.png",fP="dragover",fO="scrollarea",gz="scrollbar-vertical",gA="decoration/menu/checkbox-invert.gif",gB="decoration/toolbar/toolbar-handle-knob.gif",gC="icon/22/mimetypes/office-document.png",gv="button-preselected",gw="button-checked-focused",gx="up.png",gy="best-fit",gt="decoration/tree/closed-selected.png",gu="qx.theme.modern.Appearance",cH="text-active",cG="toolbar-button-hovered",cF="progressive-table-header",cE="decoration/table/select-column-order.png",cD="decoration/menu/radiobutton.gif",cC="decoration/arrows/forward.png",cB="decoration/table/descending.png",cA="window-captionbar-active",cz="checkbox-checked-hovered",cy="scrollbar-slider-vertical",cU="toolbar",cV="alias",cS="decoration/window/restore-active.png",cT="decoration/table/boolean-false.png",cY="checkbox-checked-disabled",da="icon/32/mimetypes/office-document.png",cW="radiobutton-checked-disabled",cX="tabview-pane",dc="decoration/arrows/rewind.png",dd="checkbox-focused",fh="top",fb="#EEE",fo="icon/16/actions/dialog-ok.png",fk="radiobutton-checked-hovered",eP="table-header-cell-hovered",eN="window",dr="text-gray",eQ="decoration/menu/radiobutton-invert.gif",dC="text-placeholder",dB="slider",ev="keep-align",ew="down.png",ex="tabview-page-button-top-active",ey="icon/32/places/folder-open.png",ez="icon/22/places/folder.png",eA="decoration/window/maximize-active.png",eB="checkbox-checked-pressed",eC="decoration/window/close-inactive.png",et="tabview-page-button-left-active",eu="toolbar-part",eO="decoration/splitpane/knob-vertical.png",fn=".gif",fm="icon/22/places/folder-open.png",fl="radiobutton-checked-pressed",fs="table-statusbar",fr="radiobutton-pressed",fq="window-captionbar-inactive",fp="copy",fj="radiobutton-focused",fi="decoration/arrows/down-invert.png",db="decoration/menu/checkbox.gif",dG="decoration/splitpane/knob-horizontal.png",dF="icon/32/places/folder.png",fa="toolbar-separator",dR="tabview-page-button-bottom-active",fg="decoration/arrows/up-small.png",ff="decoration/table/ascending.png",fe="decoration/arrows/up-invert.png",dq="small",ft="tabview-page-button-right-active",de="-disabled",ds="scrollbar-horizontal",en="progressive-table-header-cell",eo="menu-separator",ep="pane",eq="decoration/arrows/right-invert.png",er="left.png",es="icon/16/actions/view-refresh.png";
qx.Theme.define(gu,{appearances:{"widget":{},"root":{style:function(cj){return {backgroundColor:fN,textColor:cR,font:dM};
}},"label":{style:function(cf){return {textColor:cf.disabled?eM:undefined};
}},"move-frame":{style:function(gR){return {decorator:gf};
}},"resize-frame":ea,"dragdrop-cursor":{style:function(cb){var cc=dS;

if(cb.copy){cc=fp;
}else if(cb.move){cc=dz;
}else if(cb.alias){cc=cV;
}return {source:df+cc+fn,position:cJ,offset:[2,16,2,6]};
}},"image":{style:function(bC){return {opacity:!bC.replacement&&bC.disabled?0.3:1};
}},"atom":{},"atom/label":fL,"atom/icon":gc,"popup":{style:function(cg){return {decorator:gf,backgroundColor:fY,shadow:dO};
}},"button-frame":{alias:gh,style:function(ct){var cv,cu;

if(ct.checked&&ct.focused&&!ct.inner){cv=gw;
cu=undefined;
}else if(ct.disabled){cv=fV;
cu=undefined;
}else if(ct.pressed){cv=ei;
cu=fH;
}else if(ct.checked){cv=dk;
cu=undefined;
}else if(ct.hovered){cv=ed;
cu=fH;
}else if(ct.preselected&&ct.focused&&!ct.inner){cv=fR;
cu=fH;
}else if(ct.preselected){cv=gv;
cu=fH;
}else if(ct.focused&&!ct.inner){cv=gD;
cu=undefined;
}else{cv=ge;
cu=undefined;
}return {decorator:cv,textColor:cu,shadow:ct.invalid&&!ct.disabled?eU:undefined};
}},"button-frame/image":{style:function(ic){return {opacity:!ic.replacement&&ic.disabled?0.5:1};
}},"button":{alias:gi,include:gi,style:function(bS){return {padding:[2,8],center:true};
}},"hover-button":{alias:gh,include:gh,style:function(cs){return {decorator:cs.hovered?eI:undefined,textColor:cs.hovered?gd:undefined};
}},"splitbutton":{},"splitbutton/button":ge,"splitbutton/arrow":{alias:ge,include:ge,style:function(ca){return {icon:eK,padding:2,marginLeft:1};
}},"checkbox":{alias:gh,style:function(k){var m;

if(k.checked&&k.focused){m=fv;
}else if(k.checked&&k.disabled){m=cY;
}else if(k.checked&&k.pressed){m=eB;
}else if(k.checked&&k.hovered){m=cz;
}else if(k.checked){m=eT;
}else if(k.focused){m=dd;
}else if(k.pressed){m=fS;
}else if(k.hovered){m=em;
}else{m=cK;
}var l=k.invalid&&!k.disabled?di:dn;
return {icon:dp+m+l+gL,gap:6};
}},"radiobutton":{alias:gh,style:function(bP){var bR;

if(bP.checked&&bP.focused){bR=dy;
}else if(bP.checked&&bP.disabled){bR=cW;
}else if(bP.checked&&bP.pressed){bR=fl;
}else if(bP.checked&&bP.hovered){bR=fk;
}else if(bP.checked){bR=fA;
}else if(bP.focused){bR=fj;
}else if(bP.pressed){bR=fr;
}else if(bP.hovered){bR=dg;
}else{bR=fM;
}var bQ=bP.invalid&&!bP.disabled?di:dn;
return {icon:dp+bR+bQ+gL,gap:6};
}},"textfield":{style:function(hs){var hx;
var hv=!!hs.focused;
var hw=!!hs.invalid;
var ht=!!hs.disabled;

if(hv&&hw&&!ht){hx=eD;
}else if(hv&&!hw&&!ht){hx=gn;
}else if(ht){hx=eF;
}else if(!hv&&hw&&!ht){hx=eH;
}else{hx=eG;
}var hu;

if(hs.disabled){hu=eM;
}else if(hs.showingPlaceholder){hu=dC;
}else{hu=gI;
}return {decorator:hx,padding:[2,4,1],textColor:hu};
}},"textarea":{include:fI,style:function(bA){return {padding:4};
}},"spinner":{style:function(hy){var hC;
var hA=!!hy.focused;
var hB=!!hy.invalid;
var hz=!!hy.disabled;

if(hA&&hB&&!hz){hC=eD;
}else if(hA&&!hB&&!hz){hC=gn;
}else if(hz){hC=eF;
}else if(!hA&&hB&&!hz){hC=eH;
}else{hC=eG;
}return {decorator:hC};
}},"spinner/textfield":{style:function(ib){return {marginRight:2,padding:[2,4,1],textColor:ib.disabled?eM:gI};
}},"spinner/upbutton":{alias:gi,include:gi,style:function(bX){return {icon:fg,padding:bX.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"spinner/downbutton":{alias:gi,include:gi,style:function(gN){return {icon:dJ,padding:gN.pressed?[2,2,0,4]:[1,3,1,3],shadow:undefined};
}},"datefield":cI,"datefield/button":{alias:cP,include:cP,style:function(cq){return {icon:fy,padding:[0,3],decorator:undefined};
}},"datefield/textfield":fD,"datefield/list":{alias:dK,include:dK,style:function(f){return {decorator:undefined};
}},"groupbox":{style:function(bB){return {legendPosition:fh};
}},"groupbox/legend":{alias:gh,style:function(bW){return {padding:[1,0,1,4],textColor:bW.invalid?fE:cL,font:gb};
}},"groupbox/frame":{style:function(cp){return {padding:12,decorator:fz};
}},"check-groupbox":eL,"check-groupbox/legend":{alias:cK,include:cK,style:function(d){return {padding:[1,0,1,4],textColor:d.invalid?fE:cL,font:gb};
}},"radio-groupbox":eL,"radio-groupbox/legend":{alias:fM,include:fM,style:function(p){return {padding:[1,0,1,4],textColor:p.invalid?fE:cL,font:gb};
}},"scrollarea":{style:function(bY){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(bp){return {backgroundColor:fN};
}},"scrollarea/pane":gg,"scrollarea/scrollbar-x":gr,"scrollarea/scrollbar-y":gr,"scrollbar":{style:function(gU){if(gU[el]){return {};
}return {width:gU.horizontal?undefined:16,height:gU.horizontal?16:undefined,decorator:gU.horizontal?ds:gz,padding:1};
}},"scrollbar/slider":{alias:dB,style:function(be){return {padding:be.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:gi,style:function(hp){var hq=hp.horizontal?gF:cy;

if(hp.disabled){hq+=de;
}return {decorator:hq,minHeight:hp.horizontal?undefined:9,minWidth:hp.horizontal?9:undefined};
}},"scrollbar/button":{alias:gi,include:gi,style:function(bJ){var bK=ee;

if(bJ.left){bK+=er;
}else if(bJ.right){bK+=du;
}else if(bJ.up){bK+=gx;
}else{bK+=ew;
}
if(bJ.left||bJ.right){return {padding:[0,0,0,bJ.left?3:4],icon:bK,width:15,height:14};
}else{return {padding:[0,0,0,2],icon:bK,width:14,height:15};
}}},"scrollbar/button-begin":cN,"scrollbar/button-end":cN,"slider":{style:function(hg){var hk;
var hi=!!hg.focused;
var hj=!!hg.invalid;
var hh=!!hg.disabled;

if(hi&&hj&&!hh){hk=eD;
}else if(hi&&!hj&&!hh){hk=gn;
}else if(hh){hk=eF;
}else if(!hi&&hj&&!hh){hk=eH;
}else{hk=eG;
}return {decorator:hk};
}},"slider/knob":{include:gi,style:function(bc){return {decorator:bc.disabled?eg:gF,shadow:undefined,height:14,width:14};
}},"list":{alias:fO,style:function(V){var ba;
var X=!!V.focused;
var Y=!!V.invalid;
var W=!!V.disabled;

if(X&&Y&&!W){ba=eD;
}else if(X&&!Y&&!W){ba=gn;
}else if(W){ba=eF;
}else if(!X&&Y&&!W){ba=eH;
}else{ba=eG;
}return {backgroundColor:fY,decorator:ba};
}},"list/pane":gg,"listitem":{alias:gh,style:function(bu){var bv;

if(bu.dragover){bv=bu.selected?fU:fP;
}else{bv=bu.selected?eI:undefined;
}return {padding:bu.dragover?[4,4,2,4]:4,textColor:bu.selected?gd:undefined,decorator:bv};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:gi,include:gi,style:function(N){return {padding:5,center:true,icon:N.vertical?eK:fK};
}},"slidebar/button-backward":{alias:gi,include:gi,style:function(hN){return {padding:5,center:true,icon:hN.vertical?dl:gE};
}},"tabview":{style:function(he){return {contentPadding:16};
}},"tabview/bar":{alias:dW,style:function(hH){var hI={marginBottom:hH.barTop?-1:0,marginTop:hH.barBottom?-4:0,marginLeft:hH.barRight?-3:0,marginRight:hH.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(hH.barTop||hH.barBottom){hI.paddingLeft=5;
hI.paddingRight=7;
}else{hI.paddingTop=5;
hI.paddingBottom=7;
}return hI;
}},"tabview/bar/button-forward":{include:gH,alias:gH,style:function(cl){if(cl.barTop||cl.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:dP,alias:dP,style:function(r){if(r.barTop||r.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(bN){return {decorator:cX,minHeight:100,marginBottom:bN.barBottom?-1:0,marginTop:bN.barTop?-1:0,marginLeft:bN.barLeft?-1:0,marginRight:bN.barRight?-1:0};
}},"tabview-page":gg,"tabview-page/button":{alias:gh,style:function(G){var M,I=0;
var L=0,H=0,J=0,K=0;

if(G.checked){if(G.barTop){M=ex;
I=[6,14];
J=G.firstTab?0:-5;
K=G.lastTab?0:-5;
}else if(G.barBottom){M=dR;
I=[6,14];
J=G.firstTab?0:-5;
K=G.lastTab?0:-5;
}else if(G.barRight){M=ft;
I=[6,13];
L=G.firstTab?0:-5;
H=G.lastTab?0:-5;
}else{M=et;
I=[6,13];
L=G.firstTab?0:-5;
H=G.lastTab?0:-5;
}}else{if(G.barTop){M=eX;
I=[4,10];
L=4;
J=G.firstTab?5:1;
K=1;
}else if(G.barBottom){M=dt;
I=[4,10];
H=4;
J=G.firstTab?5:1;
K=1;
}else if(G.barRight){M=fw;
I=[4,10];
K=5;
L=G.firstTab?5:1;
H=1;
J=1;
}else{M=eW;
I=[4,10];
J=5;
L=G.firstTab?5:1;
H=1;
K=1;
}}return {zIndex:G.checked?10:5,decorator:M,padding:I,marginTop:L,marginBottom:H,marginLeft:J,marginRight:K,textColor:G.checked?cH:dA};
}},"tabview-page/button/close-button":{alias:gh,style:function(hl){return {icon:fT};
}},"toolbar":{style:function(s){return {decorator:cU,spacing:2};
}},"toolbar/part":{style:function(S){return {decorator:eu,spacing:2};
}},"toolbar/part/container":{style:function(cw){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(bz){return {source:gB,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:gh,style:function(bL){return {marginTop:2,marginBottom:2,padding:(bL.pressed||bL.checked||bL.hovered)&&!bL.disabled||(bL.disabled&&bL.checked)?3:5,decorator:bL.pressed||(bL.checked&&!bL.hovered)||(bL.checked&&bL.disabled)?fd:bL.hovered&&!bL.disabled?cG:undefined};
}},"toolbar-menubutton":{alias:gp,include:gp,style:function(bl){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:gc,include:gc,style:function(t){return {source:dJ};
}},"toolbar-splitbutton":{style:function(c){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:gp,include:gp,style:function(gX){return {icon:eK,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:gp,include:gp,style:function(hr){return {padding:hr.pressed||hr.checked?1:hr.hovered?1:3,icon:eK,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(g){return {decorator:fa,margin:7};
}},"tree":gm,"tree-item":{style:function(hM){return {padding:[2,6],textColor:hM.selected?gd:undefined,decorator:hM.selected?eI:undefined};
}},"tree-item/icon":{include:gc,style:function(hD){return {paddingRight:5};
}},"tree-item/label":fL,"tree-item/open":{include:gc,style:function(hY){var ia;

if(hY.selected&&hY.opened){ia=fc;
}else if(hY.selected&&!hY.opened){ia=gt;
}else if(hY.opened){ia=dL;
}else{ia=gG;
}return {padding:[0,5,0,2],source:ia};
}},"tree-folder":{include:gj,alias:gj,style:function(Q){var R;

if(Q.small){R=Q.opened?dh:cQ;
}else if(Q.large){R=Q.opened?ey:dF;
}else{R=Q.opened?fm:ez;
}return {icon:R};
}},"tree-file":{include:gj,alias:gj,style:function(bG){return {icon:bG.small?dH:bG.large?da:gC};
}},"treevirtual":dm,"treevirtual-folder":{style:function(hn){return {icon:hn.opened?dh:cQ};
}},"treevirtual-file":{include:dN,alias:dN,style:function(hQ){return {icon:dH};
}},"treevirtual-line":{style:function(gT){return {icon:cM};
}},"treevirtual-contract":{style:function(b){return {icon:dL,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(bM){return {icon:gG,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":gk,"treevirtual-only-expand":fJ,"treevirtual-start-contract":gk,"treevirtual-start-expand":fJ,"treevirtual-end-contract":gk,"treevirtual-end-expand":fJ,"treevirtual-cross-contract":gk,"treevirtual-cross-expand":fJ,"treevirtual-end":{style:function(gW){return {icon:cM};
}},"treevirtual-cross":{style:function(hL){return {icon:cM};
}},"tooltip":{include:go,style:function(bo){return {backgroundColor:ef,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":gh,"tooltip-error":{include:gl,style:function(bV){return {textColor:gd,placeMethod:gg,offset:[0,0,0,14],marginTop:-2,position:cJ,showTimeout:100,hideTimeout:10000,decorator:dE,shadow:dX,font:gb};
}},"tooltip-error/atom":gh,"window":{style:function(bI){return {shadow:dw,contentPadding:[10,10,10,10]};
}},"window/pane":{style:function(bF){return {decorator:eN};
}},"window/captionbar":{style:function(gV){return {decorator:gV.active?cA:fq,textColor:gV.active?fF:dr,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(ce){return {margin:[5,0,3,6]};
}},"window/title":{style:function(bk){return {alignY:ga,font:gb,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:gh,style:function(C){return {icon:C.active?C.hovered?eS:fx:fB,margin:[4,8,2,0]};
}},"window/restore-button":{alias:gh,style:function(bb){return {icon:bb.active?bb.hovered?dx:cS:fu,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:gh,style:function(bU){return {icon:bU.active?bU.hovered?dj:eA:fW,margin:[4,8,2,0]};
}},"window/close-button":{alias:gh,style:function(bn){return {icon:bn.active?bn.hovered?fQ:ek:eC,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(F){return {padding:[2,6],decorator:dD,minHeight:18};
}},"window/statusbar-text":{style:function(bd){return {font:dq};
}},"iframe":{style:function(gY){return {decorator:gf};
}},"resizer":{style:function(z){return {decorator:ep};
}},"splitpane":{style:function(hE){return {decorator:fC};
}},"splitpane/splitter":{style:function(gO){return {width:gO.horizontal?3:undefined,height:gO.vertical?3:undefined,backgroundColor:gM};
}},"splitpane/splitter/knob":{style:function(q){return {source:q.horizontal?dG:eO};
}},"splitpane/slider":{style:function(bj){return {width:bj.horizontal?3:undefined,height:bj.vertical?3:undefined,backgroundColor:gM};
}},"selectbox":{alias:gi,include:gi,style:function(hf){return {padding:[2,8]};
}},"selectbox/atom":gh,"selectbox/popup":go,"selectbox/list":{alias:gm},"selectbox/arrow":{include:gc,style:function(bf){return {source:eK,paddingLeft:5};
}},"datechooser":{style:function(hT){var hX;
var hV=!!hT.focused;
var hW=!!hT.invalid;
var hU=!!hT.disabled;

if(hV&&hW&&!hU){hX=eD;
}else if(hV&&!hW&&!hU){hX=gn;
}else if(hU){hX=eF;
}else if(!hV&&hW&&!hU){hX=eH;
}else{hX=eG;
}return {padding:2,decorator:hX,backgroundColor:fY};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:gi,alias:gi,style:function(O){var P={padding:[2,4],shadow:undefined};

if(O.lastYear){P.icon=dc;
P.marginRight=1;
}else if(O.lastMonth){P.icon=gE;
}else if(O.nextYear){P.icon=cC;
P.marginLeft=1;
}else if(O.nextMonth){P.icon=fK;
}return P;
}},"datechooser/last-year-button-tooltip":gl,"datechooser/last-month-button-tooltip":gl,"datechooser/next-year-button-tooltip":gl,"datechooser/next-month-button-tooltip":gl,"datechooser/last-year-button":gs,"datechooser/last-month-button":gs,"datechooser/next-month-button":gs,"datechooser/next-year-button":gs,"datechooser/month-year-label":{style:function(i){return {font:gb,textAlign:fG,textColor:i.disabled?eM:undefined};
}},"datechooser/date-pane":{style:function(hb){return {textColor:hb.disabled?eM:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(bt){return {textColor:bt.disabled?eM:bt.weekend?gK:undefined,textAlign:fG,paddingTop:2,backgroundColor:dI};
}},"datechooser/week":{style:function(hK){return {textAlign:fG,padding:[2,4],backgroundColor:dI};
}},"datechooser/day":{style:function(by){return {textAlign:fG,decorator:by.disabled?undefined:by.selected?eI:undefined,textColor:by.disabled?eM:by.selected?gd:by.otherMonth?gK:undefined,font:by.today?gb:undefined,padding:[2,4]};
}},"combobox":{style:function(u){var y;
var w=!!u.focused;
var x=!!u.invalid;
var v=!!u.disabled;

if(w&&x&&!v){y=eD;
}else if(w&&!x&&!v){y=gn;
}else if(v){y=eF;
}else if(!w&&x&&!v){y=eH;
}else{y=eG;
}return {decorator:y};
}},"combobox/popup":go,"combobox/list":{alias:gm},"combobox/button":{include:gi,alias:gi,style:function(bw){var bx={icon:eK,padding:2};

if(bw.selected){bx.decorator=gD;
}return bx;
}},"combobox/textfield":{include:fI,style:function(a){return {decorator:undefined};
}},"menu":{style:function(br){var bs={decorator:dV,shadow:dO,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:br.submenu||br.contextmenu?gy:ev};

if(br.submenu){bs.position=cJ;
bs.offset=[-2,-3];
}return bs;
}},"menu/slidebar":eV,"menu-slidebar":gg,"menu-slidebar-button":{style:function(hP){return {decorator:hP.hovered?eI:undefined,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:gJ,style:function(D){return {icon:D.hovered?fe:dl};
}},"menu-slidebar/button-forward":{include:gJ,style:function(T){return {icon:T.hovered?fi:eK};
}},"menu-separator":{style:function(hF){return {height:0,decorator:eo,margin:[4,2]};
}},"menu-button":{alias:gh,style:function(B){return {decorator:B.selected?eI:undefined,textColor:B.selected?gd:undefined,padding:[4,6]};
}},"menu-button/icon":{include:gc,style:function(cn){return {alignY:ga};
}},"menu-button/label":{include:fL,style:function(ch){return {alignY:ga,padding:1};
}},"menu-button/shortcut":{include:fL,style:function(gP){return {alignY:ga,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:gc,style:function(ck){return {source:ck.selected?eq:fK,alignY:ga};
}},"menu-checkbox":{alias:eE,include:eE,style:function(gQ){return {icon:!gQ.checked?undefined:gQ.selected?gA:db};
}},"menu-radiobutton":{alias:eE,include:eE,style:function(o){return {icon:!o.checked?undefined:o.selected?eQ:cD};
}},"menubar":{style:function(bD){return {decorator:eR};
}},"menubar-button":{alias:gh,style:function(hO){return {decorator:hO.pressed||hO.hovered?eI:undefined,textColor:hO.pressed||hO.hovered?gd:undefined,padding:[3,8]};
}},"colorselector":gg,"colorselector/control-bar":gg,"colorselector/control-pane":gg,"colorselector/visual-pane":eL,"colorselector/preset-grid":gg,"colorselector/colorbucket":{style:function(hG){return {decorator:gf,width:16,height:16};
}},"colorselector/preset-field-set":eL,"colorselector/input-field-set":eL,"colorselector/preview-field-set":eL,"colorselector/hex-field-composite":gg,"colorselector/hex-field":fI,"colorselector/rgb-spinner-composite":gg,"colorselector/rgb-spinner-red":gq,"colorselector/rgb-spinner-green":gq,"colorselector/rgb-spinner-blue":gq,"colorselector/hsb-spinner-composite":gg,"colorselector/hsb-spinner-hue":gq,"colorselector/hsb-spinner-saturation":gq,"colorselector/hsb-spinner-brightness":gq,"colorselector/preview-content-old":{style:function(bm){return {decorator:gf,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(hd){return {decorator:gf,backgroundColor:fY,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(cr){return {decorator:gf,margin:5};
}},"colorselector/brightness-field":{style:function(E){return {decorator:gf,margin:[5,7]};
}},"colorselector/hue-saturation-pane":gg,"colorselector/hue-saturation-handle":gg,"colorselector/brightness-pane":gg,"colorselector/brightness-handle":gg,"colorpopup":{alias:go,include:go,style:function(bh){return {padding:5,backgroundColor:fN};
}},"colorpopup/field":{style:function(id){return {decorator:gf,margin:2,width:14,height:14,backgroundColor:fY};
}},"colorpopup/selector-button":ge,"colorpopup/auto-button":ge,"colorpopup/preview-pane":eL,"colorpopup/current-preview":{style:function(bO){return {height:20,padding:4,marginLeft:4,decorator:gf,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(ci){return {height:20,padding:4,marginRight:4,decorator:gf,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:ge,include:ge,style:function(hS){return {icon:fo};
}},"colorpopup/colorselector-cancelbutton":{alias:ge,include:ge,style:function(hJ){return {icon:eY};
}},"table":{alias:gg,style:function(bE){return {decorator:dm};
}},"table-header":{},"table/statusbar":{style:function(U){return {decorator:fs,padding:[0,2]};
}},"table/column-button":{alias:gi,style:function(e){return {decorator:dv,padding:3,icon:cE};
}},"table-column-reset-button":{include:eE,alias:eE,style:function(){return {icon:es};
}},"table-scroller":gg,"table-scroller/scrollbar-x":gr,"table-scroller/scrollbar-y":gr,"table-scroller/header":{style:function(j){return {decorator:eh};
}},"table-scroller/pane":{style:function(cm){return {backgroundColor:ej};
}},"table-scroller/focus-indicator":{style:function(bT){return {decorator:dY};
}},"table-scroller/resize-line":{style:function(h){return {backgroundColor:fX,width:2};
}},"table-header-cell":{alias:gh,style:function(cx){return {minWidth:13,minHeight:20,padding:cx.hovered?[3,4,2,4]:[3,4],decorator:cx.hovered?eP:dU,sortIcon:cx.sorted?(cx.sortedAscending?ff:cB):undefined};
}},"table-header-cell/label":{style:function(bi){return {minWidth:0,alignY:ga,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(hc){return {alignY:ga,alignX:cO};
}},"table-header-cell/icon":{style:function(bg){return {minWidth:0,alignY:ga,paddingRight:5};
}},"table-editor-textfield":{include:fI,style:function(cd){return {decorator:undefined,padding:[2,2],backgroundColor:fY};
}},"table-editor-selectbox":{include:dQ,alias:dQ,style:function(bq){return {padding:[0,2],backgroundColor:fY};
}},"table-editor-combobox":{include:cI,alias:cI,style:function(bH){return {decorator:undefined,backgroundColor:fY};
}},"progressive-table-header":{alias:gg,style:function(hm){return {decorator:cF};
}},"progressive-table-header-cell":{alias:gh,style:function(ha){return {minWidth:40,minHeight:25,paddingLeft:6,decorator:en};
}},"app-header":{style:function(hR){return {font:gb,textColor:gd,padding:[8,12],decorator:eb};
}},"virtual-list":gm,"virtual-list/row-layer":ec,"row-layer":{style:function(gS){return {colorEven:fF,colorOdd:fb};
}},"column-layer":gg,"cell":{style:function(n){return {textColor:n.selected?gd:cR,padding:[3,6],font:dM};
}},"cell-string":eJ,"cell-number":{include:eJ,style:function(ho){return {textAlign:cO};
}},"cell-image":eJ,"cell-boolean":{include:eJ,style:function(A){return {iconTrue:dT,iconFalse:cT};
}},"cell-atom":eJ,"cell-date":eJ,"cell-html":eJ,"htmlarea":{"include":gg,style:function(co){return {backgroundColor:fF};
}}}});
})();
(function(){var p="contextmenu",o="help",n="qx.client",m="changeGlobalCursor",l="abstract",k="Boolean",j="root",i="",h=" !important",g="_applyGlobalCursor",c="_applyNativeHelp",f=";",d="qx.ui.root.Abstract",b="String",a="*";
qx.Class.define(d,{type:l,extend:qx.ui.core.Widget,include:[qx.ui.core.MChildrenHandling,qx.ui.core.MBlocker,qx.ui.window.MDesktop],construct:function(){arguments.callee.base.call(this);
qx.ui.core.FocusHandler.getInstance().addRoot(this);
qx.ui.core.queue.Visibility.add(this);
this.initNativeHelp();
},properties:{appearance:{refine:true,init:j},enabled:{refine:true,init:true},focusable:{refine:true,init:true},globalCursor:{check:b,nullable:true,themeable:true,apply:g,event:m},nativeContextMenu:{refine:true,init:false},nativeHelp:{check:k,init:false,apply:c}},members:{__rb:null,isRootWidget:function(){return true;
},getLayout:function(){return this._getLayout();
},_applyGlobalCursor:qx.core.Variant.select(n,{"mshtml":function(q,r){},"default":function(y,z){var A=qx.bom.Stylesheet;
var B=this.__rb;

if(!B){this.__rb=B=A.createElement();
}A.removeAllRules(B);

if(y){A.addRule(B,a,qx.bom.element.Cursor.compile(y).replace(f,i)+h);
}}}),_applyNativeContextMenu:function(u,v){if(u){this.removeListener(p,this._onNativeContextMenu,this,true);
}else{this.addListener(p,this._onNativeContextMenu,this,true);
}},_onNativeContextMenu:function(e){if(e.getTarget().getNativeContextMenu()){return;
}e.preventDefault();
},_applyNativeHelp:qx.core.Variant.select(n,{"mshtml":function(s,t){if(t===false){qx.bom.Event.removeNativeListener(document,o,qx.lang.Function.returnFalse);
}
if(s===false){qx.bom.Event.addNativeListener(document,o,qx.lang.Function.returnFalse);
}},"default":function(){}})},destruct:function(){this.__rb=null;
},defer:function(w,x){qx.ui.core.MChildrenHandling.remap(x);
}});
})();
(function(){var r="relative",q="qx.client",p="resize",o="mshtml",n="height",m="",l="px",k="position",h="qx.ui.root.Inline",g="$$widget",c="opera",f="div",d="left",b="hidden",a="appear";
qx.Class.define(h,{extend:qx.ui.root.Abstract,include:[qx.ui.core.MLayoutHandling],construct:function(D,E,F){this.__xt=D;
D.style.overflow=b;
D.style.textAlign=d;
this.__xu=E||false;
this.__xv=F||false;
this.__xw();
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Basic());
qx.ui.core.queue.Layout.add(this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
if(qx.core.Variant.isSet(q,c)){this.setSelectable(true);
}if(qx.core.Variant.isSet(q,o)){this.setKeepFocus(true);
}},members:{__xu:false,__xv:false,__xt:null,__xw:function(){if(this.__xu||this.__xv){var A=qx.bom.element.Dimension.getSize(this.__xt);

if(this.__xu&&A.width<1){throw new Error("The root element "+this.__xt+" of "+this+" needs a width when its width size should be used!");
}
if(this.__xv){if(A.height<1){throw new Error("The root element "+this.__xt+" of "+this+" needs a height when its height size should be used!");
}if(A.height>=1&&qx.bom.element.Style.get(this.__xt,n,3)==m){qx.bom.element.Style.set(this.__xt,n,A.height+l);
}}qx.event.Registration.addListener(this.__xt,p,this._onResize,this);
}},_createContainerElement:function(){var s=this.__xt;

if(this.__xu||this.__xv){var w=document.createElement(f);
s.appendChild(w);
if(qx.core.Variant.isSet(q,o)&&qx.bom.client.Engine.VERSION==6){var v=qx.dom.Node.getBodyElement(s);
var u;
var y;
var x=false;
var t=qx.dom.Hierarchy.getAncestors(s);

for(var i=0,j=t.length;i<j;i++){u=t[i];

if(u!=v){y=qx.bom.element.Style.get(u,k);

if(y==r){x=true;
break;
}}else{break;
}}
if(x){s.style.position=r;
}}}else{w=s;
}var z=new qx.html.Root(w);
w.style.position=r;
z.setAttribute(g,this.toHashCode());
qx.event.Timer.once(function(e){this.fireEvent(a);
},this,0);
return z;
},_onResize:function(e){var M=e.getData();

if((M.oldWidth!==M.width)&&this.__xu||(M.oldHeight!==M.height)&&this.__xv){qx.ui.core.queue.Layout.add(this);
}},_computeSizeHint:function(){var K=this.__xu;
var H=this.__xv;

if(!K||!H){var G=arguments.callee.base.call(this);
}else{G={};
}var L=qx.bom.element.Dimension;

if(K){var J=L.getContentWidth(this.__xt);
G.width=J;
G.minWidth=J;
G.maxWidth=J;
}
if(H){var I=L.getContentHeight(this.__xt);
G.height=I;
G.minHeight=I;
G.maxHeight=I;
}return G;
}},defer:function(B,C){qx.ui.core.MLayoutHandling.remap(C);
},destruct:function(){qx.event.Registration.removeListener(this.__xt,p,this._onResize,this);
this.__xt=null;
}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var b="abstract",a="qx.application.AbstractGui";
qx.Class.define(a,{type:b,extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,members:{__qJ:null,_createRootWidget:function(){throw new Error("Abstract method call");
},getRoot:function(){return this.__qJ;
},main:function(){qx.theme.manager.Meta.getInstance().initialize();
qx.ui.tooltip.Manager.getInstance();
this.__qJ=this._createRootWidget();
},finalize:function(){this.render();
},render:function(){qx.ui.core.queue.Manager.flush();
},close:function(c){},terminate:function(){}},destruct:function(){this.__qJ=null;
}});
})();
(function(){var a="qx.application.Inline";
qx.Class.define(a,{extend:qx.application.AbstractGui,members:{_createRootWidget:function(){return new qx.ui.root.Page(document);
}}});
})();
(function(){var o="div",n="resize",m="qx.ui.root.Page",l="gecko",k="paddingLeft",j="$$widget",i="qx.client",h="left",g="paddingTop",f="qxIsRootPage",d="absolute";
qx.Class.define(m,{extend:qx.ui.root.Abstract,construct:function(t){this.__xx=t;
arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Basic());
this.setZIndex(10000);
qx.ui.core.queue.Layout.add(this);
this.addListener(n,this.__xz,this);
qx.ui.core.FocusHandler.getInstance().connectTo(this);
},members:{__xy:null,__xx:null,_createContainerElement:function(){var q=this.__xx.createElement(o);
this.__xx.body.appendChild(q);
var p=new qx.html.Root(q);
p.setStyles({position:d,textAlign:h});
p.setAttribute(j,this.toHashCode());
if(qx.core.Variant.isSet(i,l)){p.setAttribute(f,1);
}return p;
},_createContentElement:function(){return new qx.html.Element(o);
},_computeSizeHint:function(){var u=qx.bom.Document.getWidth(this._window);
var v=qx.bom.Document.getHeight(this._window);
return {minWidth:u,width:u,maxWidth:u,minHeight:v,height:v,maxHeight:v};
},__xz:function(e){this.getContainerElement().setStyles({width:0,height:0});
this.getContentElement().setStyles({width:0,height:0});
},supportsMaximize:function(){return false;
},_applyPadding:function(r,s,name){if(r&&(name==g||name==k)){throw new Error("The root widget does not support 'left', or 'top' paddings!");
}arguments.callee.base.call(this,r,s,name);
},_applyDecorator:function(a,b){arguments.callee.base.call(this,a,b);

if(!a){return;
}var c=this.getDecoratorElement().getInsets();

if(c.left||c.top){throw new Error("The root widget does not support decorators with 'left', or 'top' insets!");
}}},destruct:function(){this.__xx=null;
}});
})();
(function(){var f="modern-display",e="bold",d="window",c="showcase.page.theme.calc.theme.appearance.Modern",b="main",a="button";
qx.Theme.define(c,{appearances:{"modern-calculator":d,"modern-calculator-button":a,"modern-display":{style:function(i){return {decorator:b,height:40,padding:3,marginBottom:10};
}},"modern-display/label":{style:function(g){return {font:e,marginLeft:5};
}},"modern-display/memory":{style:function(h){return {marginLeft:5};
}},"modern-display/operation":{style:function(j){return {marginLeft:50};
}},"modern-calculator/display":f}});
})();
(function(){var j="solid",i="white",h="listitem",g="black",f="widget",e="preview-list/scrollbar-x/button",d="shadow-window",c="text-title",b="#F3FFD1",a="showcase/images/headerback.png",D="sans-serif",C="scale",B="showcase/images/contentbackground.gif",A="Trebuchet MS",z="#444444",y="#134275",x="pointer",w="legend",v="repeat-y",u="group",q="text-label",r="Lucida Grande",o="showcase/images/tag-hor.png",p="top",m="invalid",n="default",k="Verdana",l="label",s="showcase.theme.Appearance",t="atom";
qx.Theme.define(s,{extend:qx.theme.modern.Appearance,include:[showcase.page.theme.calc.theme.appearance.Black,showcase.page.theme.calc.theme.appearance.Modern],appearances:{"root":{style:function(K){return {backgroundColor:i,textColor:q,font:n};
}},"page-preview":{alias:h,include:h,style:function(L){return {iconPosition:p,padding:[-10,-6,8,-6],gap:-20,decorator:null,cursor:x};
}},"page-preview/label":{include:l,style:function(I){return {textColor:I.selected?z:b,padding:[6,15],height:35,decorator:I.selected?u:null,font:qx.bom.Font.fromConfig({size:20,family:[A,r,k,D]}),zIndex:50};
}},"preview-list":{style:function(J){return {backgroundColor:y,decorator:new qx.ui.decoration.Single().set({bottom:[1,j,g],backgroundImage:a,backgroundRepeat:C}),shadow:d,zIndex:111,padding:5};
}},"preview-list/scrollbar-x/slider":f,"preview-list/scrollbar-x":f,"preview-list/scrollbar-x/button":{style:function(H){return {width:0,height:0};
}},"preview-list/scrollbar-x/button-begin":e,"preview-list/scrollbar-x/button-end":e,"preview-list/scrollbar-x/slider/knob":{style:function(E){return {decorator:new qx.ui.decoration.HBox(o),opacity:qx.bom.client.Engine.MSHTML?1:(E.hovered?1:0.6),height:12};
}},"separator":{style:function(O){return {backgroundColor:g,decorator:new qx.ui.decoration.Single().set({top:[1,j,i],bottom:[1,j,i]}),height:7};
}},"stack":{style:function(G){return {marginTop:qx.bom.client.Feature.CSS_POINTER_EVENTS?0:8};
}},"content-container":{style:function(F){return {padding:0};
}},"description":{style:function(M){return {width:300,zIndex:122,shadow:d,padding:7,decorator:new qx.ui.decoration.Background().set({backgroundImage:B,backgroundRepeat:v})};
}},"groupbox/legend":{alias:t,style:function(N){return {padding:[1,0,1,4],textColor:N.invalid?m:c,font:w};
}}}});
})();
(function(){var a="qx.ui.layout.Basic";
qx.Class.define(a,{extend:qx.ui.layout.Abstract,members:{verifyLayoutProperty:null,renderLayout:function(k,m){var q=this._getLayoutChildren();
var n,p,o,r,top;
for(var i=0,l=q.length;i<l;i++){n=q[i];
p=n.getSizeHint();
o=n.getLayoutProperties();
r=(o.left||0)+n.getMarginLeft();
top=(o.top||0)+n.getMarginTop();
n.renderLayout(r,top,p.width,p.height);
}},_computeSizeHint:function(){var g=this._getLayoutChildren();
var d,j,e;
var h=0,f=0;
var b,c;
for(var i=0,l=g.length;i<l;i++){d=g[i];
j=d.getSizeHint();
e=d.getLayoutProperties();
b=j.width+(e.left||0)+d.getMarginLeft()+d.getMarginRight();
c=j.height+(e.top||0)+d.getMarginTop()+d.getMarginBottom();

if(b>h){h=b;
}
if(c>f){f=c;
}}return {width:h,height:f};
}}});
})();
(function(){var j="Table",i="qx.ui.table.Table",h="Column auto sizing",g="Table with 10000 rows and 50 columns",f="Filtered Table Model",e="in that the table data can be of any length (e.g. hundreds of thousands",d="The table is a very powerful widget. It is “virtual” ",c="Custom cell renderers like the boolean cell renderer can be configured.",b="Click on the column header to sort the column.",a="Table with a fixed first column",E="Windowed cell editor",D="Table selection modes",C="table",B="showcase.page.table.Page",A="Cell editors",z="Remote table model",y="Custom header renderers as shown in the “Explicit” column can be used.",x="Drag the column header to reorder.",w=" rendered. The data you currently see is fetched from a ",v="Conditional cell renderer",q="<a href='http://developer.yahoo.com/yql/' target='_blank'>YQL</a> ",r="Basic table",o=" of rows or more) yet only the rows which are actually being viewed are",p="Use the column drop-down menu in the upper right corner.",m="Drag the column header separator to resize the columns.",n="showcase/table/icon.png",k="service so it's always up to date.",l="Table events",s="Column context menus",t="showcase.page.table.Content",u="Resize the window to see the table resize.";
qx.Class.define(B,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:j,part:C,icon:n,contentClass:t,description:showcase.page.DescriptionBuilder.build(j,this.__xA,this.__xB,this.__xC,this.__xD,this.__xE,this.__xF)});
},members:{__xA:d+e+o+w+q+k,__xB:{"Sorting":b,"Reordering":x,"Column Resizing":m,"Hide Columns":p,"Table Resize":u},__xC:{"Cell Renderer":c,"Header Renderer":y},__xD:{"remote_table_model":z},__xE:{"#table~Table.html":r,"#table~Table_Cell_Editor.html":A,"#table~Table_Conditional.html":v,"#table~Table_Context_Menu.html":s,"#table~Table_Events.html":l,"#table~Table_Filtered_Model.html":f,"#table~Table_Huge.html":g,"#table~Table_Meta_Columns.html":a,"#table~Table_Resize_Columns.html":h,"#table~Table_Selection.html":D,"#table~Table_Window_Editor.html":E},__xF:{"#qx.ui.table.Table":i}}});
})();
(function(){var p="Drag &amp; Drop",o="Drag event in the Widget",n="showcase.page.dragdrop.Page",m="You can also move items back to the shop.",l="right displays the shopping cart. The main idea of this demo is to ",k="Drag &amp; Drop with lists",j="showcase/dragdrop/icon.png",i="You can reorder both lists.",h="Drag &amp; Drop Cursor",g="Drag & Drop",c="dragdrop",f="showcase.page.dragdrop.Content",e="illustrate the drag & drop feature.",b="The list on the left contains all available items while the list on the ",a="Try moving an item to the cart.",d="These two list widgets simulate a shopping system. ";
qx.Class.define(n,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:g,part:c,icon:j,contentClass:f,description:showcase.page.DescriptionBuilder.build(p,this.__xG,this.__xH,this.__xI,this.__xJ,this.__xK,this.__xL)});
},members:{__xG:d+b+l+e,__xH:{"Drag":a,"Reorder":i,"Move":m},__xI:null,__xJ:{"ui_dragdrop":p},__xK:{"#ui~DragDrop.html":k},__xL:{"#qx.ui.core.Widget~drag":o,"#qx.ui.core.DragDropCursor":h}}});
})();
(function(){var j="Data Binding",i="Form Binding Demo",h="The data is loaded from twitter in real time via JSONP.",g="binding. The demo fetches the data and binds the result to the list. ",f="JSONP Data Store",e="Main Data Binding API Documentation",d="showcase/databinding/icon.png",c="Single Value Binding Demo",b="Clicking a tweet in the list shows the details.",a="showcase.page.databinding.Content",B="Enter your twitter username in the text field and press \"Show\" to see your recent tweets.",A="showcase.page.databinding.Page",z="Flickr Foto Search",y="Controller",x="Twitter offers a REST / JSONP API, making it a perfect match for data ",w="Data Stores",v="data",u="The twitter demo illustrates the use of data binding. ",t="Tree Binding Demo",s="Data Binding Concepts",q="The friends button displays the list of followers (Requires credentials).",r="A binding connects the model to the list view.",o="List Binding Demo",p="List Controller",m="Clicking on a tweet will invoke a second binding which displays the ",n="Object Controller",k="selected tweet in the detail view right beside the list.",l="Fundamental Layer";
qx.Class.define(A,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:j,part:v,icon:d,contentClass:a,description:showcase.page.DescriptionBuilder.build(j,this.__xM,this.__xN,this.__xO,this.__xP,this.__xQ,this.__xR)});
},members:{__xM:u+x+g+m+k,__xN:{"Detail View":b,"Friends":q,"Change Tweet":B},__xO:{"Loading Data":h,"Binding":r},__xP:{"data_binding":s,"data_binding/single_value_binding":l,"data_binding/controller":y,"data_binding/stores":w},__xQ:{"#data~SingleValueBinding.html":c,"#data~ListControllerWith3Widgets.html":o,"#data~TreeController.html":t,"#data~FormController.html":i,"#data~Flickr.html":z},__xR:{"#qx.data":e,"#qx.data.store.Jsonp":f,"#qx.data.controller.List":p,"#qx.data.controller.Object":n}}});
})();
(function(){var h="__xT",g="qx.io.PartLoader",f="load",d="partLoaded",c="__xS",b="singleton",a="qx.event.type.Data";
qx.Class.define(g,{type:b,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__xS=[];
var p=this._getUris();

for(var i=0;i<p.length;i++){this.__xS.push(new qx.io.part.Package(p[i],i,i==0));
}this.__xT={};
var m=qx.$$loader.parts;

for(var name in m){var l=m[name];
var o=[];

for(var i=0;i<l.length;i++){o.push(this.__xS[l[i]]);
}var n=new qx.io.part.Part(name,o);
n.addListener(f,function(e){this.fireDataEvent(d,e.getTarget());
},this);
this.__xT[name]=n;
}},events:{"partLoaded":a},statics:{require:function(j,k,self){this.getInstance().require(j,k,self);
}},members:{require:function(t,u,self){var u=u||function(){};
var self=self||window;

if(qx.lang.Type.isString(t)){t=[t];
}var x=[];

for(var i=0;i<t.length;i++){x.push(this.getPart(t[i]));
}var w=0;
var v=function(){w+=1;

if(w>=x.length){u.call(self);
}};

for(var i=0;i<x.length;i++){x[i].load(v,this);
}},__xS:null,__xT:null,getPart:function(name){var s=this.__xT[name];

if(!s){throw new Error("No such part: "+name);
}return s;
},_getUris:function(){var q=qx.$$loader.uris;
var r=[];

for(var i=0;i<q.length;i++){r.push(this._decodeUris(q[i]));
}return r;
},_decodeUris:qx.$$loader.decodeUris},destruct:function(){this._disposeObjects(h,c);
}});
})();
(function(){var j="Internationalization",i="files, as defined by GNU <em>gettext</em> tools. Many ",h="showcase/i18n/icon.png",g="showcase.page.i18n.Page",f="i18n",e="Localization demo",d="the language. All labels on the page will be translated, including ",c=" locales in its user interface. qooxdoo has full translation support ",b="labels in standard qooxdoo widgets like the calendar.",a="keyboard shortcuts are localized.",z="open source tools can process those translation files.",y="Languages",x="changing the country code from <em>United States</em> to ",w='Internationalization (or \"I18N\" for short) is all about making',v="The first select box on the left lets you change the country code. ",u="qx.locale.*",t="showcase.page.i18n.Content",s="The command menu button in the lower left opens a popup menu. Even the ",r="and comprises locale information of virtually every country in the world.",q="<em>Great Britain</em>. You will see that e.g. the start of the week ",o="changes from Sunday to Monday.",p="Translation data is extracted into standard <em>.po</em> ",m="The country code defines things like date or number formats. Try ",n=" a system support different natural languages and",k="All widgets are designed in a way that allows for locale switching in the running application.",l="Hit one of the flag buttons on the top to change ";
qx.Class.define(g,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:y,part:f,icon:h,contentClass:t,description:showcase.page.DescriptionBuilder.build(j,this.__xU,this.__xV,this.__xW,this.__xX,this.__xY,this.__ya)});
},members:{__xU:w+n+c+r,__xV:{"Change the language":l+d+b,"Change the country":v+m+x+q+o,"Open the command menu":s+a},__xW:{"Standards based translation":p+i+z,"CLDR":"Localisation data like date and time formats are taken from the "+"<a href='http://cldr.unicode.org/'>Unicode Common Locale Data Repository</a> (CLDR). This "+"guarantees that qooxdoo uses the standardized data for even the smallest "+"countries.","Live locale switching":k},__xX:{"internationalization":j},__xY:{"#showcase~Localization.html":e},__ya:{"#qx.locale":u}}});
})();
(function(){var g="_applyDynamic",f="changeSelection",d="Boolean",c="qx.ui.container.Stack";
qx.Class.define(c,{extend:qx.ui.core.Widget,implement:qx.ui.core.ISingleSelection,include:qx.ui.core.MSingleSelectionHandling,construct:function(){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Grow);
this.addListener(f,this.__qh,this);
},properties:{dynamic:{check:d,init:false,apply:g}},members:{_applyDynamic:function(o){var q=this._getChildren();
var p=this.getSelection()[0];
var r;

for(var i=0,l=q.length;i<l;i++){r=q[i];

if(r!=p){if(o){q[i].exclude();
}else{q[i].hide();
}}}},_getItems:function(){return this.getChildren();
},_isAllowEmptySelection:function(){return true;
},_isItemSelectable:function(n){return n.isEnabled();
},__qh:function(e){var z=e.getOldData()[0];
var A=e.getData()[0];

if(z){if(this.isDynamic()){z.exclude();
}else{z.hide();
}}
if(A){A.show();
}},add:function(a){this._add(a);
var b=this.getSelection()[0];

if(!b){this.setSelection([a]);
}else if(b!==a){if(this.isDynamic()){a.exclude();
}else{a.hide();
}}},remove:function(x){this._remove(x);

if(this.getSelection()[0]===x){var y=this._getChildren()[0];

if(y){this.setSelection([y]);
}else{this.resetSelection();
}}},indexOf:function(w){return this._indexOf(w);
},getChildren:function(){return this._getChildren();
},previous:function(){var k=this.getSelection()[0];
var h=this._indexOf(k)-1;
var m=this._getChildren();

if(h<0){h=m.length-1;
}var j=m[h];
this.setSelection([j]);
},next:function(){var t=this.getSelection()[0];
var s=this._indexOf(t)+1;
var u=this._getChildren();
var v=u[s]||u[0];
this.setSelection([v]);
}}});
})();
(function(){var u="px",t="no-repeat",s="0",r="-1px",q="-c",p="mshtml",o="horizontal",n="",m="qx.ui.decoration.AbstractBox",l="-l",e='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',k='</div>',h="_applyBaseImage",c="-b",b="-t",g="repeat-x",f="repeat-y",i="abstract",a="-r",j="String",d="qx.client";
qx.Class.define(m,{extend:qx.ui.decoration.Abstract,type:i,construct:function(L,M){arguments.callee.base.call(this);
if(L!=null){this.setBaseImage(L);
}
if(M!=null){this.setInsets(M);
}},properties:{baseImage:{check:j,nullable:true,apply:h}},members:{__yE:null,__yF:null,__yG:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__yE;
},_setOrientation:function(K){this._isHorizontal=K==o;
},getMarkup:function(){if(this.__yE){return this.__yE;
}var v=qx.bom.element.Decoration;
var w=this.__yF;
var x=this.__yG;
var y=[];
y.push(e);

if(this._isHorizontal){y.push(v.create(w.l,t,{top:0,left:0}));
y.push(v.create(w.c,g,{top:0,left:x.left+u}));
y.push(v.create(w.r,t,{top:0,right:0}));
}else{y.push(v.create(w.t,t,{top:0,left:0}));
y.push(v.create(w.c,f,{top:x.top+u,left:x.left+u}));
y.push(v.create(w.b,t,{bottom:0,left:0}));
}y.push(k);
return this.__yE=y.join(n);
},resize:function(N,O,P){N.style.width=O+u;
N.style.height=P+u;
var Q=this.__yG;

if(this._isHorizontal){var innerWidth=O-Q.left-Q.right;
N.childNodes[1].style.width=innerWidth+u;
}else{var innerHeight=P-Q.top-Q.bottom;
N.childNodes[1].style.height=innerHeight+u;
}
if(qx.core.Variant.isSet(d,p)){if(qx.bom.client.Engine.VERSION<7||(qx.bom.client.Feature.QUIRKS_MODE&&qx.bom.client.Engine.VERSION<8)){if(this._isHorizontal){N.childNodes[2].style.marginRight=(O%2==1)?r:s;
}else{N.childNodes[2].style.marginBottom=(P%2==1)?r:s;
}}}},tint:function(z,A){},_applyBaseImage:function(B,C){{};
var D=qx.util.ResourceManager.getInstance();

if(B){var F=qx.util.AliasManager.getInstance();
var H=F.resolve(B);
var I=/(.*)(\.[a-z]+)$/.exec(H);
var G=I[1];
var E=I[2];
var J=this.__yF={t:G+b+E,b:G+c+E,c:G+q+E,l:G+l+E,r:G+a+E};
this.__yG={top:D.getImageHeight(J.t),bottom:D.getImageHeight(J.b),left:D.getImageWidth(J.l),right:D.getImageWidth(J.r)};
}}},destruct:function(){this.__yE=this.__yF=this.__yG=null;
}});
})();
(function(){var b="horizontal",a="qx.ui.decoration.HBox";
qx.Class.define(a,{extend:qx.ui.decoration.AbstractBox,construct:function(c,d){arguments.callee.base.call(this,c,d);
this._setOrientation(b);
}});
})();
(function(){var n="Liberation Sans",m="Arial",l="Lucida Grande",k="sans-serif",j="Tahoma",i="Candara",h="Segoe UI",g="Consolas",f="Courier New",e="Monaco",b="monospace",d="Lucida Console",c="qx.theme.modern.Font",a="DejaVu Sans Mono";
qx.Theme.define(c,{fonts:{"default":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"bold":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?12:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k],bold:true},"small":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?11:10,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[l]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[h,i]:[j,n,m,k]},"monospace":{size:11,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[d,e]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[g]:[g,a,f,b]}}});
})();
(function(){var b="qx.fx.queue.Queue",a="Number";
qx.Class.define(b,{extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
this.__yb=[];
},properties:{limit:{init:Infinity,check:a}},members:{__yc:null,__yb:null,add:function(f){var g=new Date().getTime();
f._startOn+=g;
f._finishOn+=g;

if(this.__yb.length<this.getLimit()){this.__yb.push(f);
}else{f.resetState();
}
if(!this.__yc){this.__yc=qx.lang.Function.periodical(this.loop,15,this);
}},remove:function(c){qx.lang.Array.remove(this.__yb,c);

if(this.__yb.length==0){window.clearInterval(this.__yc);
delete this.__yc;
}},loop:function(){var d=new Date().getTime();

for(var i=0,e=this.__yb.length;i<e;i++){this.__yb[i]&&this.__yb[i].loop(d);
}}},destruct:function(){this.__yb=null;
}});
})();
(function(){var e="__default",d="qx.fx.queue.Manager",c="__yd",b="singleton",a="object";
qx.Class.define(d,{extend:qx.core.Object,type:b,construct:function(){arguments.callee.base.call(this);
this.__yd={};
},members:{__yd:null,getQueue:function(f){if(typeof (this.__yd[f])==a){return this.__yd[f];
}else{return this.__yd[f]=new qx.fx.queue.Queue;
}},getDefaultQueue:function(){return this.getQueue(e);
}},destruct:function(){this._disposeMap(c);
}});
})();
(function(){var d="Number",c="static",b="qx.fx.Transition";
qx.Class.define(b,{type:c,statics:{get:function(j){return qx.fx.Transition[j]||false;
},linear:function(o){return o;
},easeInQuad:function(n){return Math.pow(2,10*(n-1));
},easeOutQuad:function(l){return (-Math.pow(2,-10*l)+1);
},sinodial:function(p){return (-Math.cos(p*Math.PI)/2)+0.5;
},reverse:function(a){return 1-a;
},flicker:function(f){var f=((-Math.cos(f*Math.PI)/4)+0.75)+Math.random()/4;
return f>1?1:f;
},wobble:function(i){return (-Math.cos(i*Math.PI*(9*i))/2)+0.5;
},pulse:function(g,h){h=(typeof (h)==d)?h:5;
return (Math.round((g%(1/h))*h)==0?Math.floor((g*h*2)-(g*h*2)):1-Math.floor((g*h*2)-(g*h*2)));
},spring:function(e){return 1-(Math.cos(e*4.5*Math.PI)*Math.exp(-e*6));
},none:function(m){return 0;
},full:function(k){return 1;
}}});
})();
(function(){var t="focusout",s="interval",r="mouseover",q="mouseout",p="mousemove",o="__qK",n="widget",m="qx.ui.tooltip.ToolTip",l="Boolean",k="_applyCurrent",h="__qN",j="qx.ui.tooltip.Manager",i="tooltip-error",g="singleton",f="__qL";
qx.Class.define(j,{type:g,extend:qx.core.Object,construct:function(){arguments.callee.base.call(this);
qx.event.Registration.addListener(document.body,r,this.__qU,this,true);
this.__qK=new qx.event.Timer();
this.__qK.addListener(s,this.__qR,this);
this.__qL=new qx.event.Timer();
this.__qL.addListener(s,this.__qS,this);
this.__qM={left:0,top:0};
},properties:{current:{check:m,nullable:true,apply:k},showInvalidTooltips:{check:l,init:true}},members:{__qM:null,__qL:null,__qK:null,__qN:null,__qO:null,__qP:function(){if(!this.__qN){this.__qN=new qx.ui.tooltip.ToolTip().set({rich:true});
}return this.__qN;
},__qQ:function(){if(!this.__qO){this.__qO=new qx.ui.tooltip.ToolTip().set({appearance:i});
this.__qO.syncAppearance();
}return this.__qO;
},_applyCurrent:function(a,b){if(b&&qx.ui.core.Widget.contains(b,a)){return;
}if(b){if(!b.isDisposed()){b.exclude();
}this.__qK.stop();
this.__qL.stop();
}var d=qx.event.Registration;
var c=document.body;
if(a){this.__qK.startWith(a.getShowTimeout());
d.addListener(c,q,this.__qV,this,true);
d.addListener(c,t,this.__qW,this,true);
d.addListener(c,p,this.__qT,this,true);
}else{d.removeListener(c,q,this.__qV,this,true);
d.removeListener(c,t,this.__qW,this,true);
d.removeListener(c,p,this.__qT,this,true);
}},__qR:function(e){var z=this.getCurrent();

if(z&&!z.isDisposed()){this.__qL.startWith(z.getHideTimeout());

if(z.getPlaceMethod()==n){z.placeToWidget(z.getOpener());
}else{z.placeToPoint(this.__qM);
}z.show();
}this.__qK.stop();
},__qS:function(e){var A=this.getCurrent();

if(A&&!A.isDisposed()){A.exclude();
}this.__qL.stop();
this.resetCurrent();
},__qT:function(e){var B=this.__qM;
B.left=e.getDocumentLeft();
B.top=e.getDocumentTop();
},__qU:function(e){var E=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!E){return;
}var F;
while(E!=null){var F=E.getToolTip();
var G=E.getToolTipText()||null;
var D=E.getToolTipIcon()||null;

if(qx.Class.hasInterface(E.constructor,qx.ui.form.IForm)&&!E.isValid()){var C=E.getInvalidMessage();
}
if(F||G||D||C){break;
}E=E.getLayoutParent();
}
if(!E){return;
}
if(E.isBlockToolTip()){return;
}if(C&&E.getEnabled()){if(!this.getShowInvalidTooltips()){return;
}var F=this.__qQ().set({label:C});
}else if(!F){var F=this.__qP().set({label:G,icon:D});
}this.setCurrent(F);
F.setOpener(E);
},__qV:function(e){var w=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!w){return;
}var x=qx.ui.core.Widget.getWidgetByElement(e.getRelatedTarget());

if(!x){return;
}var y=this.getCurrent();
if(y&&(x==y||qx.ui.core.Widget.contains(y,x))){return;
}if(x&&w&&qx.ui.core.Widget.contains(w,x)){return;
}if(y&&!x){this.setCurrent(null);
}else{this.resetCurrent();
}},__qW:function(e){var u=qx.ui.core.Widget.getWidgetByElement(e.getTarget());

if(!u){return;
}var v=this.getCurrent();
if(v&&v==u.getToolTip()){this.setCurrent(null);
}}},destruct:function(){qx.event.Registration.removeListener(document.body,r,this.__qU,this,true);
this._disposeObjects(o,f,h);
this.__qM=null;
}});
})();
(function(){var u="Tree",t="Tree folders can display additional information in separate columns.",s="Configurable Tree",r="The two tree views display some hierarchical data ",q="Each tree item has a configurable label and icon.",p="showcase.page.tree.Page",o="Select multiple items, e.g. by holding the Shift key.",n="Tree filled with Data from a JSON file.",m="including folders, icons and labels. The tree in the right window has ",l="Tree using Data Binding",e="Try expanding some folders by using the arrow icon or double clicking.",k="Resize the window to make the tree scrollbars appear.",h="Tree using Data Binding with configuration",c="Tree displays scrollbars if necessary.",b="some additional infomation attached to each item.",g="showcase.page.tree.Content",f="showcase/tree/icon.png",i="The tree namespace",a="The Tree Widget",j="Multi Column Tree",d="tree";
qx.Class.define(p,{extend:showcase.Page,construct:function(){arguments.callee.base.call(this);
this.set({name:u,part:d,icon:f,contentClass:g,description:showcase.page.DescriptionBuilder.build(u,this.__yn,this.__yo,this.__yp,this.__yq,this.__yr,this.__ys)});
},members:{__yn:r+m+b,__yo:{"Expand":e,"Resize":k,"Selection":o},__yp:{"Configurable":q,"Scrolling":c,"Multi Columns":t},__yq:{"widget/tree":a},__yr:{"#widget~Tree.html":s,"#widget~Tree_Columns.html":j,"#data~TreeController.html":l,"#data~JsonToTree.html":n,"#data~ExtendedTree.html":h},__ys:{"#qx.ui.tree":i}}});
})();
(function(){var j="",i="http://demo.qooxdoo.org/",h="qx.version",g="<ul>",f="</ul>",e="<h1>",d="</div>",c="<h2>Features</h2>",b="<li><a href='",a="</h1>",z="</strong>: ",y="http://qooxdoo.org/documentation/1.0/",x="</a></li>",w="<h2>Try This</h2>",v="<h2>Api</h2>",u="<h2>Documentation</h2>",t="/demobrowser/",s="<h2>Demos</h2>",r="showcase.page.DescriptionBuilder",q="' target='_blank'>",o="<div id='description'>",p="/apiviewer/",m="<p>",n="</p>",k="</li>",l="<li><strong>";
qx.Class.define(r,{statics:{_demoPrefix:i+qx.core.Setting.get(h)+t,_apiPrefix:i+qx.core.Setting.get(h)+p,_manualPrefix:y,build:function(H,I,J,K,L,M,N){var O=[];
O.push(o,e,H,a,m,I,n);

if(J){O.push(w,this.__yu(J));
}
if(K){O.push(c,this.__yu(K));
}
if(L){O.push(u,this.__yt(this._manualPrefix,L));
}
if(M){O.push(s,this.__yt(this._demoPrefix,M));
}
if(N){O.push(v,this.__yt(this._apiPrefix,N));
}O.push(d);
return O.join(j);
},__yt:function(A,B){var C=[g];

for(var D in B){C.push(b,A,D,q,B[D],x);
}C.push(f);
return C.join(j);
},__yu:function(E){var F=[g];

for(var G in E){F.push(l,G,z,E[G],k);
}F.push(f);
return F.join(j);
}}});
})();
(function(){var a="showcase.theme.Decoration";
qx.Theme.define(a,{extend:qx.theme.modern.Decoration,include:[showcase.page.theme.calc.theme.Decoration],decorations:{}});
})();
(function(){var g="Liberation Sans",f="Lucida Grande",e="Tahoma",d="Candara",c="Segoe UI",b="showcase.theme.Font",a="Arial";
qx.Theme.define(b,{extend:qx.theme.modern.Font,fonts:{"legend":{size:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?15:14,lineHeight:1.4,family:qx.bom.client.Platform.MAC?[f]:(qx.bom.client.System.WINVISTA||qx.bom.client.System.WIN7)?[c,d]:[e,g,a],bold:true}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b},icons:{}});
})();
(function(){var a="showcase.theme.Theme";
qx.Theme.define(a,{meta:{color:showcase.theme.Color,decoration:showcase.theme.Decoration,font:showcase.theme.Font,icon:qx.theme.icon.Tango,appearance:showcase.theme.Appearance}});
})();
(function(){var k="hovered",j="slider",i="losecapture",h="preview-list",g="mouseover",f="mouseout",e="_knob",d="showcase.ui.PreviewList",c="scrollbar-x",b="knob";
qx.Class.define(d,{extend:qx.ui.form.List,construct:function(){arguments.callee.base.call(this,true);
var a=this.getChildControl(c).getChildControl(j);
this._knob=a.getChildControl(b);
this._knob.addListener(g,function(){this._knob.addState(k);
},this);
this._knob.addListener(f,this._onMouseOut,this);
a.addListener(i,this._onMouseOut,this);
},properties:{appearance:{refine:true,init:h},height:{refine:true,init:null}},members:{_onMouseOut:function(){this._knob.removeState(k);
}},destruct:function(){this._disposeObjects(e);
}});
})();
(function(){var k="complete",j="display",h="_applySelectedPage",g="Boolean",f="showcase/images/welcome.png",e="showcase.Application",d="__yy",c="qx.client",b="__yx",a="stack",I="showcase/images/loading66.gif",H="selection[0]",G="selection[0].readyState",F="none",E="__yA",D="__yv",C="value",B="selection[0].description",A="showcase",z="name",r="icon",s="selectedPage",p="showcase.Page",q="state",n="_applyShowLoadIndicator",o="en_US",l="page-preview",m="__yz",t="50%",u="mshtml",w="update",v="block",y="selection[0].part",x="showLoadIndicator";
qx.Class.define(e,{extend:qx.application.Inline,properties:{selectedPage:{check:p,apply:h,nullable:true},showLoadIndicator:{check:g,init:false,apply:n}},members:{__yv:null,__yw:null,__yx:null,__yy:null,__yz:null,__yA:null,main:function(){arguments.callee.base.call(this);
{};
qx.locale.Manager.getInstance().setLocale(o);
var Y=new qx.ui.layout.Grid();
Y.setColumnFlex(0,1);
Y.setRowFlex(1,1);
var bd=0;
var X=document.getElementById(A);
var S=new qx.ui.root.Inline(X,false,false);
S.set({layout:Y,width:900,minHeight:650,allowGrowX:false,height:null});
var T=new showcase.ui.PreviewList();
S.add(T,{row:bd++,column:0,colSpan:2});
this.__yv=new qx.ui.container.Stack();
this.__yv.set({appearance:a,maxWidth:600,allowGrowX:false});
S.add(this.__yv,{row:bd,column:0});
var W=new qx.ui.basic.Image(f).set({allowGrowX:true,allowGrowY:true,allowShrinkX:true,padding:[5,0,0,180]});
this.__yv.add(W);
this.__yx=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
var ba=new qx.ui.basic.Image(I).set({marginLeft:-33});
this.__yx.add(ba,{left:t,top:200});
this.__yv.add(this.__yx);
this.__yy=new qx.ui.container.Composite(new qx.ui.layout.Canvas());
this.__yv.add(this.__yy);
this.__yA=new showcase.ui.Description();
S.add(this.__yA,{row:bd++,column:1});
this.__yA.exclude();
var bb=new qx.data.Array();
bb.push(new showcase.page.table.Page(),new showcase.page.form.Page(),new showcase.page.tree.Page(),new showcase.page.databinding.Page(),new showcase.page.theme.Page(),new showcase.page.i18n.Page(),new showcase.page.dragdrop.Page(),new showcase.page.htmleditor.Page());
var bc=new qx.data.controller.List(bb,T,z);
bc.setIconPath(r);
bc.bind(H,this,s);
bc.bind(B,this.__yA,C);
bc.bind(G,this,x,{converter:function(Q){return Q!==k;
}});
bc.setDelegate({configureItem:function(K){K.set({appearance:l});
}});
var history=qx.bom.History.getInstance();
bc.bind(y,history,q);
var V=history.getState();

if(V){var U;

for(var i=0;i<bb.getLength();i++){if(bb.getItem(i).getPart()===V){U=bb.getItem(i);
break;
}}
if(U){qx.ui.core.queue.Manager.flush();
bc.getSelection().push(U);
}}},_applyShowLoadIndicator:function(L){if(L){this.__yv.setSelection([this.__yx]);
}else{this.__yv.setSelection([this.__yy]);
}},_applySelectedPage:function(be,bf){if(bf){this._hidePage(bf);
}this._showPage(be);
},_hidePage:function(N){if(this.getSelectedPage()!==N){if(N.getReadyState()==k){N.getContent().getView().hide();
this.__yB();
}}},_showPage:function(M){this.__yA.show();
M.load(function(O){if(this.getSelectedPage()==O){var P=O.getContent().getView();
this.__yy.add(P,{edge:0});
P.show();
this.__yC(P);
}},this);
},__yB:function(){if(this.__yz){this.__yz.cancel();
this.__yz.dispose();
this.__yz=null;
}},__yC:function(J){if(qx.core.Variant.isSet(c,u)){return;
}J.getContentElement().setStyle(j,F,true);
this.__yB();
qx.event.Timer.once(function(){var R=J.getContentElement().getDomElement();
this.__yz=new qx.fx.effect.core.Fade(R);
this.__yz.set({from:0,to:1});
this.__yz.addListenerOnce(w,function(){J.getContentElement().setStyle(j,v);
},this);
this.__yz.start();
},this,0);
}},destruct:function(){this._disposeObjects(D,b,d,E,m);
}});
})();
(function(){var j="}",i="  color: #444444;",h="  font-weight: bold;",g="  line-height: 130%;",f="  font-size: 15px;",e="  font-size: 24px;",d="#description h1 {",c="#i18n td {",b="  color: rgb(131, 179, 0);",a="  text-decoration: underline;",C="  font-size: 12px;",B="  color: #83B300;",A="#description {",z="  padding-left: 10px;",y="#description h2 {",x="#description ul {",w="  font-size: 10px;",v="  padding: 10px 0px 5px 0px;",u="  line-height: 140%;",t='  font-family: Verdana,"Bitstream Vera Sans","Lucida Grande",Tahoma,"Lucida Sans Unicode",Arial,sans-serif;',q="  margin: 10px 0 4px 0;",r="showcase.ui.Description",o="\n",p="#description li {",m="  padding-left: 20px;",n="#description a {",k="description",l="  color: rgb(16, 66, 117);",s="#description a:hover, #description a:active {";
qx.Class.define(r,{extend:qx.ui.basic.Label,construct:function(){arguments.callee.base.call(this);
this.__yD();
this.setRich(true);
this.setSelectable(true);
},properties:{appearance:{refine:true,init:k},allowGrowX:{refine:true,init:false},nativeContextMenu:{init:true,refine:true},allowGrowY:{refine:true,init:true}},members:{__yD:function(){var D=[A,t,i,C,u,z,j,n,a,i,j,s,B,j,y,b,v,f,h,j,d,e,g,q,l,h,j,x,m,j,p,i,j,c,w,j];
qx.bom.Stylesheet.createElement(D.join(o));
}}});
})();
(function(){var a="qx.html.Root";
qx.Class.define(a,{extend:qx.html.Element,construct:function(c){arguments.callee.base.call(this);

if(c!=null){this.useElement(c);
}},members:{useElement:function(b){arguments.callee.base.call(this,b);
this.setRoot(true);
qx.html.Element._modified[this.$$hash]=this;
}}});
})();
(function(){var o="interval",n="-1000px",m="mshtml",l="",k="qx.bom.IframeHistory",j="qx/static/blank.html",i="state",h='<html><body><div id="state">',g='</div></body></html>',f="hidden",b="qx.client",d="undefined",c="absolute";
if(qx.core.Variant.isSet(b,m)){qx.Class.define(k,{extend:qx.bom.History,construct:function(){arguments.callee.base.call(this);
this.__rx();
},members:{__ru:null,__rv:false,__rw:null,_setInitialState:function(){arguments.callee.base.call(this);
this.__rw=this._getHash();
},_setHash:function(z){arguments.callee.base.call(this,z);
this.__rw=this._encode(z);
},_readState:function(){if(!this.__rv){return this._decode(this._getHash());
}var x=this.__ru.contentWindow.document;
var y=x.getElementById(i);
return y?this._decode(y.innerText):l;
},_writeState:function(p){var p=this._encode(p);
this._setHash(p);
this.__rw=p;

try{var q=this.__ru.contentWindow.document;
q.open();
q.write(h+p+g);
q.close();
}catch(w){}},__rx:function(){this.__rB(function(){qx.event.Idle.getInstance().addListener(o,this.__ry,this);
});
},__ry:function(e){var B=null;
var A=this._getHash();

if(!this.__rA(A)){B=this.__rz(A);
}else{B=this._readState();
}
if(qx.lang.Type.isString(B)&&B!=this.getState()){this._onHistoryLoad(B);
}},__rz:function(C){C=this._decode(C);
this._writeState(C);
return C;
},__rA:function(a){return qx.lang.Type.isString(a)&&a==this.__rw;
},__rB:function(r){this.__ru=this.__rC();
document.body.appendChild(this.__ru);
this.__rD(function(){this._writeState(this.getState());

if(r){r.call(this);
}},this);
},__rC:function(){var v=qx.bom.Iframe.create({src:qx.util.ResourceManager.getInstance().toUri(j)});
v.style.visibility=f;
v.style.position=c;
v.style.left=n;
v.style.top=n;
return v;
},__rD:function(s,t,u){if(typeof u===d){u=0;
}
if(!this.__ru.contentWindow||!this.__ru.contentWindow.document){if(u>20){throw new Error("can't initialize iframe");
}qx.event.Timer.once(function(){this.__rD(s,t,++u);
},this,10);
return;
}this.__rv=true;
s.call(t||window);
}},destruct:function(){this.__ru=null;
qx.event.Idle.getInstance().addListener(o,this.__ry,this);
}});
}})();
(function(){var p="String",o="execute",n="qx.ui.menu.Menu",m="_shortcut",l="changeEnabled",k="changeToolTipText",j="Boolean",i="qx.ui.core.Command",h="changeLabel",g="changeMenu",d="changeIcon",f="changeValue",e="_applyShortcut",c="_applyEnabled",b="qx.event.type.Data";
qx.Class.define(i,{extend:qx.core.Object,construct:function(s){arguments.callee.base.call(this);
this._shortcut=new qx.bom.Shortcut(s);
this._shortcut.addListener(o,this.execute,this);
},events:{"execute":b},properties:{enabled:{init:true,check:j,event:l,apply:c},shortcut:{check:p,apply:e,nullable:true},label:{check:p,nullable:true,event:h},icon:{check:p,nullable:true,event:d},toolTipText:{check:p,nullable:true,event:k},value:{nullable:true,event:f},menu:{check:n,nullable:true,event:g}},members:{_shortcut:null,_applyEnabled:function(r){this._shortcut.setEnabled(r);
},_applyShortcut:function(a){this._shortcut.setShortcut(a);
},execute:function(q){this.fireDataEvent(o,q);
},toString:function(){return this._shortcut.toString();
}},destruct:function(){this._disposeObjects(m);
}});
})();
(function(){var m="Unidentified",l="Boolean",k="+",j="short",h="keydown",g="",f="Control",d="keypress",c="-",b="PageUp",T="Escape",S="qx.event.type.Data",R="_applyShortcut",Q="PrintScreen",P="NumLock",O="5",N="8",M="execute",L="Meta",K="0",t="2",u="This message will be made private.",r="Shift",s="You can only specify one non modifier key!",p="3",q="/",n="_applyEnabled",o="String",v="changeEnabled",w="*",C="qx.bom.Shortcut",B="6",E="4",D="1",G="Alt",F="Not a valid key name for a shortcut: ",y="PageDown",J="Whitespaces are not allowed within shortcuts",I="Delete",H="7",x="a",z="z",A="9";
qx.Class.define(C,{extend:qx.core.Object,construct:function(U){arguments.callee.base.call(this);
this.__vM={};
this.__vN=null;

if(U!=null){this.setShortcut(U);
}this.initEnabled();
},events:{"execute":S},properties:{enabled:{init:true,check:l,event:v,apply:n},shortcut:{check:o,apply:R,nullable:true},autoRepeat:{check:l,init:false}},members:{__vM:g,__vN:g,execute:function(bi){this.fireDataEvent(M,bi);
},__vO:function(event){if(this.getEnabled()&&this.__vQ(event)){if(!this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},__vP:function(event){if(this.getEnabled()&&this.__vQ(event)){if(this.isAutoRepeat()){this.execute(event.getTarget());
}event.stop();
}},_applyEnabled:function(bd,be){if(bd){qx.event.Registration.addListener(document.documentElement,h,this.__vO,this);
qx.event.Registration.addListener(document.documentElement,d,this.__vP,this);
}else{qx.event.Registration.removeListener(document.documentElement,h,this.__vO,this);
qx.event.Registration.removeListener(document.documentElement,d,this.__vP,this);
}},_applyShortcut:function(V,W){if(V){if(V.search(/[\s]+/)!=-1){var ba=J;
this.error(ba);
throw new Error(ba);
}this.__vM={"Control":false,"Shift":false,"Meta":false,"Alt":false};
this.__vN=null;
var X;
var a=[];

while(V.length>0&&X!=-1){X=V.search(/[-+]+/);
a.push((V.length==1||X==-1)?V:V.substring(0,X));
V=V.substring(X+1);
}var Y=a.length;

for(var i=0;i<Y;i++){var bb=this.__vS(a[i]);

switch(bb){case f:case r:case L:case G:this.__vM[bb]=true;
break;
case m:var ba=F+a[i];
this.error(ba);
throw ba;
default:if(this.__vN){var ba=s;
this.error(ba);
throw ba;
}this.__vN=bb;
}}}return true;
},matchesKeyEvent:function(e){qx.log.Logger.deprecatedMethodWarning(arguments.callee,u);
return this.__vQ(e);
},__vQ:function(e){var bc=this.__vN;

if(!bc){return ;
}if((!this.__vM.Shift&&e.isShiftPressed())||(this.__vM.Shift&&!e.isShiftPressed())||(!this.__vM.Control&&e.isCtrlPressed())||(this.__vM.Control&&!e.isCtrlPressed())||(!this.__vM.Meta&&e.isMetaPressed())||(this.__vM.Meta&&!e.isMetaPressed())||(!this.__vM.Alt&&e.isAltPressed())||(this.__vM.Alt&&!e.isAltPressed())){return false;
}
if(bc==e.getKeyIdentifier()){return true;
}return false;
},__vR:{esc:T,ctrl:f,print:Q,del:I,pageup:b,pagedown:y,numlock:P,numpad_0:K,numpad_1:D,numpad_2:t,numpad_3:p,numpad_4:E,numpad_5:O,numpad_6:B,numpad_7:H,numpad_8:N,numpad_9:A,numpad_divide:q,numpad_multiply:w,numpad_minus:c,numpad_plus:k},__vS:function(bj){var bk=qx.event.handler.Keyboard;
var bl=m;

if(bk.isValidKeyIdentifier(bj)){return bj;
}
if(bj.length==1&&bj>=x&&bj<=z){return bj.toUpperCase();
}bj=bj.toLowerCase();
var bl=this.__vR[bj]||qx.lang.String.firstUp(bj);

if(bk.isValidKeyIdentifier(bl)){return bl;
}else{return m;
}},toString:function(){var bh=this.__vN;
var bg=[];

for(var bf in this.__vM){if(this.__vM[bf]){bg.push(qx.locale.Key.getKeyName(j,bf));
}}
if(bh){bg.push(qx.locale.Key.getKeyName(j,bh));
}return bg.join(k);
}},destruct:function(){this.setEnabled(false);
this.__vM=this.__vN=null;
}});
})();
(function(){var bw="Control",bv="Left",bu="Meta",bt="Pause",bs="End",br="Down",bq="Ctrl",bp="Home",bo="Apps",bn="Win",bc="Right",bb="Backspace",ba="Space",Y="Up",X="Shift",W="Enter",V="Scroll",U="Alt",T="Escape",S="key_full_Meta",bD="PrintScreen",bE="NumLock",bB="key_short_Alt",bC="key_short_Control_Mac",bz="key_short_Insert",bA="Del",bx="key_full_Enter",by="key_full_Control",bF="qx.locale.Key",bG="Tabulator",bg="key_full_Space",bf="key_short_Meta",bi="key_short_PageUp",bh="key_short_Pause",bk="key_full_Down",bj="key_short_Apps",bm="key_short_Win",bl="key_full_Right",be="key_short_Up",bd="key_full_PageDown",a="key_full_Alt",b="PgDn",c="Esc",d="key_full_Insert",e="key_short_Space",f="key_short_Backspace",g="key_short_Home",h="key_short_Down",i="PgUp",j="_Mac",bK="key_short_CapsLock",bJ="PageUp",bI="key_full_Up",bH="key_full_Home",bO="key_full_Backspace",bN="PageDown",bM="CapsLock",bL="Ins",bQ="key_short_PrintScreen",bP="Tab",C="key_full_Apps",D="key_short_Tab",A="key_short_End",B="_",G="Caps",H="key_short_NumLock",E="Num",F="key_full_Scroll",y="key_short_Left",z="key_short_Scroll",r="key_",q="key_full_Pause",t="key_short_Right",s="key_full_PrintScreen",n="key_full_Win",m="key_full_Control_Mac",p="key_short_Shift",o="key_short_PageDown",l="key_short_Enter",k="key_short_Control",M="Insert",N="key_short_Escape",O="key_full_Tab",P="Print",I="Delete",J="key_full_CapsLock",K="key_full_Escape",L="key_short_Delete",Q="key_full_PageUp",R="key_full_Shift",x="key_full_NumLock",w="key_full_Delete",v="key_full_End",u="key_full_Left";
qx.Class.define(bF,{statics:{getKeyName:function(bW,bX,bY){{};
var cb=r+bW+B+bX;
if(qx.bom.client.Platform.MAC&&bX==bw){cb+=j;
}var ca=qx.locale.Manager.getInstance().translate(cb,[],bY);

if(ca==cb){return qx.locale.Key._keyNames[cb]||bX;
}else{return ca;
}}},defer:function(bR,bS,bT){var bV={};
var bU=qx.locale.Manager;
bV[bU.marktr(f)]=bb;
bV[bU.marktr(D)]=bP;
bV[bU.marktr(e)]=ba;
bV[bU.marktr(l)]=W;
bV[bU.marktr(p)]=X;
bV[bU.marktr(k)]=bq;
bV[bU.marktr(bC)]=bq;
bV[bU.marktr(bB)]=U;
bV[bU.marktr(bK)]=G;
bV[bU.marktr(bf)]=bu;
bV[bU.marktr(N)]=c;
bV[bU.marktr(y)]=bv;
bV[bU.marktr(be)]=Y;
bV[bU.marktr(t)]=bc;
bV[bU.marktr(h)]=br;
bV[bU.marktr(bi)]=i;
bV[bU.marktr(o)]=b;
bV[bU.marktr(A)]=bs;
bV[bU.marktr(g)]=bp;
bV[bU.marktr(bz)]=bL;
bV[bU.marktr(L)]=bA;
bV[bU.marktr(H)]=E;
bV[bU.marktr(bQ)]=P;
bV[bU.marktr(z)]=V;
bV[bU.marktr(bh)]=bt;
bV[bU.marktr(bm)]=bn;
bV[bU.marktr(bj)]=bo;
bV[bU.marktr(bO)]=bb;
bV[bU.marktr(O)]=bG;
bV[bU.marktr(bg)]=ba;
bV[bU.marktr(bx)]=W;
bV[bU.marktr(R)]=X;
bV[bU.marktr(by)]=bw;
bV[bU.marktr(m)]=bw;
bV[bU.marktr(a)]=U;
bV[bU.marktr(J)]=bM;
bV[bU.marktr(S)]=bu;
bV[bU.marktr(K)]=T;
bV[bU.marktr(u)]=bv;
bV[bU.marktr(bI)]=Y;
bV[bU.marktr(bl)]=bc;
bV[bU.marktr(bk)]=br;
bV[bU.marktr(Q)]=bJ;
bV[bU.marktr(bd)]=bN;
bV[bU.marktr(v)]=bs;
bV[bU.marktr(bH)]=bp;
bV[bU.marktr(d)]=M;
bV[bU.marktr(w)]=I;
bV[bU.marktr(x)]=bE;
bV[bU.marktr(s)]=bD;
bV[bU.marktr(F)]=V;
bV[bU.marktr(q)]=bt;
bV[bU.marktr(n)]=bn;
bV[bU.marktr(C)]=bo;
bR._keyNames=bV;
}});
})();
(function(){var a="qx.data.marshal.IMarshaler";
qx.Interface.define(a,{members:{toClass:function(b,c){},toModel:function(d){}}});
})();
(function(){var g="qx.data.model.",f="",e='"',d="change",c="qx.data.marshal.Json",b="set",a="_applyEventPropagation";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.data.marshal.IMarshaler],construct:function(F){arguments.callee.base.call(this);
this.__wc=F;
},statics:{__wd:null,createModel:function(l,m){if(this.__wd===null){this.__wd=new qx.data.marshal.Json();
}this.__wd.toClass(l,m);
return this.__wd.toModel(l);
}},members:{__wc:null,__we:function(t){var u=[];

for(var v in t){u.push(v);
}return u.sort().join(e);
},toClass:function(w,x){if(qx.lang.Type.isNumber(w)||qx.lang.Type.isString(w)||qx.lang.Type.isBoolean(w)||w==null){return;
}if(qx.lang.Type.isArray(w)){for(var i=0;i<w.length;i++){this.toClass(w[i],x);
}return ;
}var z=this.__we(w);
if(this.__wc&&this.__wc.getModelClass&&this.__wc.getModelClass(z)!=null){return;
}for(var D in w){this.toClass(w[D],x);
}if(qx.Class.isDefined(g+z)){return;
}var E={};

for(var D in w){D=D.replace(/-/g,f);
E[D]={};
E[D].nullable=true;
E[D].event=d+qx.lang.String.firstUp(D);

if(x){E[D].apply=a;
}}if(this.__wc&&this.__wc.getModelSuperClass){var C=this.__wc.getModelSuperClass(z)||qx.core.Object;
}else{var C=qx.core.Object;
}var A=[];

if(this.__wc&&this.__wc.getModelMixins){var B=this.__wc.getModelMixins(z);
if(!qx.lang.Type.isArray(B)){if(B!=null){A=[B];
}}}if(x){A.push(qx.data.marshal.MEventBubbling);
}var y={extend:C,include:A,properties:E};
qx.Class.define(g+z,y);
},__wf:function(h){var j;
if(this.__wc&&this.__wc.getModelClass){j=this.__wc.getModelClass(h);
}
if(j!=null){return (new j());
}else{var k=qx.Class.getByName(g+h);
return (new k());
}},toModel:function(n){if(qx.lang.Type.isNumber(n)||qx.lang.Type.isString(n)||qx.lang.Type.isBoolean(n)||qx.lang.Type.isDate(n)||n==null){return n;
}else if(qx.lang.Type.isArray(n)){var r=new qx.data.Array();

for(var i=0;i<n.length;i++){r.push(this.toModel(n[i]));
}return r;
}else if(qx.lang.Type.isObject(n)){var o=this.__we(n);
var s=this.__wf(o);
for(var q in n){var p=q.replace(/-/g,f);
s[b+qx.lang.String.firstUp(p)](this.toModel(n[q]));
}return s;
}throw new Error("Unsupported type!");
}},destruct:function(){this.__wc=null;
}});
})();
(function(){var a="qx.ui.core.Spacer";
qx.Class.define(a,{extend:qx.ui.core.LayoutItem,construct:function(c,d){arguments.callee.base.call(this);
this.setWidth(c!=null?c:0);
this.setHeight(d!=null?d:0);
},members:{checkAppearanceNeeds:function(){},addChildrenToQueue:function(b){},destroy:function(){if(this.$$disposed){return;
}var parent=this.$$parent;

if(parent){parent._remove(this);
}qx.ui.core.queue.Dispose.add(this);
}}});
})();
(function(){var a="qx.ui.core.MRemoteLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this.getChildrenContainer().setLayout(b);
},getLayout:function(){return this.getChildrenContainer().getLayout();
}}});
})();
(function(){var p="Integer",o="_applyContentPadding",n="resetPaddingRight",m="setPaddingBottom",l="resetPaddingTop",k="qx.ui.core.MContentPadding",j="resetPaddingLeft",i="setPaddingTop",h="setPaddingRight",g="resetPaddingBottom",c="contentPaddingLeft",f="setPaddingLeft",e="contentPaddingTop",b="shorthand",a="contentPaddingRight",d="contentPaddingBottom";
qx.Mixin.define(k,{properties:{contentPaddingTop:{check:p,init:0,apply:o,themeable:true},contentPaddingRight:{check:p,init:0,apply:o,themeable:true},contentPaddingBottom:{check:p,init:0,apply:o,themeable:true},contentPaddingLeft:{check:p,init:0,apply:o,themeable:true},contentPadding:{group:[e,a,d,c],mode:b,themeable:true}},members:{__im:{contentPaddingTop:i,contentPaddingRight:h,contentPaddingBottom:m,contentPaddingLeft:f},__in:{contentPaddingTop:l,contentPaddingRight:n,contentPaddingBottom:g,contentPaddingLeft:j},_applyContentPadding:function(q,r,name){var s=this._getContentPaddingTarget();

if(q==null){var t=this.__in[name];
s[t]();
}else{var u=this.__im[name];
s[u](q);
}}}});
})();
(function(){var c="showcase.Page",b="showcase.AbstractContent",a="qx.ui.core.Widget";
qx.Class.define(b,{extend:qx.core.Object,construct:function(d){this.setPage(d);
},properties:{page:{check:c},view:{check:a}}});
})();
(function(){var o="short",n="long",m="selection[0]",l="medium",k="Cut",j="Copy",h="language",g="Paste",f="full",e="selection[0].selected",bF="Territory code:",bE="icon/16/actions/edit-find.png",bD="Time format short:",bC="Ctrl+V",bB="icon/16/actions/edit-delete.png",bA="icon/16/actions/edit-cut.png",bz="United States",by="Date medium:",bx=".png",bw="Date long:",v="DE",w="en",t="Time format long:",u="Mexico",r="button",s="Locale:",p="AT",q="Undo",D="Date short:",E="Austria",W="Format of %1:",S="Date format short:",bf="changeLocale",ba="Search",br="MX",bl="center",L="Ctrl+X",bv="wide",bt="es",bs="US",J="middle",O="Time short:",Q="A date:",U="name",X="GB",bb="icon",bh="ES",bn="Germany",x="_",y="Date format medium:",N="de",be="F3",bd="Date format full:",bc="Week start:",bj="Ctrl+F",bi="icon/16/actions/edit-paste.png",Y="Del",bg="showcase.page.i18n.Content",a="Date format long:",bm="right",z="icon/16/actions/edit-copy.png",A="country",T="selection[0].countries",b="Spain",d="selection[0].selected.code",I="Locale Information",B="Redo",C="Delete",G="model",V="Ctrl+C",bp="Date full:",bo="Ctrl+A",P="Search Again",bq="Localized ComboBox:",K="Select All",bk="Ctrl+Z",F="Time long:",H="Ctrl+Y",c="Command Menu (keyboard shortcuts)",R="showcase/i18n/",M="Form Elements",bu="Great Britain";
qx.Class.define(bg,{extend:showcase.AbstractContent,include:qx.locale.MTranslation,construct:function(bG){arguments.callee.base.call(this,bG);
this.setView(this._createView());
},members:{__rM:null,__rN:null,_createView:function(){var cf=new qx.ui.layout.Grid(10,15);
cf.setColumnFlex(0,1);
cf.setColumnFlex(1,1);
var ce=new qx.ui.container.Composite(cf).set({padding:10});
ce.add(this.__rO(),{row:0,column:0,colSpan:2});
ce.add(this.__rP(),{row:1,column:0});
ce.add(this.__rQ(),{row:1,column:1});
return ce;
},__rO:function(){var ck=new qx.ui.form.RadioButtonGroup(new qx.ui.layout.HBox(10).set({alignX:bl}));
var cl=this.__rM=qx.data.marshal.Json.createModel([{language:w,selected:null,countries:[{code:bs,name:bz},{code:X,name:bu}]},{language:bt,selected:null,countries:[{code:bh,name:b},{code:br,name:u}]},{language:N,selected:null,countries:[{code:v,name:bn},{code:p,name:E}]}]);

for(var i=0;i<cl.getLength();i++){cl.getItem(i).setSelected(cl.getItem(i).getCountries().getItem(0));
}var cj=new qx.data.controller.List(null,ck,h);
this.__rN=cj;
cj.setDelegate({createItem:function(){return new qx.ui.form.RadioButton().set({show:bb,appearance:r});
}});
cj.setIconPath(h);
cj.setIconOptions({converter:function(bH){return R+bH+bx;
}});
cj.setModel(cl);
cj.getSelection().push(cl.getItem(0));
this.__rN.bind(d,this,A);
return ck;
},setCountry:function(bI){if(bI){var bJ=this.__rN.getSelection().getItem(0).getLanguage();
qx.locale.Manager.getInstance().setLocale(bJ+x+bI);
}},__rP:function(){var bV=new qx.ui.layout.Grid(10,10);
bV.setColumnFlex(0,1);
bV.setColumnFlex(1,1);
bV.setColumnAlign(0,bm,J);
var bS=new qx.ui.groupbox.GroupBox(this.tr(M)).set({width:0,minWidth:0});
bS.setLayout(bV);
bS.add(new qx.ui.basic.Label(this.tr(bF)),{row:0,column:0});
var bO=new qx.ui.form.SelectBox();
var bU=new qx.data.controller.List(null,bO,U);
this.__rN.bind(T,bU,G);
this.__rN.bind(e,bU,m);
bU.bind(m,this.__rN,e);
bS.add(bO,{row:0,column:1});
bS.add(new qx.ui.basic.Label(this.tr(bq)),{row:1,column:0});
var bK=new qx.ui.form.ComboBox();
bK.add(new qx.ui.form.ListItem(this.tr(k)));
bK.add(new qx.ui.form.ListItem(this.tr(g)));
bK.add(new qx.ui.form.ListItem(this.tr(j)));
bS.add(bK,{row:1,column:1});
var bX=new qx.ui.basic.Label(this.tr(Q));
bS.add(bX,{row:2,column:0});
var cb=new qx.ui.form.DateField();
cb.setValue(new Date);
bS.add(cb,{row:2,column:1});
var bR=new qx.ui.control.DateChooser;
bS.add(bR,{row:3,column:0,colSpan:2});
var bQ=new qx.ui.core.Command(bk);
var bT=new qx.ui.core.Command(H);
var bL=new qx.ui.core.Command(L);
var bP=new qx.ui.core.Command(V);
var cc=new qx.ui.core.Command(bC);
var cd=new qx.ui.core.Command(Y);
var ca=new qx.ui.core.Command(bo);
var bM=new qx.ui.core.Command(bj);
var bY=new qx.ui.core.Command(be);
var bN=new qx.ui.menu.Menu;
bN.add(new qx.ui.menu.Button(this.tr(q),null,bQ));
bN.add(new qx.ui.menu.Button(this.tr(B),null,bT));
bN.add(new qx.ui.menu.Separator());
bN.add(new qx.ui.menu.Button(this.tr(k),bA,bL));
bN.add(new qx.ui.menu.Button(this.tr(j),z,bP));
bN.add(new qx.ui.menu.Button(this.tr(g),bi,cc));
bN.add(new qx.ui.menu.Button(this.tr(C),bB,cd));
bN.add(new qx.ui.menu.Button(this.tr(K),null,ca));
bN.add(new qx.ui.menu.Separator());
bN.add(new qx.ui.menu.Button(this.tr(ba),null,bM));
bN.add(new qx.ui.menu.Button(this.tr(P),null,bY));
var bW=new qx.ui.form.MenuButton(this.tr(c),null,bN);
bS.add(bW,{row:4,column:0,colSpan:2});
return bS;
},__rQ:function(){var ch=new qx.ui.groupbox.GroupBox(this.tr(I),bE).set({width:0,minWidth:0,allowGrowY:true});
ch.setLayout(new qx.ui.layout.Grow());
var ci=new qx.ui.basic.Label().set({rich:true,allowGrowX:true,allowGrowY:true});
ch.add(ci);
var cg=[];
cg.push("<table id='i18n'><tr><td>");

for(var i=0;i<15;i++){cg.push("");
cg.push("</td><td>");
cg.push("");
cg.push("</td></tr><td>");
}cg.push("");
cg.push("</td><td>");
cg.push("");
cg.push("</td></tr></table>");
this.updateLocaleInformation=function(){var i=0;
cg[(i++*2)+1]=this.tr(s);
cg[(i++*2)+1]=qx.locale.Manager.getInstance().getLocale();
cg[(i++*2)+1]=this.tr(bF);
cg[(i++*2)+1]=qx.locale.Manager.getInstance().getTerritory();
cg[(i++*2)+1]=this.tr(S);
cg[(i++*2)+1]=qx.locale.Date.getDateFormat(o);
cg[(i++*2)+1]=this.tr(D);
cg[(i++*2)+1]=(new qx.util.format.DateFormat(qx.locale.Date.getDateFormat(o))).format(new Date());
cg[(i++*2)+1]=this.tr(y);
cg[(i++*2)+1]=qx.locale.Date.getDateFormat(l);
cg[(i++*2)+1]=this.tr(by);
cg[(i++*2)+1]=(new qx.util.format.DateFormat(qx.locale.Date.getDateFormat(l))).format(new Date());
cg[(i++*2)+1]=this.tr(a);
cg[(i++*2)+1]=qx.locale.Date.getDateFormat(n);
cg[(i++*2)+1]=this.tr(bw);
cg[(i++*2)+1]=(new qx.util.format.DateFormat(qx.locale.Date.getDateFormat(n))).format(new Date());
cg[(i++*2)+1]=this.tr(bd);
cg[(i++*2)+1]=qx.locale.Date.getDateFormat(f);
cg[(i++*2)+1]=this.tr(bp);
cg[(i++*2)+1]=(new qx.util.format.DateFormat(qx.locale.Date.getDateFormat(f))).format(new Date());
cg[(i++*2)+1]=this.tr(bD);
cg[(i++*2)+1]=qx.locale.Date.getTimeFormat(o);
cg[(i++*2)+1]=this.tr(O);
cg[(i++*2)+1]=(new qx.util.format.DateFormat(qx.locale.Date.getTimeFormat(o))).format(new Date());
cg[(i++*2)+1]=this.tr(t);
cg[(i++*2)+1]=qx.locale.Date.getTimeFormat(n);
cg[(i++*2)+1]=this.tr(F);
cg[(i++*2)+1]=(new qx.util.format.DateFormat(qx.locale.Date.getTimeFormat(n))).format(new Date());
cg[(i++*2)+1]=this.tr(bc);
cg[(i++*2)+1]=qx.locale.Date.getDayName(bv,qx.locale.Date.getWeekStart());
cg[(i++*2)+1]=this.tr(W,10000.12);
cg[(i++*2)+1]=qx.util.format.NumberFormat.getInstance().format(10000.12);
ci.setValue(cg.join(""));
};
qx.locale.Manager.getInstance().addListener(bf,this.updateLocaleInformation,this);
this.updateLocaleInformation();
return ch;
}}});
})();
(function(){var n="dragover",m="items",k="drag",j="dragend",h="drop",g="droprequest",f="dragstart",d="groupbox/legend",c="printer",b="icon",bl="Battery",bk="Scanner",bj=".png",bi="Soundblaster",bh="Cart",bg="Cell Phone",bf="BluRay Drive",be="computer",bd="WiFi",bc="camera-photo",u="Printer",v="DVD",s="network-wired",t="Keyboard",q="HDD",r="center",o="name",p="Computer",y="pda",z="move",H="showcase.page.dragdrop.Content",F="middle",P="PDA",K="Camera",X="selected",U="iPod",B="icon/64/actions/object-flip-horizontal.png",bb="network-wireless",ba="Mouse",Y="drive-optical",A="camera-web",D="media-flash",E="Display",G="Mic.",I="input-mouse",L="SD Card",R="Network Cable",W="icon/64/devices/",w="battery",x="drive-harddisk",C="scanner",O="audio-input-microphone",N="media-optical",M="Shop",T="phone",S="Webcam",J="input-keyboard",Q="multimedia-player",a="audio-card",V="display";
qx.Class.define(H,{extend:showcase.AbstractContent,construct:function(bn){arguments.callee.base.call(this,bn);
this.setView(this._createView());
},members:{__rR:null,__rS:null,_createView:function(){var bu=new qx.ui.layout.Grid();
bu.setRowFlex(1,1);
bu.setColumnFlex(0,1);
bu.setColumnFlex(2,1);
bu.setColumnAlign(1,r,F);
var bv=new qx.ui.container.Composite(bu);
bv.setPadding(20);
bv.add(new qx.ui.basic.Label(M).set({appearance:d,paddingBottom:5}),{row:0,column:0});
bv.add(new qx.ui.basic.Label(bh).set({appearance:d,paddingBottom:5}),{row:0,column:2});
var bo=new qx.ui.form.List();
bo.set({draggable:true,droppable:true});
bv.add(bo,{row:1,column:0});
bo.addListener(f,this.__rV,this);
bo.addListener(g,this.__rU,this);
bo.addListener(h,this.__rT,this);
bo.addListener(k,this.__rX,this);
bo.addListener(j,this.__rW,this);
var bs=new qx.ui.basic.Image(B);
bs.setPadding(10);
bv.add(bs,{row:1,column:1});
var bt=new qx.ui.form.List();
bt.set({draggable:true,droppable:true});
bv.add(bt,{row:1,column:2});
bt.addListener(f,this.__rV,this);
bt.addListener(g,this.__rU,this);
bt.addListener(h,this.__rT,this);
bt.addListener(k,this.__rX,this);
bt.addListener(j,this.__rW,this);
var bp=qx.data.marshal.Json.createModel([{"name":bk,"icon":C},{"name":bi,"icon":a},{"name":G,"icon":O},{"name":bl,"icon":w},{"name":K,"icon":bc},{"name":S,"icon":A},{"name":p,"icon":be},{"name":E,"icon":V},{"name":q,"icon":x},{"name":bf,"icon":Y},{"name":t,"icon":J},{"name":ba,"icon":I},{"name":L,"icon":D},{"name":v,"icon":N},{"name":U,"icon":Q},{"name":R,"icon":s},{"name":bd,"icon":bb},{"name":P,"icon":y},{"name":bg,"icon":T},{"name":u,"icon":c}]);
var bq=new qx.data.controller.List(null,bo);
bq.setLabelPath(o);
bq.setIconPath(b);
bq.setIconOptions({converter:function(bm){return W+bm+bj;
}});
bq.setModel(bp);
var br=new qx.ui.form.ListItem();
this.__rR=br;
br.setOpacity(0.5);
br.setZIndex(500);
br.addState(X);
br.setLayoutProperties({left:-1000,top:-1000});
qx.core.Init.getApplication().getRoot().add(br);
return bv;
},__rT:function(e){var bw=e.getData(m);
var by=e.getOriginalTarget();
var bx=e.getTarget();

if(by instanceof qx.ui.form.List){for(var i=0,l=bw.length;i<l;i++){bx.add(bw[i]);
}}else if(by instanceof qx.ui.form.ListItem){for(var i=bw.length-1;i>=0;i--){bx.addAfter(bw[i],by);
}}},__rU:function(e){var bB=e.getTarget();
var bA=bB.getSelection().concat();
e.addData(m,bA);
},__rV:function(e){e.addType(m);
e.addAction(z);
var bz=e.getTarget().getSelection()[0];
this.__rR.set({label:bz.getLabel(),icon:bz.getIcon(),width:bz.getBounds().width});
},__rW:function(e){this.__rS&&this.__rS.removeState(n);
this.__rR.setDomPosition(-1000,-1000);
},__rX:function(e){var bC=e.getOriginalTarget();

if(bC instanceof qx.ui.form.ListItem){if(bC!=this.__rS){this.__rS&&this.__rS.removeState(n);
bC.addState(n);
this.__rS=bC;
}}else{this.__rS&&this.__rS.removeState(n);
}this.__rR.setDomPosition(e.getDocumentLeft()+15,e.getDocumentTop()+15);
}}});
})();
(function(){var i="legend",h="frame",g="middle",f="top",d="resize",c="qx.ui.groupbox.GroupBox",b="groupbox",a="_applyLegendPosition";
qx.Class.define(c,{extend:qx.ui.core.Widget,include:[qx.ui.core.MRemoteChildrenHandling,qx.ui.core.MRemoteLayoutHandling,qx.ui.core.MContentPadding,qx.ui.form.MForm],implement:[qx.ui.form.IForm],construct:function(j,k){arguments.callee.base.call(this);
this._setLayout(new qx.ui.layout.Canvas);
this._createChildControl(h);
this._createChildControl(i);
if(j!=null){this.setLegend(j);
}
if(k!=null){this.setIcon(k);
}},properties:{appearance:{refine:true,init:b},legendPosition:{check:[f,g],init:g,apply:a,themeable:true}},members:{_forwardStates:{invalid:true},_createChildControlImpl:function(l){var m;

switch(l){case h:m=new qx.ui.container.Composite();
this._add(m,{left:0,top:6,right:0,bottom:0});
break;
case i:m=new qx.ui.basic.Atom();
m.addListener(d,this._repositionFrame,this);
this._add(m);
break;
}return m||arguments.callee.base.call(this,l);
},_getContentPaddingTarget:function(){return this.getChildControl(h);
},_applyLegendPosition:function(e){if(this.getChildControl(i).getBounds()){this._repositionFrame();
}},_repositionFrame:function(){var r=this.getChildControl(i);
var q=this.getChildControl(h);
var s=r.getBounds().height;
if(this.getLegendPosition()==g){q.setLayoutProperties({"top":Math.round(s/2)});
}else if(this.getLegendPosition()==f){q.setLayoutProperties({"top":s});
}},getChildrenContainer:function(){return this.getChildControl(h);
},setLegend:function(n){var o=this.getChildControl(i);

if(n!==null){o.setLabel(n);
o.show();
}else{o.exclude();
}},getLegend:function(){return this.getChildControl(i).getLabel();
},setIcon:function(p){this.getChildControl(i).setIcon(p);
},getIcon:function(){this.getChildControl(i).getIcon();
}}});
})();
(function(){var a="showcase.page.AbstractDesktopContent";
qx.Class.define(a,{extend:showcase.AbstractContent,construct:function(b){arguments.callee.base.call(this,b);
this.setView(this._createView());
},members:{_createView:function(){var d=new qx.ui.window.Desktop(new qx.ui.window.Manager());
var c=new qx.ui.window.Window();
c.set({showClose:false,showMinimize:false,contentPadding:0});
this._addWindowContent(c);
d.add(c);
c.moveTo(30,20);
c.open();
return d;
},_addWindowContent:function(e){throw new Error("Abstract method call!");
}}});
})();


qx.$$loader.init();


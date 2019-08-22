var newFile = function (x,y)
{
    var cs = new CSInterface();
    cs.evalScript("newFile("+x+","+y+")");
}

var structure = function ()
{
    var cs = new CSInterface();
    cs.evalScript("structure()");
}

var expCA = function ()
{
    var cs = new CSInterface();
    cs.evalScript("expCA()");
}

var expNMR = function ()
{
    var cs = new CSInterface();
    cs.evalScript("expNMR()");
}
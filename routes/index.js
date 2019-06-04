import Axios from "axios";

export default function routes(app, addon) {
    // Redirect root path to /atlassian-connect.json,
    // which will be served by atlassian-connect-express.
    app.get('/', (req, res) => {
        res.redirect('/atlassian-connect.json');
    });

    // This is an example route used by "generalPages" module (see atlassian-connect.json).
    // Verify that the incoming request is authenticated with Atlassian Connect.
    app.get('/hello-world', addon.authenticate(), (req, res) => {
        // Rendering a template is easy; the render method takes two params:
        // name of template and a json object to pass the context in.
        res.render('hello-world', {
            title: 'Atlassian Connect'
            //issueId: req.query['issueId']
        });
    });

    // Add additional route handlers here...

    app.get('/contact', addon.authenticate(), (req, res) => {
		res.render('activity', { title: "Jira 1 activity" });
    });
    app.get('/activity', addon.authenticate(), (req, res) => {
        res.render('contact', { title: "contact list"});
        console.log("jjjjjjj\n\n");
        Axios.get('http://localhost:8080/contacts')
        .then(response => {
            var list = document.getElementById("detail");
            var node = document.createElement("p");
           var n = response.name.length;
           console.log(n);
          
            for(let i = 0; i < n; i++)
            {
                console.log("hhh\n");
                list.appendChild(node.appendChild(document.createTextNode(response.name[i])));
            }
        })
        .catch(error => {
            res.send(error)
        })

    });
}

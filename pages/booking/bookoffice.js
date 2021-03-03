import Head from 'next/head'
import NavigationBar from '../components/NavigationBar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Bookofficepage() {
  return (
<React.Fragment>
  <Router>
    <NavigationBar />
  </Router>
</React.Fragment>
  )
}
  
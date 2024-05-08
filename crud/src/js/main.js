import '../scss/styles.scss';
import * as bootstrap from 'bootstrap'
import Swal from 'sweetalert2'
import { coders } from "../../public/data/database.js"
import { index } from './oprations.js';

const tbody = document.querySelector("tbody")
index(coders, tbody)
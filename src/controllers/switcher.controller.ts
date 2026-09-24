
import { get, push } from '../modules/functions.module.js';

export function print() {
    return get();
};

export function create() {
    return push();
};

export function update() {
    console.log('Update');
};

export function find() {
    console.log('Find');
};

export function remove() {
    console.log('Remove');
}

export function sort() {
    console.log("Sort");
}

export function save() {
    console.log("save & exit");
}



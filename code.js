function augmentingPath(graph, start, end) {
    return searchForPath(graph, start, end, []);
}

function searchForPath(graph, current, end, path) {
    path.push(current);
    if (current == end) { return path; }

    for (const key in graph[current]) {
        if (graph.hasOwnProperty(key) && !path.includes(key)) {
            let x = searchForPath(graph, key, end, [...path]);
            if (x.length > 0) { return x;}
        }
    }
    return [];
}

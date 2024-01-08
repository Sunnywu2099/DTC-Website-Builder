let size1 = $('#size1');
let size2 = $('#size2');
let size3 = $('#size3');

function getRecommendedSize(s1, s2, s3) {
    var sizes = [
        { name: 'XS', size1Range: [25, 39], size2Range: [17, 25], size3Range: [23, 37] },
        { name: 'S', size1Range: [26, 41], size2Range: [19, 27], size3Range: [25, 39] },
        { name: 'M', size1Range: [28, 43], size2Range: [20, 29], size3Range: [26, 41] },
        { name: 'L', size1Range: [30, 44], size2Range: [22, 30], size3Range: [28, 42] },
        // Add more sizes here
    ];

    for (var i = 0; i < sizes.length; i++) {
        var size = sizes[i];
        if (
            isInRange(s1, size.size1Range) &&
            isInRange(s2, size.size2Range) &&
            isInRange(s3, size.size3Range)
        ) {
            return size.name;
        }
    }
    return 'No recommended size found';
}

function isInRange(value, range) {
    return value >= range[0] && value <= range[1];
}
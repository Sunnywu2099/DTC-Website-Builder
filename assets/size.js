let size1 = $('$size1');
let size2 = $('$size2');
let size3 = $('$size3');

function getRecommendedSize(s1, s2, s3) {
    var sizes = [
        { name: 'Small', size1Range: [0, 4], size2Range: [24, 28], size3Range: [32, 36] },
        { name: 'Medium', size1Range: [4, 6], size2Range: [28, 32], size3Range: [36, 40] },
        { name: 'Large', size1Range: [8, 12], size2Range: [32, 35], size3Range: [40, 43] },
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
// https://carosandoval.com/
let sizes = [
    { name: 'XS', size1Range: [25, 39], size2Range: [17, 25], size3Range: [23, 37] },
    { name: 'S', size1Range: [26, 41], size2Range: [19, 27], size3Range: [25, 39] },
    { name: 'M', size1Range: [28, 43], size2Range: [20, 29], size3Range: [26, 41] },
    { name: 'L', size1Range: [30, 44], size2Range: [22, 30], size3Range: [28, 42] },
    // Add more sizes here
];

$('#size1').on('change', function () {
    let size1 = $(this).val();
    if (size1 > 0) {
        $('#size2').prop('disabled', false);
        let filteredSizes = filterSizesBySize1(size1);
        populateSize2Options(filteredSizes);
    } else {
        $('#size2, #size3').prop('disabled', true).val('');
    }
    displayResult('Please enter your size data');
});

$('#size2').on('change', function () {
    let size1 = $('#size1').val();
    let size2 = $(this).val();
    if (size2 > 0) {
        $('#size3').prop('disabled', false);
        let filteredSizes = filterSizesBySize1AndSize2(size1, size2);
        populateSize3Options(filteredSizes);
    } else {
        $('#size3').prop('disabled', true).val('');
    }
    displayResult('Please enter your size data');
});
$('#size3').on('change', function () {
    let size1 = $('#size1').val();
    let size2 = $('#size2').val();
    let size3 = $(this).val();
    if (size3 > 0) {
        let filteredSizes = filterSizesBySize1AndSize2AndSize3(size1, size2, size3);
        displayResult(filteredSizes.length > 0 ? filteredSizes.map(s => s.name).join(', ') : 'Size not found');
    }else{
        displayResult('Please enter your size data');
    }
});

function filterSizesBySize1(size1) {
    return sizes.filter(function (size) {
        return isInRange(size1, size.size1Range);
    });
}
function filterSizesBySize1AndSize2(size1, size2) {
    var filteredSizes = filterSizesBySize1(size1);
    return filteredSizes.filter(function (size) {
        return isInRange(size2, size.size2Range);
    });
}
function filterSizesBySize1AndSize2AndSize3(size1, size2, size3) {
    var filteredSizes = filterSizesBySize1AndSize2(size1, size2);
    return filteredSizes.filter(function (size) {
        return isInRange(size3, size.size3Range);
    });
}
function populateSize2Options(sizes) {
    $('#size2').empty().prop('disabled', false).append('<option value="">Select size</option>');
    sizes.forEach(function (size) {
        $('#size2').append('<option value="' + size.size2Range[0] + '">' + size.size2Range[0] + '</option>');
    });
}
function populateSize3Options(sizes) {
    $('#size3').empty().prop('disabled', false).append('<option value="">Select size</option>');
    sizes.forEach(function (size) {
        $('#size3').append('<option value="' + size.size3Range[0] + '">' + size.size3Range[0] + '</option>');
    });
}
function isInRange(value, range) {
    return value >= range[0] && value <= range[1];
}
function displayResult(result) {
    $('#result').text(result);
}


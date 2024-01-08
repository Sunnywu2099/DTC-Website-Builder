let size1 = $('#size1');
let size2 = $('#size2');
let size3 = $('#size3');
if(size1&&size2&&size3){
    $('#size2, #size3').prop('disabled', true);
    $('#size1').on('input', function () {
        let size1 = parseInt($(this).val());
        if (!isNaN(size1) && size1 >= 0) {
            $('#size2').prop('disabled', false);
        } else {
            $('#size2, #size3').prop('disabled', true).val('');
        }

        updateRecommendedSize();
    });

    $('#size2').on('input', function () {
        let size2 = parseInt($(this).val());
        if (!isNaN(size2) && size2 >= 0) {
            $('#size3').prop('disabled', false);
        } else {
            $('#size3').prop('disabled', true).val('');
        }

        updateRecommendedSize();
    });

    $('#size3').on('input', function () {
        updateRecommendedSize();
    });
}
function updateRecommendedSize() {
    let size1 = parseInt($('#size1').val());
    let size2 = parseInt($('#size2').val());
    let size3 = parseInt($('#size3').val());

    let recommendedSize = getRecommendedSize(size1, size2, size3);
    $('#recommendedSize').text('Recommended size: ' + recommendedSize);
}
function getRecommendedSize(s1, s2, s3) {
    let sizes = [
        { name: 'XS', size1Range: [25, 39], size2Range: [17, 25], size3Range: [23, 37] },
        { name: 'S', size1Range: [26, 41], size2Range: [19, 27], size3Range: [25, 39] },
        { name: 'M', size1Range: [28, 43], size2Range: [20, 29], size3Range: [26, 41] },
        { name: 'L', size1Range: [30, 44], size2Range: [22, 30], size3Range: [28, 42] },
        // Add more sizes here
    ];

    for (let i = 0; i < sizes.length; i++) {
        let size = sizes[i];
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
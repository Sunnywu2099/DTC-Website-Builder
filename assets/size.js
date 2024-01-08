
    let sizes = [
        { name: 'XS', size1Range: [25, 39], size2Range: [17, 25], size3Range: [23, 37] },
        { name: 'S', size1Range: [26, 41], size2Range: [19, 27], size3Range: [25, 39] },
        { name: 'M', size1Range: [28, 43], size2Range: [20, 29], size3Range: [26, 41] },
        { name: 'L', size1Range: [30, 44], size2Range: [22, 30], size3Range: [28, 42] },
        // Add more sizes here
    ];

    $('#size2, #size3').prop('disabled', true);

    $('#size1').on('input', function () {
        let size1 = $(this).val();
        if (!isNaN(size1) && size1 >= 0) {
            $('#size2').prop('disabled', false).attr('min', 0);
        } else {
            $('#size2, #size3').prop('disabled', true).val('');
        }
        let result = filterSizes(size1, null, null);
        displayResult(result);
    });

    $('#size2').on('input', function () {
        let size1 = $('#size1').val();
        let size2 = $(this).val();
        if (!isNaN(size2) && size2 >= 0) {
            $('#size3').prop('disabled', false).attr('min', 0);
            filterSize3Options(size1, size2);
        } else {
            $('#size3').prop('disabled', true).val('');
        }
        let result = filterSizes(size1, size2, null);
        displayResult(result);
    });

    $('#size3').on('input', function () {
        let size1 = $('#size1').val();
        let size2 = $('#size2').val();
        let size3 = $(this).val();
        if (!isNaN(size3) && size3 >= 0) {
            filterRecommendedSize(size1, size2, size3);
        }
        let result = filterSizes(size1, size2, size3);
        displayResult(result);
    });

    function filterSizes(size1, size2, size3) {
        let filteredSizes = sizes.filter(function (size) {
            if (size1 !== null && !isInRange(size1, size.size1Range)) {
                return false;
            }
            if (size2 !== null && !isInRange(size2, size.size2Range)) {
                return false;
            }
            if (size3 !== null && !isInRange(size3, size.size3Range)) {
                return false;
            }
            return true;
        });
        return filteredSizes.length > 0 ? filteredSizes.map(s => s.name).join(', ') : 'none';
    }

    function filterSize3Options(size1, size2) {
        // 根据size1和size2的值，过滤size3的选项范围
        // 这里假设根据你的需求编写过滤逻辑
        $('#size3').attr('min', someFilteredValueBasedOnSize1AndSize2);
    }

    function filterRecommendedSize(size1, size2, size3) {
        // 根据size1、size2和size3的值，动态更新推荐尺码
        // 这里假设根据你的需求编写更新逻辑
        let recommendedSize = calculateRecommendedSize(size1, size2, size3);
        $('#recommendedSize').text('Recommended size: ' + recommendedSize);
    }

    function isInRange(value, range) {
        return value >= range[0] && value <= range[1];
    }

    function displayResult(result) {
        $('#result').text(result);
    }


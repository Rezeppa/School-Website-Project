document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('search');
    var yearSelect = document.getElementById('year');

    function filterPrograms() {
        var searchValue = searchInput.value.toLowerCase();
        var selectedYear = yearSelect.value;

        var programs = document.querySelectorAll('.program-row');
        programs.forEach(function(program) {
            var title = program.querySelector('h2').textContent.toLowerCase();
            var year = program.getAttribute('data-year');

            if ((title.indexOf(searchValue) > -1) && (!selectedYear || year === selectedYear)) {
                program.style.display = '';
            } else {
                program.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', filterPrograms);
    yearSelect.addEventListener('change', filterPrograms);
});
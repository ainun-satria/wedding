// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$('#media-control').click(function(){
    var $audio = $("#audio");
    var $icon = $('#media-icon');

    if (!$audio.data('started')) {
        $icon.removeClass('bi-music-note-beamed');
        $('#media-control').removeClass('stopped');
        $audio.data('started', true)
    }
    
    if($audio.prop("paused")) {
        $($audio.trigger("play"));
        $icon.removeClass('bi-play-circle-fill').addClass('bi-pause-circle-fill');
        
    } else {
        $($audio.trigger("pause"));
        $icon.removeClass('bi-pause-circle-fill').addClass('bi-play-circle-fill');
    }
    
});

$mcy = $('#mc-y');
$mcn = $('#mc-n');

$wry = $('#wr-y');
$wrn = $('#wr-n');

$mcy.change(function(){
    $mcn.prop('checked', false);
});

$mcn.change(function(){
    $mcy.prop('checked', false);
});

$wry.change(function(){
    $wrn.prop('checked', false);
});

$wrn.change(function(){
    $wry.prop('checked', false);
});

$all_input = $('#name, #address, #mc-y, #mc-n, #wr-y, #wr-n, #comment');
$all_text = $('#name, #address, #comment');
$all_checkbox = $('#mc-y, #mc-n, #wr-y, #wr-n');

$('#edit').click(function(){
    if ($(this).val() == 'Edit') {
        $(this).val('Batal');
        $all_input.prop('disabled', false);
        $all_input.each(function(){
            if ($(this).prop('type') === 'checkbox') {
                if ($(this).prop('checked')) {
                    $(this).data('value', true);
                } else {
                    $(this).data('value', false);
                }
            } else {
                $(this).data('value', $(this).val());
            }
        });
    } else if ($(this).val() == 'Batal') {
        $all_input.each(function(){
            if ($(this).prop('type') === 'checkbox') {
                if ($(this).data('value')) {
                    $(this).prop('checked', true)
                } else {
                    $(this).prop('checked', false);
                }
            } else {
                $(this).val($(this).data('value'));
            }
        });
        $(this).val('Edit');
        $all_input.prop('disabled', true);
        $('#submit').prop('disabled', true);
    } else {
        location.href = location.href;
    }
}); 

$all_input.on('change input', function(){
    $('#submit').prop('disabled', false);
});


const namaClass = {
    "model-destination-to" : "Yth",
    "model-destination-title" : "Bapak/Ibu/Saudara/i",
    "model-destination-guestname" : ["satria", "dian", "test"],
    "model-destination-place" : ["banjar","jakarta", "surabaya"],
    "model-destination-greeting" : "Bapak/Ibu",
}

// Loop melalui semua properti di objek
for (let className in namaClass) {
    // Ambil elemen HTML berdasarkan class
    let element = document.querySelector(`.${className}`);
    
    if (element) {
        // Jika nilai properti adalah array, ambil elemen pertama
        if (Array.isArray(namaClass[className])) {
            element.textContent = namaClass[className][0];  // Ambil nilai pertama dari array
        } else {
            // Jika bukan array, langsung isi dengan nilai
            element.textContent = namaClass[className];
        }
    }
}

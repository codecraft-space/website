var theme = [
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "2.00"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#9c9c9c"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7b7b7b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c8d7d4"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#070707"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }
];

var map;
function initMap() {
    var center = { lat: 50.04845, lng: 19.96010 };
    
    var mapEl = document.querySelector('.sectionMap');
    if (!mapEl) return;
        
    map = new google.maps.Map(document.querySelector('.sectionMap'), {
        center: center,
        zoom: 16,
        styles: theme,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        gestureHandling: 'greedy'
    });

    var marker = new google.maps.Marker({
        icon: 'images/internet.png',
        position: center,
        title:"Hello World!"
    });

    marker.setMap(map);
}



var GALLERY = [
    "https://lh3.googleusercontent.com/ntEnn8igeUYYXV7gyVSyn-BSrJ5S2pkhu-jQzz4W4eLcCJuJ219RRgTpmRfzJWEZcbUmRRQZt1x8VFaDYjm2L1EALblh94lWr2xFLyN0b2Zgzy61FUOk-JaurXUI81iOL9VNBByOkg=w1920-h1080",
    "https://lh3.googleusercontent.com/Cd9u7qAAmvvYtxdZNmjHYMVjz3dJLrML6MYyO5x9NjuSxBzQ3an6cFNJ5m9bkTZ5VOWIbkcnqeO_w1IPeBBtSHn0l02J8mpNznMuHVxuGPbifCHbxhasAQibgtsZ71WzTShIB1laGg=w1920-h1080",
    "https://lh3.googleusercontent.com/ipkZcgGYlcVl4uYa4D5nH4K_g_LnsJ1_N-Alu8hHx6rrvLYKPPV4Qrj36zOLLHKhA9RfRQ3BAYxB1g82YmazKG5jBAhDfKD0NQjvP0wDkyfITKgCt6l9PcxzLbLEbBYZBHkGeW88JQ=w1920-h1080",
    "https://lh3.googleusercontent.com/rHjdf3wWSzsEzpbzysu6cE78Tq3CdGulvgGg4UYgCSodesJXtHlY-vUsBs-hH80hYcEB7gQByNKSRweuFQWpxgJoVaa8YAKavRq2qIBE0lkiKa-R1FWLFlqTvc9b2ncIR93TqxQ3TA=w1920-h1080",
    "https://lh3.googleusercontent.com/NOz6DGgFOJDm8K-3FoXoAr9EE3dRjY8UaEc8ROxo76NWjeUyvYpL2n1fhd4CMK5wuzsz4M1HcAFNG0kW2VKENXShO-EEQBUlBhtDLyBOjD8zegAH0oOcyTNIsRR7TDYghTVUZfhOzA=w1920-h1080",
    "https://lh3.googleusercontent.com/JYzVm3STSiYen4IJ2dSKnbyMiNMgF9bA2DUnsfgPklFPWHLG2_5G6Tpfc7McQBCkhtmqlr-3oPE2bC9g0ctQFrjjG2IuwJIbLLO_Wk3xUuYX91TmjCH1AoAgeKF6lIVj6HmXrJ0bEA=w1920-h1080",
    "https://lh3.googleusercontent.com/mNnG2FD6rCmyBve8Vp_PFDGpSFQvC0DRHLX59Ph6nwrddUWK1TYxrL6NFIhuU66x2W43VFRyO7KxNxokUJYhwz1H9X6A4dxk3guExAMMcmbnQzyBmVqMYeTLYhD7-zGaX_haN2LR2Q=w1920-h1080",
    "https://lh3.googleusercontent.com/BcOaIDFD4vmBV9pEWzFo2cXBOvU8vjGwXa2_iktDoqnX7fxd3UTk-eAi4yWohorrJz2r0NZQTtwVL4glnunYTHHfIRRyns3ojhqJqyNjZhVXQ_1IIsgSYNh8K92d6voSdVKp_2vFsw=w1920-h1080",
    "https://lh3.googleusercontent.com/x7jqJ_3rNXT6JcbzCJcdVNye4TxB06qMBciG9EwnzmnycdFO1U_DNLENCMzjUFjJ7Pry_0rKQDFqK_r5GDMzetmdEOJL5y6BrvTo1i3mTY2VW13pyGTYVh65F1f1UoXu7TtYPxhLqQ=w1920-h1080",
    "https://lh3.googleusercontent.com/M6mboYf60VdCtXIKA8ENwVNmNHY43sbszJhviHePLjq4IwgI0ctF8mfgEURci39VvTs732WuGTxmy0drJCxY8PGTc6wjR3fjc1Wlu-cQ3D_lOPInFCJRPKJ0AsDRHG96FocwJ2zhJw=w1920-h1080",
    "https://lh3.googleusercontent.com/9gjOMlnpbMtfOeKUVBUzjwlQrRB3_TiOwTsh_xutG-F32uoHvFRP45199HAhcGoMS3SP950BLbhw8b9Lt5mPBvqbnKQR5j_r9XLph7qrfd4fyNsjV3Ez5KgeLbNCbB9OLS_nk5fhMQ=w1920-h1080",
    "https://lh3.googleusercontent.com/0GHRwNGE82U_3kNDTavIXmkwZ4UXa828JQHVI6_xDtcD31PC3AvyIYTo9k0o6xb7nLw00u_JMsYOHKLEhqjE4LOhHuRo8G1n3ccZZjicXuOvOU1rBJ7wCAHkFUvrIo_fGSZulH2xBw=w1920-h1080",
    "https://lh3.googleusercontent.com/hyxC-pcbL2iKW682-U4Lt79PkAgM_5jzRZprZN7v_EEs85wLLpADj2K8qltiKp_TJbKQzCi90LbVoI45kHanBu6PXNT6L2Qw_sXZhmTDLMOXHbYm4l9mptJ-U41EtQZH3OJ28XzGCQ=w1920-h1080",
    "https://lh3.googleusercontent.com/0ktIOkH_GcwIhGPGM15LUaNrc7whalgLUXKyhfLH2HgpMl9O9HHklXlVikwmpjpxFIqf0d5fuWdJcFlT-u_gnLk5olQh_XuiAhESXsiLjntejykKO8NoYu7zXtJDe431M17TLTF5aw=w1920-h1080",
    "https://lh3.googleusercontent.com/HK0ziS0v6PpN5i4qi4geidE713zRguHMR6sWZJgCAOQzaXOBEfNZq2eNsWGfN3fddeuDVt27IuuIo_0jGdKHI6pHZZ4z305euzNY8B1g13JkCXkZgzsl0Nel8jm8sxUFQO6su7P8Nw=w1920-h1080",
    "https://lh3.googleusercontent.com/Gh2D_dboNy78Ejz4hX0KvfzVX1sltwudzQKuWABYUh4y4d0nWesoKPcs9bz-0yVNbjE-UStgla8V6nb4hYPgIVYNh-ZNRrdzauHt_f2CTdvZeMkVql5bodslVDV59U5ZUO34d1wgwA=w1920-h1080",
    "https://lh3.googleusercontent.com/eS9BZvwikMExJp085fiY6kI5inemsZCC-ws_Dg_YFN2PkVgLCFUuobQgJdKEIdDpLec3DPXwvbRhz_l5cd4wTy0iPiu4PWtc02VDLX5CLGMgr2-1l2eBiyJy3BwnEPo8Zf_u1s11oQ=w1920-h1080",
    "https://lh3.googleusercontent.com/AwVJrsXSZsA4ndJ_tZepArIv9C-hIaH6VLBxLul0_gkWndJXcRtSykrKBpuC_HqnkqpkEwn7bnTRVeelBXHnjiMB8ARq2DOa8uCCeo-1W49lpP67CYTQRZSLMUbbCTtOa7DB7NWcOw=w1920-h1080",
    "https://lh3.googleusercontent.com/O1pKRmE-sEAxPSB6iZr6iH_p2xNyCbZtuGyqc-eeDKO-bUsnXrBeiHcstYs0KQpgkb_FQ3Z53PzoOTJoXBODaErnr0Mu_Rn3XeA0nRI-zW5rqKOekyfF6Rgt7QRTdPUfbi5-xduWGQ=w1920-h1080",
    "https://lh3.googleusercontent.com/JvxKi5LMEYJY0BgD9I57QiWSescZCY-WjEZVOLHGR_CI4LdNQ_On5DzR9_EmWOd-a6LZdLUpLDbAz1W62KWuiFqejwLtA7ulZ-wutSHkxahJ3yxQ8Dh_RqMHNBgyjqO9o0fZng3CeQ=w1920-h1080",
    "https://lh3.googleusercontent.com/yWKlP_7GVceIcRrHX7Ywbyc02oYkOgy7UTg0uxQ4qsK8lNGUEOW8Ng2uY2CbVwWnVXJKZO1gHrIyA6HevJeH2NgHxkfiA6KuswcZk7muDgETsh36tb3r95hpn3P588lL3oGd8BXybA=w1920-h1080",
    "https://lh3.googleusercontent.com/w08lTyqne-TUDRreD9FVSPFxqZNcXUbmsN9QZXPFmLSk3Q4cJOwViW1lAhT_Co_b-PmUKAnMf2GX9ct6mmN-aBHRAMwsbTqf7BrRU-bZG6bJxAitAHE1iu0INVexW0CYfpC4La36sQ=w1920-h1080",
    "https://lh3.googleusercontent.com/hmKNjROp3D-7v98iaVNuAuuI2aUgGclKJZkIQhud_7E1REnT0eVzNbU9Rsswnv4_51hf_wJwIT-Sw0VDjEiVYQ4CrjwOnJEbMC6OQTB1TZ7PlnhykuxPvudi9iWwge1YrSHQBY4UDQ=w1920-h1080",
    "https://lh3.googleusercontent.com/PfdB5GbH45ZPXFIEfwhPdGjuNZILTcM6GGpI_r7O3XJBnKp0U6W8VtFYj0fhP5TatiVaQsmeviJ5Lzw5_IHEzsltSrAtDZ-mcTjgj7M8Tk94mp81PBJtUChiLQ1KudgnVrG8uWb12A=w1920-h1080",
    "https://lh3.googleusercontent.com/8BafvTGvE5OYaZ3zQTSQggpa3ARa3tGURUtM3FhYS3zbuywVhUM_k95ITbOQWWBT5tkWNf9tO9WooZ8Fo6hlHqj6Wc77fo2dhnJZFuEJ4bUawtn5aX2FSyUMfP_9kjeffqF8cwPLxQ=w1920-h1080",
    "https://lh3.googleusercontent.com/7XCLhcpVR1mRrj9D41QmIIuMd4SOlaX2Rc5La9GW_BXCOmQAPbns_onLYj1e6dEX5JyQpfdKrSs9hK3uLP8NdsArX9xH432VMTFrR18jvYNVghB-4ivv-jQWvNdW3Q0O3diouf2oMg=w1920-h1080",
    "https://lh3.googleusercontent.com/YFkQxxVD8UQr79JNzIvD302G6AZVKT5Em8ndwR6VSoiUO4gNG1lpVEXoiTqqfjCa5pS1wgMCz_wpWu1LP7Ktmz4Cqr2O85zSnX5N1ZnhXEAeAFf_04AFrjZ3haQnBSfcTnmwT9CCbw=w1920-h1080",
    "https://lh3.googleusercontent.com/Rdizp-hGQUJPN2qLfLcyty5F0NuV7hlPGrSl6lhUOZr4ljVHuYse0n66cq0PI7hg2TndGNHoPzwT7Ve1fN6KVJq9UzbxmE7Xa7sdhI9z4ZcyhgcdjLvRCwiztt6S_qpCkBdXJW0O1w=w1920-h1080",
    "https://lh3.googleusercontent.com/AsLA6zKVaQ-Efa43NCGdpbKrw2r1d8cxg-hCYC7kMxi7CKQRpV3auoPkb-hm0IBSUruZOSQoaE1XEuG38MXEK_7EeyHCVOGYUAuXrXXfqfBouDiZ02AgtefkWVtgYP-JATHsFoqHZA=w1920-h1080",
    "https://lh3.googleusercontent.com/HM5JuaLeVTt-Ot-XiyabRTJRgoafY4ANCfHwALjKNXx7Sh3akszM7IcKmqvLEAFAyIUjzs_KrMbwjSQ-SpsjJZ168YA6yiP4fnc_BH_FQ5zcDKI7AgxjCzR5jSNEtqPxPujX9LhEjw=w1920-h1080",
    "https://lh3.googleusercontent.com/_ls7fwID9AKMNLoTpFpyDU6k5mYHaAcE-pv7f2uao9Qu4Wy34igxnyXvVzXzMolS5lCsik1k2XEJGTzkKPMBdp0MT1aptKSTUME6PyQ0m0LxDxOTp8mM8IzmrPAv-QLUZDQCRjZA8g=w1920-h1080",
    "https://lh3.googleusercontent.com/YUsIiSODcUL8hWeBD6FAWog0RLeYYJpZfdlg6kuFFilnUzd-_E0b2Q8vodTGVwmYJ0wBShjqCh5Td79fBUJYlgbb01LOTS0BIdLpGnHI_nQfOzgU0RZU9SpePonFXxQRKEOfgS6ayA=w1920-h1080",
    "https://lh3.googleusercontent.com/SOiso_W-QsNljvRepH0BhVMEqiVimFCVAQYVGfjZi-gpp63PYfJUPZ0Mok9OwE67Yw4LM0jUHdHnzlAYtLgI1FNAobM_TM5Vnn1t34ueVU8SVN-XtqfbpVuZkB0AlkgKqPaNoe9POQ=w1920-h1080",
    "https://lh3.googleusercontent.com/kzPPHjAgvlz2-h9o3Soxm145QXwYtya-KMFA3804VW5l0F3Ltx-yK9VkUWxh3fg0N4sDDkNiU448Bdvwg6-wweca8uXMqTAL9-1iuVFe-G4kKf5CqNRbUleIzy0xiTbcvlX2B-WPuA=w1920-h1080"
]
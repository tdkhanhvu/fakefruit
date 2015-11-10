var attributes = [
    {
        'id': 'see',
        'name': 'Nhìn',
        'attributes': [{
            'id': 'photo',
            'name': 'Hình'
        },{
            'id': 'color',
            'name': 'Màu'
        },{
            'id': 'shape',
            'name': 'Dạng'
        },{
            'id': 'size',
            'name': 'Cỡ'
        }
        ]},
    {
        'id': 'touch',
        'name': 'Chạm',
        'attributes': [{
            'id': 'vo',
            'name': 'Vỏ'
        }]},
    {
        'id': 'smelltaste',
        'name': 'Mùi vị',
        'attributes': [{
            'id': 'smell',
            'name': 'Mùi'
        },{
            'id': 'taste',
            'name': 'Vị'
        },{
            'id': 'ruot',
            'name': 'Ruột'
        }]},
    {
        'id': 'Others',
        'name': 'Khác',
        'attributes': [{
            'id':'season',
            'name': 'Mùa'
        },{
            'id': 'weight',
            'name': 'Nặng'
        },{
            'id': 'price',
            'name': 'Giá'
        },{
            'id': 'time',
            'name': 'Bảo quản'
        }]

    }],list = [
    {
        'id': 'tao',
        'name': 'Táo',
        'icon': 'tao.png',
        'types': [
            {
                'id': 'fuji',
                'name': 'Fuji',
                'icon': 'tao_fuji.png',
                'origins': [
                    {
                        'id': 'my',
                        'name': 'Mỹ',
                        'image': 'tao_fuji_my.jpg',
                        'description': {
                            'shape': 'hình dáng hơi vuông (có góc cạnh), cao thành. Cạnh góc của quả đều nên dễ trưng bày, tạo hình đẹp',
                            'color': 'màu đỏ điểm các chấm đỏ hồng cho tới đỏ đậm ở trên bề mặt vỏ táo',
                            'touch': 'bề mặt da láng bóng',
                            'other': ' ',
                            'taste': ''
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'tao_fuji_trungquoc.jpg',
                        'description': {
                            'shape': 'tròn',
                            'color': 'màu hồng phấn',
                            'touch': '',
                            'other': 'không có mùi gì, lòng táo màu vàng, trắng. được bọc trong lưới xốp, có nhiều hạt trắng mịn ngoài vỏ.',
                            'taste': 'xốp, bở, có chút ít vị ngọt'
                        }
                    }
                ]
            },
            {
                'id': 'xanh',
                'name': 'Xanh',
                'icon': 'tao_xanh.png',
                'origins': [
                    {
                        'id': 'my',
                        'name': 'Mỹ',
                        'image': 'tao_xanh_my.jpg',
                        'description': {
                            'shape': '',
                            'color': 'vỏ màu xanh đậm',
                            'touch': '',
                            'other': ' ',
                            'taste': 'giòn, ngọt và có mùi thơm đặc trưng'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'tao_xanh_trungquoc.jpg',
                        'description': {
                            'shape': '',
                            'color': 'màu xanh nhạt hơn',
                            'touch': '',
                            'other': '',
                            'taste': 'có mùi thơm nhưng ăn vẫn có vị chát ở lưỡi dù đã gọt vỏ'
                        }
                    }
                ]
            },
            {
                'id': 'gala',
                'name': 'Gala',
                'icon': 'tao_gala.png',
                'origins': [
                    {
                        'id': 'my',
                        'name': 'Mỹ',
                        'image': 'tao_gala_my.jpg',
                        'description': {
                            'shape': '',
                            'color': '',
                            'touch': '',
                            'other': ' ',
                            'taste': 'nhiều nước, giòn và vị ngọt vừa'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'tao_gala_trungquoc.jpg',
                        'description': {
                            'shape': '',
                            'color': '',
                            'touch': '',
                            'other': '',
                            'taste': 'xốp và vị nhạt, thậm chí không có mùi vị gì.'
                        }
                    }
                ]
            }
        ]
    },
    {
        'id': 'nho',
        'name': 'Nho',
        'icon': 'nho.png',
        'types': [
            {
                'id': 'do',
                'name': 'Đỏ',
                'icon': 'nho_do.png',
                'origins': [
                    {
                        'id': 'phanrang',
                        'name': 'Phan Rang',
                        'image': 'nho_do_ninhthuan.png',
                        'description': {
                            'shape': 'quả nhỏ',
                            'color': 'màu đỏ hoặc tím nhạt',
                            'touch': 'quả mọng, sờ vào quả thấy chắc và cứng',
                            'other': 'Cuống rất tươi, chùm ngắn',
                            'taste': 'Vị chua đậm'
                        }
                    },
                    {
                        'id': 'my',
                        'name': 'Mỹ',
                        'image': 'nho_do_my.jpg',
                        'description': {
                            'shape': 'thuôn dài',
                            'color': 'vỏ sậm hơn',
                            'touch': '',
                            'other': 'Rất ít hoặc không có hạt',
                            'taste': 'Vị ngọt,giòn'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'nho_do_trungquoc.png',
                        'description': {
                            'shape': 'quả tròn, to',
                            'color': 'màu tím nhạt, có lớp phấn trắng đục',
                            'touch': '',
                            'other': 'Ruột có nhiều hạt, mềm',
                            'taste': 'Vị hơi chua'
                        }
                    }
                ]
            }
        ]
    },
    {
        'id': 'cam',
        'name': 'Cam',
        'icon':'cam.png',
        'types': [
            {
                'id': 'cam',
                'name': 'Cam',
                'icon': 'cam.png',
                'origins': [
                    {
                        'id': 'vinh',
                        'name': 'Vinh',
                        'image': 'cam_cam_vinh.jpg',
                        'description': {
                            'shape': 'quả to đều và chín đỏ từ dưới lên',
                            'color': 'màu xanh vàng không đều',
                            'touch': 'vỏ thường bị nám phía trên cuống, hơi mỏng chứ không mỏng tanh',
                            'other': 'mùi thơm, nhiều nước',
                            'taste': 'ngọt nhưng vẫn có một ít vị chua đặc trưng của Cam'
                        }
                    },
                    {
                        'id': 'uc',
                        'name': 'Úc',
                        'image': 'cam_cam_uc.jpg',
                        'description': {
                            'shape': '',
                            'color': 'màu vàng nhạt đều từ đầu đến chân quả cam',
                            'touch': 'bề mặt vỏ dày, căng, xù xì',
                            'other': 'thường bị khô ở đầu quả, ít nước. Lòng quả cam có màu vàng sẫm tương đương màu vỏ',
                            'taste': 'nước màu vàng đậm hơn, mùi nước thơm vừa phải, vị ngọt'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'cam_cam_trungquoc.jpg',
                        'description': {
                            'shape': 'trái to',
                            'color': 'màu vàng sẫm, loang lổ, không đều',
                            'touch': 'vỏ dày và láng mịn, độ bóng cao và dính',
                            'other': 'phần cuống hơi nhọn và phần đít quả hơi bầu.Không hạt',
                            'taste': 'nước vàng nhạt, mùi hăng hắc'
                        }
                    }
                ]
            }
        ]
    },
    {
        'id': 'dau',
        'name': 'Dâu Tây',
        'icon':'dau.png',
        'types': [
            {
                'id': 'dau',
                'name': 'Dâu Tây',
                'icon': 'dau.png',
                'origins': [
                    {
                        'id': 'dalat',
                        'name': 'Đà Lạt',
                        'image': 'dau_dau_dalat.jpg',
                        'description': {
                            'shape': 'Quả vừa phải, không quá to, không đồng đều',
                            'color': 'Đỏ không đồng đều, sậm màu ở thân, phần cuống hơi trắng',
                            'touch': 'Mềm, không nhẵn mịn',
                            'other': 'Phần dài quả: Mỏng ngắn, phủ một phần trên trái dâu, màu xanh nhạt',
                            'taste': 'Mùi thơm đặc trưng, khi ăn mềm dai, có vị chua thanh'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'dau_dau_trungquoc.jpg',
                        'description': {
                            'shape': 'Quả to, độ đồng đều cao',
                            'color': 'Màu đỏ sậm rất đẹp mắt',
                            'touch': 'Quả có độ cứng, mịn',
                            'other': 'Phần dài quả: Màu đỏ đậm hơn, không có màu trắng đan xen',
                            'taste': 'Không có mùi thơm, khi ăn có cảm giác bở, không có vị chua thanh'
                        }
                    }
                ]
            }
        ]
    },
    {
        'id': 'dualuoi',
        'name': 'Dưa Lưới',
        'icon':'dualuoi.png',
        'types': [
            {
                'id': 'dualuoi',
                'name': 'Dưa Lưới',
                'icon': 'dualuoi.png',
                'origins': [
                    {
                        'id': 'vietnam',
                        'name': 'Việt Nam',
                        'image': 'dualuoi_dualuoi_vietnam.jpg',
                        'description': {
                            'shape': 'quả tròn và quả hình bầu dục. Từ 1-2kg',
                            'color': 'màu xanh và màu vàng',
                            'touch': 'vân lưới to và đẹp, cùi dày',
                            'other': '',
                            'taste': 'vị ngọt thanh, ăn giòn'
                        }
                    },                    {
                        'id': 'baokhue',
                        'name': 'Bảo Khuê',
                        'image': 'dualuoi_dualuoi_baokhue.jpg',
                        'description': {
                            'shape': 'vỏ xanh, nặng tối đa 3 kg',
                            'color': '',
                            'touch': 'cùi dày',
                            'other': 'Ruột dưa màu cam',
                            'taste': 'vị ngọt thanh mát và thơm'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'dualuoi_dualuoi_trungquoc.jpg',
                        'description': {
                            'shape': 'quả dài, hình bầu dục, kích cỡ lớn (4-5 kg)',
                            'color': 'màu vàng cũ',
                            'touch': '',
                            'other': 'ruột dưa màu vàng cam, cùi hơi mềm. Khi bổ dưa ra sau vài tiếng, ruột quả sẽ nhanh bị nhũn',
                            'taste': 'ngọt lịm'
                        }
                    }
                ]
            }
        ]
    },
    {
        'id': 'quyt',
        'name': 'Quýt',
        'icon':'quyt.png',
        'types': [
            {
                'id': 'quyt',
                'name': 'Quýt',
                'icon': 'quyt.png',
                'origins': [
                    {
                        'id': 'vietnam',
                        'name': 'Việt Nam',
                        'image': 'quyt_quyt_vietnam.jpg',
                        'description': {
                            'shape': 'Kích thước không đồng đều nhau',
                            'color': 'Thường bị nám, có đốm mờ, màu vàng mỡ gà, không được bắt mắt',
                            'touch': 'Vỏ rất mỏng',
                            'other': '',
                            'taste': 'Thanh nhẹ, chua dịu',
                            'time': 'tháng 10 đến khoảng tháng 2'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'quyt_quyt_trungquoc.jpg',
                        'description': {
                            'shape': 'Kích thước đồng đều nhau, quả dẹt và thấp.',
                            'color': 'Vỏ láng bóng, màu vàng tươi hấp dẫn',
                            'touch': 'Vỏ dày hơn',
                            'other': 'Đầu múi thường hay bị khô, xốp, không được mọng nước',
                            'taste': 'Ngọt đậm, thậm chí có cả vị đắng và mùi hắc'
                        }
                    }
                ]
            }
        ]
    },
    {
        'id': 'hong',
        'name': 'Hồng',
        'icon':'hong.png',
        'types': [
            {
                'id': 'trung',
                'name': 'Trứng',
                'icon': 'hong.png',
                'origins': [
                    {
                        'id': 'dalat',
                        'name': 'Đà Lạt',
                        'image': 'hong_trung_dalat.jpg',
                        'description': {
                            'shape': 'Tròn, dẹt trơn giống trứng gà',
                            'color': 'Vàng cam, có vết thâm, không đều màu',
                            'touch': '',
                            'other': 'Cuống có nhiều đốm đen, không có rãnh',
                            'taste': 'Ngọt béo, ăn rất dẻo và thơm'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'hong_trung_trungquoc.jpg',
                        'description': {
                            'shape': 'To, tròn đều, to dẹt hơi vuông, có khía',
                            'color': 'Đỏ sẫm, bóng mịn',
                            'touch': 'Vỏ bóng, đẹp, không vết xước',
                            'other': 'Không thơm, hơi khô và không mọng nước. Cuống thâm đen',
                            'taste': 'Ngọt'
                        }
                    }
                ]
            },
            {
                'id': 'gion',
                'name': 'Giòn',
                'icon': 'hong.png',
                'origins': [
                    {
                        'id': 'dalat',
                        'name': 'Đà Lạt',
                        'image': 'hong_gion_dalat.jpg',
                        'description': {
                            'shape': 'Tròn',
                            'color': 'Màu xanh nhưng hơi ngả vàng, màu sắc không đều, không bóng',
                            'touch': '',
                            'other': '',
                            'taste': 'Giòn, ngọt và hơi chát'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'hong_gion_trungquoc.jpg',
                        'description': {
                            'shape': 'To',
                            'color': 'Vàng đậm',
                            'touch': '',
                            'other': '',
                            'taste': ''
                        }
                    }
                ]
            }
        ]
    },
    {
        'id': 'le',
        'name': 'Lê',
        'icon':'le.png',
        'types': [
            {
                'id': 'le',
                'name': 'Lê',
                'icon': 'le.png',
                'origins': [
                    {
                        'id': 'vietnam',
                        'name': 'Việt Nam',
                        'image': 'le_le_vietnam.jpg',
                        'description': {
                            'shape': 'Qủa thon dài, cầm chắc tay.',
                            'color': 'Màu vàng đậm, không bóng bẩy và bắt mắt.',
                            'touch': 'Có vỏ ngoài sần sùi',
                            'other': 'Thịt quả trắng, đồng đều, không bị khô xốp. Không sử dụng chất bảo quản nên chỉ để ngoài 2 - 3 ngày đã héo và ủng.',
                            'taste': 'Ngọt, hơi chua, mùi thơm dịu.'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'le_le_trungquoc.jpg',
                        'description': {
                            'shape': 'Qủa tròn đều, bọc trong lưới xốp. ',
                            'color': 'Màu xanh hoặc vàng tươi, bắt mắt',
                            'touch': 'Thường có vỏ ngoài nhẵn mịn, sáng bóng, da căng',
                            'other': 'Thịt quả bị thâm đen hoặc có nhiều vết nứt thâm, lỗ chỗ như kim châm. Có chứa chất bảo quản nên có thể để ngoài thoải mái từ 15 - 20 ngày mà vẫn bóng đẹp. Nếu để tủ lạnh có thể bảo quản tới 3-4 tháng.',
                            'taste': 'Ngọt đậm, không có mùi thơm đặc trưng.'
                        }
                    }
                ]
            }
        ]
    },
    {
        'id': 'luu',
        'name': 'Lựu',
        'icon':'luu.png',
        'types': [
            {
                'id': 'luu',
                'name': 'Lựu',
                'icon': 'luu.png',
                'origins': [
                    {
                        'id': 'vietnam',
                        'name': 'Việt Nam',
                        'image': 'luu_luu_vietnam.jpg',
                        'description': {
                            'shape': 'Nhỏ hơn. Tròn đến méo, cả hình vuông.',
                            'color': 'Xanh, đỏ dần khi chín.',
                            'touch': 'Da sần sùi hoặc bị nám.',
                            'other': 'Hạt nhiều, hạt có màu nhạt hơn, nhiều nước. Mùi thanh.',
                            'taste': 'Mát dịu.',
                            'time': 'Một tuần là héo và dễ hỏng.',
                            'price': 'Cao hơn.'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'luu_luu_trungquoc.jpg',
                        'description': {
                            'shape': 'Lớn hơn. Tròn, đều nhau, đẹp mắt.',
                            'color': 'Trắng hồng.',
                            'touch': 'Vỏ ngoài mịn, căng tròn.',
                            'other': 'Hạt đỏ rực, bắt mắt, các hạt đều nhau. Không mùi hoặc mùi của hoá chất.',
                            'taste': '',
                            'time' : 'Vài tháng vẫn tươi.',
                            'price' : 'Thấp hơn.'
                        }
                    }
                ]
            }
        ]
    },
    {
        'id': 'xoai',
        'name': 'Xoài',
        'icon':'xoai.png',
        'types': [
            {
                'id': 'xoai',
                'name': 'Xoài',
                'icon': 'xoai.png',
                'origins': [
                    {
                        'id': 'vietnam',
                        'name': 'Việt Nam',
                        'image': 'xoai_xoai_vietnam.jpg',
                        'description': {
                            'shape': 'Trái thuôn, cuống nhỏ, hơi lõm sâu',
                            'color': 'Màu vàng sáng',
                            'touch': 'Da căng bóng',
                            'other': 'Khúc đầu của quả xoài chín vàng và cứng',
                            'taste': 'Mùi thơm ngọt đậm',
                            'time': '',
                            'price': '',
                            'weight': '300 - 350g',
                            'season': 'tháng 11 đến tháng 6 âm lịch'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'xoai_xoai_trungquoc.jpg',
                        'description': {
                            'shape': '',
                            'color': 'Xanh, không chín vàng hoặc màu vàng mờ',
                            'touch': 'Thâm đen, vỏ nhăn, nhũn',
                            'other': 'Lấm tấm đen ở cuống. Mùi hắc',
                            'taste': 'Không có vị xoài và ăn nhạt nhẽo',
                            'time' : '1 - 2 tháng',
                            'price' : '',
                            'weight': '400 - 700g',
                            'season': 'tháng 6, tháng 7 đến khoảng tháng 10 âm lịch'
                        }
                    }
                ]
            }
        ]
    },
    {
        'id': 'man',
        'name': 'Mận',
        'icon':'man.png',
        'types': [
            {
                'id': 'man',
                'name': 'Mận',
                'icon': 'man.png',
                'origins': [
                    {
                        'id': 'laocai',
                        'name': 'Lào Cai',
                        'image': 'man_man_laocai.jpg',
                        'description': {
                            'shape': 'Quả nhỏ',
                            'color': 'Tím',
                            'touch': '',
                            'other': '',
                            'taste': 'Ngọt',
                            'time': '',
                            'price': '',
                            'weight': '',
                            'season': 'Hết mùa vào giữa tháng 7'
                        }
                    },
//                    {
//                        'id': 'hau',
//                        'name': 'Hậu',
//                        'image': 'man_man_hau.jpg',
//                        'origin': 'Mộc Châu',
//                        'description': {
//                            'shape': '',
//                            'color': '',
//                            'touch': 'Da căng bóng, khi bóp nhẹ có cảm giác cứng, không bị dập nát',
//                            'other': 'Ruột đỏ mọng. Giòn',
//                            'taste': 'Vị chua',
//                            'time': '2 đến 3 ngày là quả mềm và nhũn như cháo',
//                            'price': 'Đầu mùa 70.000 - 120.000/kg. Bình thường giá 20.000 - 25.000/kg',
//                            'weight': '',
//                            'season': 'Một mùa bắt đầu từ cuối tháng 3. Tháng 5 - 6 mới là chính vụ.'
//                        }
//                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'man_man_trungquoc.jpg',
                        'description': {
                            'shape': 'Quả to',
                            'color': 'Tím',
                            'touch': '',
                            'other': 'Ruột màu vàng ',
                            'taste': 'Rất ngọt',
                            'time' : '',
                            'price' : '25.000 – 30.000 đồng/kg',
                            'weight': '',
                            'season': ''
                        }
                    }
                ]
            }
        ]
    },
    {
        'id': 'dao',
        'name': 'Đào',
        'icon':'dao.png',
        'types': [
            {
                'id': 'dao',
                'name': 'Đào',
                'icon': 'dao.png',
                'origins': [
                    {
                        'id': 'vietnam',
                        'name': 'Việt Nam',
                        'image': 'dao_dao_vietnam.jpg',
                        'description': {
                            'shape': 'kích thước khá nhỏ, chỉ bằng cái chén uống nước trà thường ngày.',
                            'color': 'Xanh lá cây xen lẫn một ít màu hồng phấn',
                            'touch': 'Nhiều lông',
                            'other': '',
                            'taste': 'Thơm giòn tự nhiên, có vị hơi chua',
                            'time': '',
                            'price': '',
                            'weight': '',
                            'season': ''
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'dao_dao_trungquoc.jpg',
                        'description': {
                            'shape': 'Mẫu mã đẹp và đồng đều. Kích thước khá lớn',
                            'color': 'Hồng nhạt, đẹp mắt',
                            'touch': 'Vỏ trơn láng, nhẵn mịn, lông ít hoặc không có.',
                            'other': '',
                            'taste': 'Không giữ được độ giòn lâu, cùi đào thường màu vàng, khi ăn mềm nhũn và ít ngọt',
                            'time' : '',
                            'price' : '',
                            'weight': '',
                            'season': ''
                        }
                    }
                ]
            }
        ]
    }
];

exports.list = list;
exports.attributes = attributes;
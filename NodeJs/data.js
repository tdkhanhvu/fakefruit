var flags = {
        'my': 'my.png',
        'trungquoc': 'trungquoc.png',
        'vietnam': 'vietnam.png',
        'uc': 'uc.png',
        'other': 'vietnam.png'
    }
    ,attributeGroups = [
    {
        'id': 'see',
        'name': 'Nhìn',
        'class': 'danger',
        'attributes': [
            {
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
        'class': 'warning',
        'attributes': [
            {
                'id': 'vo',
                'name': 'Vỏ'
            },{
                'id': 'cuong',
                'name': 'Cuống'
        }]},
    {
        'id': 'smelltaste',
        'name': 'Mùi vị',
        'class':'info',
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
        'class': 'success',
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
                            'shape': 'Hình dáng hơi vuông (có góc cạnh), cao thành. Cạnh góc của quả đều nên dễ trưng bày, tạo hình đẹp.',
                            'color': 'Màu đỏ điểm các chấm đỏ hồng cho tới đỏ đậm ở trên bề mặt vỏ táo.',
                            'vo': 'Bề mặt da láng bóng.'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'tao_fuji_trungquoc.jpg',
                        'description': {
                            'shape': 'Tròn. Được bọc trong lưới xốp.',
                            'color': 'Màu hồng phấn.',
                            'vo': 'Nhiều hạt trắng mịn.',
                            'smell': 'Không mùi.',
                            'ruot': 'Vàng, trắng.',
                            'taste': 'Xốp, bở, có chút ít vị ngọt.'
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
                            'color': 'Xanh đậm.',
                            'smell': 'Thơm đặc trưng',
                            'taste': 'Giòn, ngọt.'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'tao_xanh_trungquoc.jpg',
                        'description': {
                            'color': 'Xanh nhạt hơn.',
                            'smell': 'Có mùi thơm.',
                            'taste': 'Vị chát ở lưỡi dù đã gọt vỏ.'
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
                            'ruot': 'Nhiều nước.',
                            'taste': 'Giòn và vị ngọt vừa.'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'tao_gala_trungquoc.jpg',
                        'description': {
                            'taste': 'Xốp và vị nhạt, thậm chí không có mùi vị gì.'
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
                        'id': 'ninhthuan',
                        'name': 'Ninh Thuận',
                        'image': 'nho_do_ninhthuan.png',
                        'description': {
                            'shape': 'Hình cầu.',
                            'size': 'Nhỏ gần bằng đầu ngón tay.',
                            'color': 'Đỏ tươi đến đỏ đậm.',
                            'vo': 'Mỏng, chùm nhỏ, thon dài. Trái khít vào nhau.',
                            'cuong': 'Cuống rất tươi, chùm ngắn.',
                            'taste': 'Vị chua đậm hoặc ngọt hài hòa.',
                            'weight': '150 - 300gr/chùm.'
                        }
                    },
                    {
                        'id': 'my',
                        'name': 'Mỹ',
                        'image': 'nho_do_my.jpg',
                        'description': {
                            'shape': 'Thuôn dài.',
                            'color': 'Sậm hơn.',
                            'ruot': 'Rất ít hoặc không có hạt.',
                            'taste': 'Vị ngọt, giòn.'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'nho_do_trungquoc.png',
                        'description': {
                            'shape': 'Tròn.',
                            'size': 'To.',
                            'color': 'Màu chín đỏ nhạt. Có lớp phấn trắng đục.',
                            'other': 'Ruột có nhiều hạt, mềm.',
                            'taste': 'Vị hơi chua.',
                            'weight': '500 - 700gr/chùm.'
                        }
                    }
                ]
            },
            {
                'id': 'xanh',
                'name': 'Xanh',
                'icon': 'nho_xanh.png',
                'origins': [
                    {
                        'id': 'ninhthuan',
                        'name': 'Ninh Thuận',
                        'image': 'nho_xanh_ninhthuan.jpg',
                        'description': {
                            'color': 'Xanh ngả vàng nhạt.',
                            'vo': 'Dày. Các trái nho khít nhau. Săn chắc và không bị nhão.',
                            'ruot': 'Có hạt.',
                            'taste': 'Ngọt đậm vừa phải và chua thanh nhẹ.',
                            'weight': '200 - 500gr/chùm.'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'nho_xanh_trungquoc.jpg',
                        'description': {
                            'vo': 'Mỏng. Các trái nhỏ rời rạc nhau.',
                            'ruot': 'Không hạt. Mềm hơn và mọng nước.',
                            'taste': 'Ngọt gắt.',
                            'cuong': 'Thường bị thâm lại.'
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
                            'shape': 'Quả to đều và chín đỏ từ dưới lên.',
                            'color': 'Màu xanh vàng không đều.',
                            'vo': 'Vỏ thường bị nám phía trên cuống, hơi mỏng chứ không mỏng tanh.',
                            'ruot': 'Nhiều nước.',
                            'smell': 'Mùi thơm.',
                            'taste': 'Ngọt nhưng vẫn có một ít vị chua đặc trưng.'
                        }
                    },
                    {
                        'id': 'uc',
                        'name': 'Úc',
                        'image': 'cam_cam_uc.jpg',
                        'description': {
                            'color': 'Màu vàng nhạt đều từ đầu đến chân.',
                            'vo': 'Dày, căng, xù xì. Thường bị khô ở đầu quả.',
                            'ruot': 'Ít nước.Vàng sẫm tương đương màu vỏ. Nước màu vàng đậm hơn.',
                            'smell':'Mùi nước thơm vừa phải.',
                            'taste': 'Ngọt.'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'cam_cam_trungquoc.jpg',
                        'description': {
                            'size': 'To.',
                            'color': 'Màu vàng sẫm, loang lổ, không đều.',
                            'vo': 'Dày và láng mịn. Độ bóng cao và dính. Đít quả hơi bầu.',
                            'cuong': 'Hơi nhọn.',
                            'ruot': 'Không hạt. Nước vàng nhạt.',
                            'smell': 'Hăng hắc.'
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
                            'size': 'Quả vừa phải, không quá to, không đồng đều.',
                            'color': 'Đỏ không đồng đều, sậm màu ở thân.',
                            'cuong': 'Hơi trắng.',
                            'vo': 'Mềm, không nhẵn mịn. Phần dài quả: Mỏng ngắn, phủ một phần trên trái dâu, màu xanh nhạt.',
                            'ruot': 'Thịt quả màu đỏ nhạt, nhiều phần thịt có màu trắng.',
                            'taste': 'Khi ăn mềm dai, có vị chua thanh.',
                            'smell': 'Mùi thơm đặc trưng.',
                            'time': 'Tối đa 2 ngày.'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'dau_dau_trungquoc.jpg',
                        'description': {
                            'size': 'Quả to, độ đồng đều cao.',
                            'color': 'Màu đỏ sậm rất đẹp mắt.',
                            'vo': 'Cứng, nhẵn mịn. Phần dài quả: Màu đỏ đậm hơn, không có màu trắng đan xen.',
                            'ruot': 'Ruột đỏ đậm và không có nhiều phần thịt trắng.',
                            'taste': 'Cảm giác bở, không có vị chua thanh.',
                            'smell': 'Không có mùi thơm.',
                            'time': '7 đến 10 ngày (28 - 32 độ C).'
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
                            'shape': 'Tròn và hình bầu dục.',
                            'weight': '1-2kg.',
                            'color': 'Xanh và vàng.',
                            'vo': 'Vân lưới to và đẹp.',
                            'ruot': 'Cùi dày',
                            'taste': 'Vị ngọt thanh, ăn giòn.'
                        }
                    },{
                        'id': 'baokhue',
                        'name': 'Bảo Khuê',
                        'image': 'dualuoi_dualuoi_baokhue.jpg',
                        'description': {
                            'color': 'Xanh.',
                            'weight': 'Tối đa 3kg.',
                            'ruot': 'Cùi dày. Ruột màu cam.',
                            'taste': 'Vị ngọt thanh mát.',
                            'smell': 'Thơm.',
                            'price': '30,000 - 50,000/kg.'
                        }
                    },{
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'dualuoi_dualuoi_trungquoc.jpg',
                        'description': {
                            'shape': 'Quả dài, hình bầu dục.',
                            'weight': '4-5 kg.',
                            'color': 'Màu vàng cũ.',
                            'ruot': 'Ruột dưa màu vàng cam, cùi hơi mềm. Khi bổ dưa ra sau vài tiếng, ruột quả sẽ nhanh bị nhũn.',
                            'taste': 'Ngọt lịm.',
                            'price': '18,000 - 20,000/kg.'
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
                            'color': 'Màu vàng mỡ gà, không được bắt mắt',
                            'vo': 'Rất mỏng. Thường bị nám, có đốm mờ.',
                            'taste': 'Thanh nhẹ, chua dịu',
                            'time': 'Tháng 10 đến khoảng tháng 2.'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'quyt_quyt_trungquoc.jpg',
                        'description': {
                            'shape': 'Kích thước đồng đều nhau, quả dẹt và thấp.',
                            'color': 'Vàng tươi hấp dẫn.',
                            'vo': 'Dày hơn, láng bóng.',
                            'ruot': 'Đầu múi thường hay bị khô, xốp, không được mọng nước',
                            'taste': 'Ngọt đậm, thậm chí có cả vị đắng.',
                            'smell': 'Mùi hắc.'
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
                            'shape': 'Tròn, dẹt trơn giống trứng gà.',
                            'color': 'Vàng cam, có vết thâm, không đều màu.',
                            'cuong': 'Nhiều đốm đen, không có rãnh.',
                            'taste': 'Ngọt béo, ăn rất dẻo.',
                            'smell': 'Thơm.'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'hong_trung_trungquoc.jpg',
                        'description': {
                            'shape': 'To, tròn đều, to dẹt hơi vuông, có khía.',
                            'color': 'Đỏ sẫm, bóng mịn.',
                            'vo': 'Vỏ bóng, đẹp, không vết xước.',
                            'smell': 'Không thơm.',
                            'ruot': 'Hơi khô và không mọng nước.',
                            'cuong': 'Thâm đen.',
                            'taste': 'Ngọt.'
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
                            'shape': 'Tròn.',
                            'color': 'Màu xanh nhưng hơi ngả vàng, màu sắc không đều, không bóng.',
                            'taste': 'Giòn, ngọt và hơi chát.'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'hong_gion_trungquoc.jpg',
                        'description': {
                            'shape': 'To',
                            'color': 'Vàng đậm'
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
                            'vo': 'Sần sùi.',
                            'ruot': 'Thịt quả trắng, đồng đều, không bị khô xốp.',
                            'time': 'Ngoài: 2 - 3 ngày đã héo và ủng.',
                            'taste': 'Ngọt, hơi chua.',
                            'smell': 'Thơm dịu.',
                            'season': 'Mùa thu.'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'le_le_trungquoc.jpg',
                        'description': {
                            'shape': 'Qủa tròn đều, bọc trong lưới xốp.',
                            'color': 'Màu xanh hoặc vàng tươi, bắt mắt.',
                            'vo': 'Nhẵn mịn, sáng bóng, da căng.',
                            'ruot': 'Thâm đen hoặc có nhiều vết nứt thâm, lỗ chỗ như kim châm.',
                            'time': 'Ngoài: 15 - 20 ngày. Tủ lạnh: 3-4 tháng.',
                            'taste': 'Ngọt đậm.',
                            'smell': 'Không có mùi thơm đặc trưng.'
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
                            'shape': 'Tròn đến méo, cả hình vuông.',
                            'size': 'Nhỏ hơn.',
                            'color': 'Xanh, đỏ dần khi chín.',
                            'vo': 'Da sần sùi hoặc bị nám.',
                            'ruot': 'Hạt nhiều, hạt có màu nhạt hơn, nhiều nước.',
                            'smell': 'Mùi thanh.',
                            'taste': 'Mát dịu.',
                            'time': 'Một tuần là héo và dễ hỏng.',
                            'price': 'Cao hơn.',
                            'season': 'Tháng 9 tới tháng 2.'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'luu_luu_trungquoc.jpg',
                        'description': {
                            'shape': 'Tròn, đều nhau, đẹp mắt.',
                            'size': 'Lớn hơn',
                            'color': 'Trắng hồng.',
                            'vo': 'Vỏ ngoài mịn, căng tròn.',
                            'ruot': 'Hạt đỏ rực, bắt mắt, các hạt đều nhau.',
                            'smell': 'Không mùi hoặc mùi của hoá chất.',
                            'time' : 'Vài tháng vẫn tươi.',
                            'price' : 'Thấp hơn.',
                            'season': 'Bán sớm và dài hơn.'
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
                            'shape': 'Trái thuôn. Khúc đầu của quả xoài chín vàng và cứng.',
                            'color': 'Màu vàng sáng.',
                            'vo': 'Da căng bóng.',
                            'cuong': 'Cuống nhỏ, hơi lõm sâu.',
                            'taste': 'Ngọt đậm.',
                            'smell': 'Mùi thơm.',
                            'weight': '300 - 350g.',
                            'season': 'Tháng 11 đến tháng 6 âm lịch.'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'xoai_xoai_trungquoc.jpg',
                        'description': {
                            'size': 'To.',
                            'color': 'Xanh, không chín vàng hoặc màu vàng mờ.',
                            'vo': 'Thâm đen, vỏ nhăn, nhũn.',
                            'cuong': 'Lấm tấm đen ở cuống..',
                            'smell': 'Mùi hắc.',
                            'taste': 'Không có vị xoài và ăn nhạt nhẽo.',
                            'time' : '1 - 2 tháng.',
                            'weight': '400 - 700g.',
                            'season': 'Tháng 6, tháng 7 đến khoảng tháng 10 âm lịch.'
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
                            'size': 'Quả nhỏ.',
                            'color': 'Tím.',
                            'taste': 'Ngọt.',
                            'season': 'Hết mùa vào giữa tháng 7.'
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
                            'size': 'Quả to.',
                            'color': 'Tím.',
                            'ruot': 'Ruột màu vàng.',
                            'taste': 'Rất ngọt.',
                            'price' : '25.000 – 30.000 đồng/kg.'
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
                            'size': 'Kích thước khá nhỏ, bằng chén uống nước trà.',
                            'color': 'Xanh lá cây xen lẫn một ít màu hồng phấn',
                            'vo': 'Nhiều lông.',
                            'taste': 'Thơm giòn tự nhiên, có vị hơi chua.'
                        }
                    },
                    {
                        'id': 'trungquoc',
                        'name': 'Trung Quốc',
                        'image': 'dao_dao_trungquoc.jpg',
                        'description': {
                            'shape': 'Mẫu mã đẹp và đồng đều.',
                            'size': 'Kích thước khá lớn.',
                            'color': 'Hồng nhạt, đẹp mắt.',
                            'vo': 'Vỏ trơn láng, nhẵn mịn. Lông ít hoặc không có.',
                            'ruot': 'Cùi đào thường màu vàng.',
                            'taste': 'Không giữ được độ giòn lâu. Khi ăn mềm nhũn và ít ngọt.'
                        }
                    }
                ]
            }
        ]
    }
];

exports.list = list;
exports.attributeGroups = attributeGroups;
exports.flags = flags;
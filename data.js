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
        'image': 'tao.jpg',
        'icon': 'tao.png',
        'text': 'Hình dáng trái táo hơi vuông và có góc cạnh là táo Fuji Mỹ hay Trung Quốc? Màu trái táo xanh đậm là táo xanh Mỹ hay Trung Quốc? Ruột trái táo nhiều nước là táo Gala Mỹ hay Trung Quốc?',
        'types': [
            {
                'id': 'fuji',
                'name': 'Táo Fuji',
                'image': 'taofuji.jpg',
                'icon': 'tao_fuji.png',
                'text': 'Hình dáng trái táo hơi vuông và có góc cạnh là táo Fuji Mỹ hay Trung Quốc? Thế còn vỏ nhiều hạt trắng mịn thì sao? Và vị xốp, bở có chút vị ngọt?',
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
                'name': 'Táo Xanh',
                'image': 'taoxanh.jpg',
                'icon': 'tao_xanh.png',
                'text': 'Màu trái táo xanh đậm là táo xanh Mỹ hay Trung Quốc? Thế còn mùi thơm và vị chát ở lưỡi dù đã gọt vỏ thì sao?',
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
                'name': 'Táo Gala',
                'image': 'taogala.jpg',
                'icon': 'tao_gala.png',
                'text': 'Ruột trái táo nhiều nước là táo Gala Mỹ hay Trung Quốc? Thế xốp và vị nhạt, thậm chí không có mùi vị gì thì sao?',
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
        'image': 'nho.jpg',
        'icon': 'nho.png',
        'text': 'Vỏ mỏng, chùm nhỏ, thon dài, trái khít vào nhau là đặc tính của nho đỏ Ninh Thuận, nho Mỹ hay nho Trung Quốc? Màu xanh ngả vành nhạt là đặc tính của nho xanh Ninh Thuận hay nho Trung Quốc?',
        'types': [
            {
                'id': 'do',
                'name': 'Nho Đỏ',
                'image': 'nhodo.jpg',
                'icon': 'nho_do.png',
                'text': 'Vỏ mỏng, chùm nhỏ, thon dài, trái khít vào nhau là đặc tính của nho đỏ Ninh Thuận, nho Mỹ hay nho Trung Quốc? Giữa các loại nho vừa kể trên, loại nào ruột có nhiều hạt, mềm?',
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
                'name': 'Nho Xanh',
                'image': 'nhoxanh.jpg',
                'icon': 'nho_xanh.png',
                'text': 'Màu xanh ngả vành nhạt là đặc tính của nho xanh Ninh Thuận hay nho Trung Quốc? Giữa các loại nho vừa kể trên, loại nào ruột mềm, không hạt và nhiều nước?',
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
        'image': 'cam.jpg',
        'icon':'cam.png',
        'text': 'Vỏ thường bị nám phía trên cuống, hơi mỏng chứ không mỏng tanh là đặc tính của cam Vinh, cam Úc hay cam Trung Quốc? Cam nước nào có vị ngọt và mùi thơm vừa phải?',
        'types': [
            {
                'id': 'cam',
                'name': 'Cam',
                'image': 'cam.jpg',
                'icon': 'cam.png',
                'text': 'Vỏ thường bị nám phía trên cuống, hơi mỏng chứ không mỏng tanh là đặc tính của cam Vinh, cam Úc hay cam Trung Quốc? Cam nước nào có vị ngọt và mùi thơm vừa phải?',
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
        'image': 'dau.jpg',
        'icon':'dau.png',
        'text': 'Quả vừa phải, không quá to, không đồng đều là dâu Đà Lạt hay Trung Quốc? Loại dâu nào thị quả màu đỏ nhạt, nhiều phần thịt có màu trắng?',
        'types': [
            {
                'id': 'dau',
                'name': 'Dâu Tây',
                'image': 'dau.jpg',
                'icon': 'dau.png',
                'text': 'Quả vừa phải, không quá to, không đồng đều là dâu Đà Lạt hay Trung Quốc? Loại dâu nào thị quả màu đỏ nhạt, nhiều phần thịt có màu trắng?',
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
        'image': 'dualuoi.jpg',
        'icon':'dualuoi.png',
        'text': 'Dưa lưới có vân lưới to và đẹp là dưa lưới Việt Nam, Bảo Khuê và Trung Quốc? Loại dưa lưới nào ruột dưa màu vàng cam, cùi hơi mềm và khi bổ dưa ra sau vài tiếng, ruột quả sẽ nhanh bị nhũn?',
        'types': [
            {
                'id': 'dualuoi',
                'name': 'Dưa Lưới',
                'image': 'dualuoi.jpg',
                'icon': 'dualuoi.png',
                'text': 'Dưa lưới có vân lưới to và đẹp là dưa lưới Việt Nam, Bảo Khuê và Trung Quốc? Loại dưa lưới nào ruột dưa màu vàng cam, cùi hơi mềm và khi bổ dưa ra sau vài tiếng, ruột quả sẽ nhanh bị nhũn?',
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
        'image': 'quyt.jpg',
        'icon':'quyt.png',
        'text': 'Quýt màu vàng mỡ gà, không được bắt mắt là quýt Việt Nam hay Trung Quốc? Đầu múi thường hay bị khô, xốp, không được mọng nước là đặc tính của quýt nước nào?',
        'types': [
            {
                'id': 'quyt',
                'name': 'Quýt',
                'image': 'quyt.jpg',
                'icon': 'quyt.png',
                'text': 'Quýt màu vàng mỡ gà, không được bắt mắt là quýt Việt Nam hay Trung Quốc? Đầu múi thường hay bị khô, xốp, không được mọng nước là đặc tính của quýt nước nào?',
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
        'image': 'hong.jpg',
        'icon':'hong.png',
        'text': 'Quả hồng tròn, dẹt trơn giống trứng gà là hồng trứng Đà Lạt hay Trung Quốc? Màu xanh nhưng hơi ngả vàng, màu sắc không đều, không bóng là hồng giòn Đà Lạt và Trung Quốc?',
        'types': [
            {
                'id': 'trung',
                'name': 'Hồng Trứng',
                'image': 'hong.jpg',
                'icon': 'hong.png',
                'text': 'Quả hồng tròn, dẹt trơn giống trứng gà là hồng trứng Đà Lạt hay Trung Quốc? Loại hồng trứng nào có đặc tính hơi khô và không mọng nước?',
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
                'name': 'Hồng Giòn',
                'icon': 'hong.png',
                'text': 'Màu xanh nhưng hơi ngả vàng, màu sắc không đều, không bóng là hồng giòn Đà Lạt và Trung Quốc? Giữa hai loại này, loại nào có hình dáng to hơn?',
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
        'image': 'le.jpg',
        'icon':'le.png',
        'text': 'Thịt quả trắng, đồng đều, không bị khô xốp là lê Việt Nam hay Trung Quốc? Loại lê nào có đặc tính ruột thâm đen hoặc có nhiều vết nứt thâm, lỗ chỗ như kim châm?',
        'types': [
            {
                'id': 'le',
                'name': 'Lê',
                'image': 'le.jpg',
                'icon': 'le.png',
                'text': 'Thịt quả trắng, đồng đều, không bị khô xốp là lê Việt Nam hay Trung Quốc? Loại lê nào có đặc tính ruột thâm đen hoặc có nhiều vết nứt thâm, lỗ chỗ như kim châm?',
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
        'image': 'luu.jpg',
        'icon':'luu.png',
        'text': 'Trái lựu hạt nhiều và có màu nhạt hơn, nhiều nước là lựu Việt Nam hay Trung Quốc? Loại lựu nào có đặc tính là trái tròn, đều nhau, đẹp mắt?',
        'types': [
            {
                'id': 'luu',
                'name': 'Lựu',
                'image': 'luu.jpg',
                'icon': 'luu.png',
                'text': 'Trái lựu hạt nhiều và có màu nhạt hơn, nhiều nước là lựu Việt Nam hay Trung Quốc? Loại lựu nào có đặc tính là trái tròn, đều nhau, đẹp mắt?',
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
        'image': 'xoai.jpg',
        'icon':'xoai.png',
        'text': 'Trái thuôn, khúc đầu của quả xoài chín vàng và cứng là xoài Việt Nam hay Trung Quốc? Loại xoài nào không có vị xoài và ăn nhạt nhẽo?',
        'types': [
            {
                'id': 'xoai',
                'name': 'Xoài',
                'image': 'xoai.jpg',
                'icon': 'xoai.png',
                'text': 'Trái thuôn, khúc đầu của quả xoài chín vàng và cứng là xoài Việt Nam hay Trung Quốc? Loại xoài nào không có vị xoài và ăn nhạt nhẽo?',
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
        'image': 'man.jpg',
        'icon':'man.png',
        'text': 'Trái mận nhỏ và màu tím là mận Lào Cai hay Trung Quốc? Loại mận nào hết mùa vào giữa tháng 7?',
        'types': [
            {
                'id': 'man',
                'name': 'Mận',
                'image': 'man.jpg',
                'icon': 'man.png',
                'text': 'Trái mận nhỏ và màu tím là mận Lào Cai hay Trung Quốc? Loại mận nào hết mùa vào giữa tháng 7?',
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
        'image': 'dao.jpg',
        'icon':'dao.png',
        'text': 'Trái đào kích thước khá nhỏ, bằng chén uống nước trà là đào Việt Nam và Trung Quốc? Loại đào nào vỏ trơn láng, nhẵn mịn trong khi lông ít hoặc không có?',
        'types': [
            {
                'id': 'dao',
                'name': 'Đào',
                'image': 'dao.jpg',
                'icon': 'dao.png',
                'text': 'Trái đào kích thước khá nhỏ, bằng chén uống nước trà là đào Việt Nam và Trung Quốc? Loại đào nào vỏ trơn láng, nhẵn mịn trong khi lông ít hoặc không có?',
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
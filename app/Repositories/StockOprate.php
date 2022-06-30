<?php


namespace App\Repositories;


class StockOprate
{

    private static $ce_point=300;
    private static $pe_point=300;
    private static $ce_strick_point=0;
    private static $pe_strick_point=0;

    private static $currentNifty=0;
    private static $historyData=[];

    public function __construct($currentNifty=0,$historyData=[]){
        self::$currentNifty=$currentNifty;
        self::$historyData=$historyData;
        self::$ce_point=$this->processDifferentPoints();
        self::$pe_point=$this->processDifferentPoints();
        $points=$this->deriveStrickPoints();
        self::$ce_strick_point=$points[0];
        self::$pe_strick_point=$points[1];

    }

    public function deriveStrickPoints($currentNifty=0){
        if($currentNifty<1)$currentNifty=self::$currentNifty;
        return [
            $currentNifty+self::$ce_point,
            $currentNifty-self::$pe_point
        ];
    }

    private function processDifferentPoints($historyData=[]){
        $outArray=[];
        if(count($historyData)<1)$historyData=self::$historyData;
        foreach ($historyData as $key=>$basePoint){
            if($key>0){
                $outArray[]=abs($basePoint-$historyData[$key-1]);
            }
        }
        $avarage=array_sum($outArray)/count($outArray);
        return ceil($avarage / 100) * 100;


    }




}
